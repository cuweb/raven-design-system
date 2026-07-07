import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

export interface ScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
    disabled?: boolean;
}

const STAGGER_STEP_MS = 120;
const STAGGER_CAP_MS = 600;
const STAGGER_VAR = '--cu-card-stagger';

interface TargetData {
    onVisible: () => void;
    onHidden: () => void;
    once: boolean;
}

// Shared observers — one per unique (threshold, rootMargin) tuple — so that
// cards entering the trigger zone in the same observation cycle land in a
// single callback. That callback is the "batch" we stagger within.
const targets = new WeakMap<Element, TargetData>();
const observers = new Map<string, IntersectionObserver>();

const getObserver = (threshold: number, rootMargin: string): IntersectionObserver => {
    const key = `${threshold}|${rootMargin}`;
    const existing = observers.get(key);
    if (existing) return existing;

    const observer = new IntersectionObserver(
        (entries) => {
            let batchIndex = 0;
            entries.forEach((entry) => {
                const data = targets.get(entry.target);
                if (!data) return;
                if (entry.isIntersecting) {
                    const stagger = Math.min(batchIndex * STAGGER_STEP_MS, STAGGER_CAP_MS);
                    (entry.target as HTMLElement).style.setProperty(STAGGER_VAR, `${stagger}ms`);
                    data.onVisible();
                    if (data.once) observer.unobserve(entry.target);
                    batchIndex++;
                } else if (!data.once) {
                    data.onHidden();
                }
            });
        },
        { threshold, rootMargin },
    );
    observers.set(key, observer);
    return observer;
};

export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(
    options: ScrollRevealOptions = {},
) => {
    // rootMargin extends the trigger zone 200px BELOW the viewport so cards
    // start animating while still under the fold — fast scrolls don't outrun
    // the motion. Cards revealed in the same observer callback (typically a
    // row scrolling in together) stagger by 120ms increments, capped at
    // 600ms. New batches start fresh at 0ms.
    const {
        threshold = 0,
        rootMargin = '0px 0px 200px 0px',
        once = true,
        disabled = false,
    } = options;
    const reducedMotion = useReducedMotion();
    const ref = useRef<T>(null);
    const [hasIntersected, setHasIntersected] = useState(false);
    // Derived rather than mirrored into state via an effect — avoids
    // react-hooks/set-state-in-effect and the extra render. Animation-bypass
    // modes render visible from first paint; otherwise we wait for the
    // observer to flip hasIntersected.
    const isVisible = reducedMotion || disabled || hasIntersected;

    useEffect(() => {
        if (reducedMotion || disabled) return;

        const node = ref.current;
        if (!node || typeof IntersectionObserver === 'undefined') return;

        const observer = getObserver(threshold, rootMargin);
        targets.set(node, {
            onVisible: () => setHasIntersected(true),
            onHidden: () => setHasIntersected(false),
            once,
        });
        observer.observe(node);

        return () => {
            observer.unobserve(node);
            targets.delete(node);
        };
    }, [threshold, rootMargin, once, disabled, reducedMotion]);

    return { ref, isVisible };
};
