import { describe, expect, it } from 'vitest';
import { parse } from 'yaml';
import designMd from '../../DESIGN.md?raw';
import c2b from '../../c2b.config.json';

// DESIGN.md restates the c2b.config.json tokens for AI agents, both as YAML front matter and as
// scale tables in the prose. These checks fail when either drifts from c2b.config.json —
// whenever a token changes there, update DESIGN.md to match.

type TokenValue = string | { value: string };

interface FluidToken {
    value: string;
    fluid: { min: string; max: string };
}

interface TypographyToken {
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: number | string;
    lineHeight?: number | string;
}

interface DesignTokens {
    colors: Record<string, string>;
    typography: Record<string, TypographyToken>;
    rounded: Record<string, string>;
    spacing: Record<string, string>;
}

// Third-party brand colours used only by SocialIcons; DESIGN.md deliberately leaves them out.
const SOCIAL_COLORS = [
    'linkedin',
    'facebook',
    'bluesky',
    'twitter',
    'instagram',
    'youtube',
    'tiktok',
    'orcid',
];

const HEADINGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

const frontMatter = /^---\n([\s\S]*?)\n---\n/.exec(designMd);
const tokens = parse(frontMatter?.[1] ?? '') as DesignTokens;
const body = designMd.slice(frontMatter?.[0].length ?? 0);

const { tokens: c2bTokens, baseStyles } = c2b;
const c2bColors: Record<string, TokenValue> = c2bTokens.color;
const c2bSpacing: Record<string, TokenValue> = c2bTokens.spacing;
const c2bFontSizes: Record<string, FluidToken> = c2bTokens.fontSize;
const c2bLineHeights: Record<string, string> = c2bTokens.lineHeight;
const brandColors = Object.fromEntries(
    Object.entries(c2bColors).filter(([name]) => !SOCIAL_COLORS.includes(name)),
);

const valueOf = (token: TokenValue) => (typeof token === 'string' ? token : token.value);

// Front matter dimensions can't hold clamp(), so fluid spacing is recorded at its maximum.
const maxOf = (value: string) => /^clamp\(.+,\s*([^,]+)\)$/.exec(value)?.[1] ?? value;

const kebab = (name: string) => name.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`);

// Prose scale tables start each row with the CSS custom property (or SCSS variable) in backticks.
const rowFor = (name: string) =>
    body.split('\n').find((line) => line.startsWith(`| \`${name}\``)) ?? '';

const rowsFor = (prefix: string, group: Record<string, TokenValue>) =>
    Object.entries(group).map(
        ([name, token]) => [`${prefix}${kebab(name)}`, valueOf(token)] as const,
    );

const expectRows = (rows: ReadonlyArray<readonly [string, string]>) => {
    for (const [name, value] of rows) {
        expect(rowFor(name).toLowerCase(), `${name} row should list ${value}`).toContain(
            value.toLowerCase(),
        );
    }
};

const typeStyle = (token?: TypographyToken) => ({
    fontSize: token?.fontSize,
    fontWeight: Number(token?.fontWeight),
    lineHeight: Number(token?.lineHeight),
});

describe('DESIGN.md stays in sync with c2b.config.json', () => {
    it('starts with a YAML front matter block', () => {
        expect(frontMatter).not.toBeNull();
    });

    describe('front matter', () => {
        it('lists every non-social colour with the same value', () => {
            const expected = Object.fromEntries(
                Object.entries(brandColors).map(([name, token]) => [
                    name,
                    valueOf(token).toLowerCase(),
                ]),
            );
            const actual = Object.fromEntries(
                Object.entries(tokens.colors).map(([name, value]) => [name, value.toLowerCase()]),
            );

            expect(actual).toEqual(expected);
        });

        it('matches the radius scale', () => {
            expect(tokens.rounded).toEqual(c2bTokens.radius);
        });

        it('records each spacing step at its maximum', () => {
            const expected = Object.fromEntries(
                Object.entries(c2bSpacing).map(([name, token]) => [name, maxOf(valueOf(token))]),
            );

            expect(tokens.spacing).toEqual(expected);
        });

        it('matches the heading and body type styles', () => {
            for (const level of HEADINGS) {
                const style = baseStyles[level];

                expect(typeStyle(tokens.typography[level]), level).toEqual({
                    fontSize: c2bFontSizes[style.fontSize].value,
                    fontWeight: Number(style.fontWeight),
                    lineHeight: Number(baseStyles.heading.lineHeight),
                });
            }

            expect(typeStyle(tokens.typography.body), 'body').toEqual({
                fontSize: c2bFontSizes[baseStyles.body.fontSize].value,
                fontWeight: Number(baseStyles.body.fontWeight),
                lineHeight: Number(c2bLineHeights[baseStyles.body.lineHeight]),
            });
        });

        it('sets every type style in the configured font family', () => {
            const family = c2bTokens.fontFamily.inter.value.split(',')[0].trim();

            for (const [name, style] of Object.entries(tokens.typography)) {
                expect(style.fontFamily, name).toBe(family);
            }
        });
    });

    describe('prose tables', () => {
        it('list every colour', () => {
            expectRows(rowsFor('--rds--color-', brandColors));
        });

        it('list the fluid type scale from min to max', () => {
            for (const [name, token] of Object.entries(c2bFontSizes)) {
                const row = rowFor(`--rds--font-size-${name}`);

                expect(row, name).toContain(token.fluid.min);
                expect(row, name).toContain(token.value);
            }
        });

        it('list font weights and line heights', () => {
            expectRows([
                ...rowsFor('--rds--font-weight-', c2bTokens.fontWeight),
                ...rowsFor('--rds--line-height-', c2bLineHeights),
            ]);
        });

        it('list the spacing scale with its clamp() values', () => {
            expectRows(rowsFor('--rds--spacing-', c2bSpacing));
        });

        it('list layout widths and breakpoints', () => {
            expectRows([
                ...rowsFor('--rds--layout-', c2bTokens.layout),
                ...rowsFor('$rds-media-query-', c2bTokens.mediaQuery),
            ]);
        });

        it('list radii, shadows, and gradients', () => {
            expectRows([
                ...rowsFor('--rds--radius-', c2bTokens.radius),
                ...rowsFor('--rds--shadow-', c2bTokens.shadow),
                ...rowsFor('--rds--gradient-', c2bTokens.gradient),
            ]);
        });
    });
});
