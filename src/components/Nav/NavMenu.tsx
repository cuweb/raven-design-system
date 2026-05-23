import { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import { flushSync } from 'react-dom';
import { NavMenuItem } from './NavMenuItem';
import type { NavItem } from './Nav';

export interface NavMenuProps {
  menu: NavItem[];
}

// Matches the gap: 0.125rem between flex items in cu-nav__list
const ITEM_GAP_PX = 2;

export const NavMenu = ({ menu }: NavMenuProps) => {
  // null = measuring phase (all items in DOM); number = items to show in primary nav
  const [visibleCount, setVisibleCount] = useState<number | null>(null);
  const [browseOpen, setBrowseOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const browseButtonRef = useRef<HTMLButtonElement>(null);
  const itemWidthsRef = useRef<number[]>([]);
  const browseButtonWidthRef = useRef<number>(0);

  const recalculate = useCallback(() => {
    if (!containerRef.current) return;

    const available = containerRef.current.getBoundingClientRect().width;
    const widths = itemWidthsRef.current;
    const browseW = browseButtonWidthRef.current;

    let usedWidth = 0;
    let count = 0;

    for (let i = 0; i < widths.length; i++) {
      const withGap = widths[i] + (i > 0 ? ITEM_GAP_PX : 0);
      // On the last item: no Browse button needed if everything fits
      const isLast = i === widths.length - 1;
      const browseSpace = isLast ? 0 : browseW + ITEM_GAP_PX;

      if (usedWidth + withGap + browseSpace <= available) {
        usedWidth += withGap;
        count++;
      } else {
        break;
      }
    }

    setVisibleCount(count);
    if (count === menu.length) setBrowseOpen(false);
  }, [menu.length]);

  // Measure all items and the Browse button before the first paint.
  // visibleCount === null on first render guarantees all items are in the DOM.
  // NOTE: only fires when menu identity changes, not on resize — resize uses
  // the ResizeObserver below with cached widths.
  useLayoutEffect(() => {
    if (!listRef.current || !browseButtonRef.current) return;

    const items = Array.from(listRef.current.querySelectorAll<HTMLElement>(':scope > li'));
    // ceil() rounds subpixel widths up so the calculation never allows items that
    // would overflow by even a fraction of a pixel.
    itemWidthsRef.current = items.map((el) => Math.ceil(el.getBoundingClientRect().width));
    browseButtonWidthRef.current = Math.ceil(browseButtonRef.current.getBoundingClientRect().width);

    recalculate();
  }, [menu, recalculate]);

  // Recalculate on container resize using cached widths.
  // flushSync forces a synchronous React re-render inside the ResizeObserver
  // callback so the DOM is updated before the browser paints, preventing a
  // single-frame flash where items visually overflow into adjacent elements.
  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(() => flushSync(() => recalculate()));
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [recalculate]);

  // Close on outside click or Escape
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setBrowseOpen(false);
        setOpenDropdown(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setBrowseOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const handleToggle = (title: string) =>
    setOpenDropdown((prev) => (prev === title ? null : title));

  const primaryItems = visibleCount === null ? menu : menu.slice(0, visibleCount);
  const overflowItems = visibleCount !== null ? menu.slice(visibleCount) : [];
  const hasOverflow = overflowItems.length > 0;
  // Ghost = off-flow but still measurable (position:absolute + visibility:hidden)
  const isGhost = !hasOverflow;

  return (
    <div className="cu-nav__menu" ref={containerRef}>
      <ul className="cu-nav__list" ref={listRef}>
        {primaryItems.map((item) => (
          <NavMenuItem
            key={item.title}
            item={item}
            isOpen={openDropdown === item.title}
            onToggle={() => handleToggle(item.title)}
          />
        ))}
      </ul>

      {/* Always in DOM so its width is always measurable. Ghost when no overflow. */}
      <button
        ref={browseButtonRef}
        className={`cu-nav__browse${isGhost ? ' cu-nav__browse--ghost' : ''}`}
        onClick={() => !isGhost && setBrowseOpen((prev) => !prev)}
        aria-expanded={isGhost ? undefined : browseOpen}
        aria-haspopup={isGhost ? undefined : 'true'}
        aria-hidden={isGhost || undefined}
        tabIndex={isGhost ? -1 : undefined}
      >
        <span className="cu-nav__browse-label">Browse</span>
        <span
          className={`cu-nav__arrow${browseOpen && !isGhost ? ' cu-nav__arrow--open' : ''}`}
          aria-hidden="true"
        />
      </button>

      {browseOpen && hasOverflow && (
        <ul className="cu-nav__browse-dropdown">
          {overflowItems.map((item) => (
            <NavMenuItem
              key={item.title}
              item={item}
              isOpen={openDropdown === item.title}
              onToggle={() => handleToggle(item.title)}
              variant="mobile"
            />
          ))}
        </ul>
      )}
    </div>
  );
};

NavMenu.displayName = 'Nav.Menu';
