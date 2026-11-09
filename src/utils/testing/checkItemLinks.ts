import { expect, userEvent, within } from 'storybook/test';

export const checkItemLinks = async (canvasElement: HTMLElement, itemSelector: string) => {
    const canvas = within(canvasElement);
    const primary = canvas.getByRole('link', { name: 'Profile details' });
    const item = primary.closest(itemSelector);

    if (!item) {
        throw new Error('The primary link must belong to its item.');
    }

    const clicks: string[] = [];
    let buttonClicks = 0;
    const recordClick = (event: MouseEvent) => {
        const target = event.target;
        if (!(target instanceof Element)) return;
        if (target.closest('button')) buttonClicks += 1;
        const link = target.closest('a');
        if (link) {
            event.preventDefault();
            clicks.push(link.getAttribute('href') ?? '');
        }
    };

    canvasElement.addEventListener('click', recordClick);
    try {
        item.scrollIntoView({ block: 'center' });
        const bounds = item.getBoundingClientRect();
        const paddingHit = document.elementFromPoint(bounds.right - 4, bounds.bottom - 4);
        expect(paddingHit).toBe(primary);
        if (!paddingHit) throw new Error('The padding must have a click target.');
        await userEvent.click(paddingHit);
        expect(clicks.pop()).toBe('#profile');

        for (const selector of ['img', '[data-item-excerpt]', '[data-item-metadata]']) {
            const element = item.querySelector(selector);
            if (!element) throw new Error(`Missing hit-test surface: ${selector}`);
            element.scrollIntoView({ block: 'center' });
            const rect = element.getBoundingClientRect();
            const target = document.elementFromPoint(
                rect.left + rect.width / 2,
                rect.top + rect.height / 2,
            );
            expect(target).toBe(primary);
            if (!target) throw new Error(`No click target for ${selector}`);
            await userEvent.click(target);
            expect(clicks.pop()).toBe('#profile');
        }

        for (const [name, href] of [
            ['Email person', 'mailto:person@example.test'],
            ['Call person', 'tel:+16135550123'],
            ['Related resource', '#resource'],
        ]) {
            const link = canvas.getByRole('link', { name });
            link.scrollIntoView({ block: 'center' });
            const rect = link.getBoundingClientRect();
            const target = document.elementFromPoint(
                rect.left + rect.width / 2,
                rect.top + rect.height / 2,
            );
            expect(target?.closest('a')).toBe(link);
            await userEvent.click(link);
            expect(clicks.pop()).toBe(href);
            link.focus();
            expect(link).toHaveFocus();
        }

        primary.focus();
        expect(primary).toHaveFocus();
        expect(getComputedStyle(primary, '::after').outlineStyle).toBe('solid');
        expect(getComputedStyle(primary, '::after').outlineOffset).toBe('-2px');
        expect(item).not.toHaveAttribute('tabindex');

        const button = canvas.getByRole('button', { name: 'Save item' });
        button.scrollIntoView({ block: 'center' });
        const buttonRect = button.getBoundingClientRect();
        expect(
            document.elementFromPoint(
                buttonRect.left + buttonRect.width / 2,
                buttonRect.top + buttonRect.height / 2,
            ),
        ).toBe(button);
        await userEvent.click(button);
        expect(buttonClicks).toBe(1);
        expect(clicks).toHaveLength(0);

        for (const name of ['First independent title', 'Second independent title']) {
            const link = canvas.getByRole('link', { name });
            expect(getComputedStyle(link, '::after').content).toBe('none');
        }

        const unlinked = canvas.getByText('Unlinked information').closest(itemSelector);
        if (!unlinked) throw new Error('The unlinked item must be present.');
        expect(unlinked.querySelector('a')).toBeNull();
        unlinked.scrollIntoView({ block: 'center' });
        const unlinkedRect = unlinked.getBoundingClientRect();
        expect(
            document
                .elementFromPoint(unlinkedRect.right - 4, unlinkedRect.bottom - 4)
                ?.closest('a'),
        ).toBeNull();
    } finally {
        canvasElement.removeEventListener('click', recordClick);
    }
};
