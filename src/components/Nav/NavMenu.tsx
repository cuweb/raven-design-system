import { useState, useEffect, useLayoutEffect, useMemo, useRef, useCallback } from 'react';
import { flushSync } from 'react-dom';
import { NavMenuItem } from './NavMenuItem';
import { useIsMobile } from './useIsMobile';
import type { NavItem } from './Nav';

export interface NavMenuProps {
  menu: NavItem[];
}

const noop = () => {};

export const NavMenu = ({ menu }: NavMenuProps) => {
  // null = not yet measured (show all); number = items to show in the primary nav
  const [visibleCount, setVisibleCount] = useState<number | null>(null);
  const [browseOpen, setBrowseOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // Below the sm breakpoint the menu is a single Browse trigger — no inline items.
  const isMobile = useIsMobile();

  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLUListElement>(null);
  const browseButtonRef = useRef<HTMLButtonElement>(null);

  // Stable signature so the measuring effect only re-runs when items change,
  // not when a caller passes a fresh array identity on every render.
  const menuKey = useMemo(() => menu.map((i) => i.title).join(''), [menu]);

  // Measure against a hidden clone that always holds every item, then commit
  // how many fit. Reading each item's real laid-out edge lets the browser's
  // layout engine do the measuring — no width sums, no gap constant, no
  // subpixel drift, no stale cached widths. Edges are taken relative to the
  // clone's own left, so the clone's absolute position is irrelevant.
  const recalculate = useCallback(() => {
    if (isMobile) return; // mobile shows a single Browse trigger; no measuring needed
    const container = containerRef.current;
    const clone = measureRef.current;
    const browse = browseButtonRef.current;
    if (!container || !clone || !browse) return;

    const items = Array.from(clone.children) as HTMLElement[];
    if (items.length !== menu.length) return;

    const available = container.getBoundingClientRect().width;
    const cloneLeft = clone.getBoundingClientRect().left;
    const cumulativeRight = (el: HTMLElement) => el.getBoundingClientRect().right - cloneLeft;

    // Everything fits — no Browse button required.
    const last = items[items.length - 1];
    if (last && cumulativeRight(last) <= available) {
      setVisibleCount(menu.length);
      setBrowseOpen(false);
      return;
    }

    // Reserve room for the Browse button: its live width plus the menu's gap.
    const browseWidth = browse.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(container).columnGap) || 0;
    const limit = available - browseWidth - gap;

    let count = 0;
    for (const item of items) {
      if (cumulativeRight(item) <= limit) count++;
      else break;
    }
    setVisibleCount(count);
  }, [menu.length, isMobile]);

  // Measure before paint on mount and whenever the items change.
  useLayoutEffect(() => {
    recalculate();
  }, [menuKey, recalculate]);

  // Recalculate on container resize. flushSync forces the re-render to commit
  // inside the ResizeObserver callback, before the browser paints, so items
  // never visibly overflow into adjacent elements for a frame.
  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(() => flushSync(() => recalculate()));
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [recalculate]);

  // Lock body scroll on mobile when browse menu is open
  useEffect(() => {
    if (!isMobile || !browseOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobile, browseOpen]);

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

  // Primary nav items: close the browse dropdown when opening a sibling.
  const handlePrimaryToggle = (title: string) => {
    setBrowseOpen(false);
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  // Browse dropdown items: toggle the submenu without closing the browse panel.
  const handleBrowseToggle = (title: string) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  const count = isMobile ? 0 : (visibleCount ?? menu.length);
  const primaryItems = menu.slice(0, count);
  const overflowItems = menu.slice(count);
  const hasOverflow = overflowItems.length > 0;
  // Ghost = off-flow but still measurable (position:absolute + visibility:hidden)
  const isGhost = !hasOverflow;

  return (
    <div className="cu-nav__menu" ref={containerRef}>
      {/* Hidden clone of the full menu, always in the DOM, used only for
          measuring. position:absolute keeps it out of flow; overflow:hidden
          stops a wide clone from extending the page's scroll area. */}
      <ul className="cu-nav__list cu-nav__list--measure" ref={measureRef} aria-hidden="true">
        {menu.map((item) => (
          <NavMenuItem key={item.title} item={item} isOpen={false} onToggle={noop} />
        ))}
      </ul>

      <ul className="cu-nav__list">
        {primaryItems.map((item) => (
          <NavMenuItem
            key={item.title}
            item={item}
            isOpen={openDropdown === item.title}
            onToggle={() => handlePrimaryToggle(item.title)}
          />
        ))}
      </ul>

      {/* Always in DOM so its width is always measurable. Ghost when no overflow. */}
      <button
        ref={browseButtonRef}
        className={`cu-nav__browse${isGhost ? ' cu-nav__browse--ghost' : ''}`}
        onClick={() => { if (!isGhost) { setOpenDropdown(null); setBrowseOpen((prev) => !prev); } }}
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
              onToggle={() => handleBrowseToggle(item.title)}
              variant="mobile"
            />
          ))}
        </ul>
      )}
    </div>
  );
};

NavMenu.displayName = 'Nav.Menu';
