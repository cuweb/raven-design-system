import { describe, expect, it } from 'vitest';
import entrySource from './index.ts?raw';

const componentImportPaths = [
    ...entrySource.matchAll(/from\s+['"](\.\/components\/[^'"]+)['"]/g),
].map(([, importPath]) => importPath);
const componentBarrelPaths = Object.keys(import.meta.glob('./components/*/index.{ts,tsx}'));

describe('root component exports', () => {
    it('uses published component barrel paths', () => {
        expect(componentImportPaths.length).toBeGreaterThan(0);

        for (const importPath of componentImportPaths) {
            const componentName = importPath.slice('./components/'.length);

            expect(
                componentName,
                `${importPath} must not include an internal file path`,
            ).not.toContain('/');
            expect(
                componentBarrelPaths.some((path) =>
                    path.startsWith(`./components/${componentName}/index.`),
                ),
                `${importPath} must resolve to a component barrel`,
            ).toBe(true);
        }
    });
});
