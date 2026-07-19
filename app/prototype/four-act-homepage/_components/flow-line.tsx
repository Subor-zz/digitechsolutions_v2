'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../four-act-homepage.module.css';

export type FlowState = 'fragmented' | 'paused' | 'mapped' | 'organized' | 'verified';

type FlowLineProps = {
  state: FlowState;
  label: string;
  description: string;
};

/**
 * pathLength={100} normalises every solid spine path to a unit length of 100
 * so a single CSS rule (stroke-dasharray:100; stroke-dashoffset:100 -> 0) can
 * draw the line in regardless of its real geometry. It has no visual effect on
 * its own, so the static (no-JS / reduced-motion) graphic is byte-for-byte the
 * same contract the static prototype was reviewed against.
 */
const SPINE_PROPS = { pathLength: 100 } as const;

function FlowGraphic({ state }: { state: FlowState }) {
  if (state === 'fragmented') {
    return (
      <>
        <path className={styles.flowMuted} d="M20 96 H125 L165 55 H238" />
        <path className={styles.flowSignal} {...SPINE_PROPS} d="M275 55 H348 L390 118 H470" />
        <path className={styles.flowMuted} d="M505 118 H620" />
        <path className={styles.flowRisk} {...SPINE_PROPS} d="M125 96 L92 132 H42" />
        <circle cx="125" cy="96" r="8" style={{ transitionDelay: '360ms' }} />
        <circle cx="390" cy="118" r="8" style={{ transitionDelay: '520ms' }} />
        <circle cx="505" cy="118" r="8" style={{ transitionDelay: '680ms' }} />
      </>
    );
  }

  if (state === 'paused') {
    return (
      <>
        <path className={styles.flowMuted} d="M20 80 H260" />
        <path className={styles.flowSignal} {...SPINE_PROPS} d="M380 80 H620" />
        {/* The pause bars drop in like a held switch being pressed. */}
        <rect x="292" y="48" width="14" height="64" rx="3" style={{ transitionDelay: '320ms' }} />
        <rect x="326" y="48" width="14" height="64" rx="3" style={{ transitionDelay: '440ms' }} />
        <circle cx="180" cy="80" r="8" style={{ transitionDelay: '200ms' }} />
        <circle cx="460" cy="80" r="8" style={{ transitionDelay: '600ms' }} />
      </>
    );
  }

  if (state === 'mapped') {
    return (
      <>
        <path className={styles.flowSignal} {...SPINE_PROPS} d="M20 80 H620" />
        {[100, 210, 320, 430, 540].map((x, index) => (
          <g key={x} style={{ transitionDelay: `${260 + index * 110}ms` }}>
            <circle cx={x} cy="80" r="10" />
            <path className={styles.flowMuted} d={`M${x} 70 V${index % 2 === 0 ? 30 : 130}`} />
          </g>
        ))}
      </>
    );
  }

  if (state === 'organized') {
    // Six gate rectangles — count matches the six static delivery steps
    // (Scope, Map, Simplify, Build, Verify, Transfer). A light left-to-right
    // activation reads as controlled execution; no per-step scroll sync yet.
    return (
      <>
        <path className={styles.flowSignal} {...SPINE_PROPS} d="M20 80 H620" />
        {[80, 176, 272, 368, 464, 560].map((x, index) => (
          <rect
            key={x}
            x={x - 7}
            y="55"
            width="14"
            height="50"
            rx="3"
            style={{ transitionDelay: `${320 + index * 80}ms` }}
          />
        ))}
        <path className={styles.flowMuted} d="M176 80 C216 80 232 28 272 28 C328 28 344 80 368 80" style={{ transitionDelay: '880ms' }} />
      </>
    );
  }

  return (
    <>
      <path className={styles.flowVerified} {...SPINE_PROPS} d="M20 80 H620" />
      {[120, 260, 400, 540].map((x, index) => (
        <g key={x} style={{ transitionDelay: `${320 + index * 130}ms` }}>
          <circle className={styles.verifiedNode} cx={x} cy="80" r="15" />
          <path className={styles.checkMark} d={`M${x - 7} 80 L${x - 2} 86 L${x + 8} 73`} />
        </g>
      ))}
    </>
  );
}

/**
 * Narrative Flow Line.
 *
 * The five states (fragmented -> paused -> mapped -> organized -> verified) are
 * placed in the page in story order, one per act (Bezinning carries paused and
 * mapped). Each instance is an independent SVG, but they share one viewBox, one
 * horizontal spine at y=80 and one set of stroke tokens, so scrolling through
 * them reads as one line developing rather than five unrelated drawings.
 *
 * Motion model (progressive enhancement — the reviewed static contract is the
 * baseline and never depends on JS):
 *   - No JS / SSR first paint        -> every element visible (final state).
 *   - prefers-reduced-motion: reduce -> every element visible, no motion at all.
 *   - Otherwise: an IntersectionObserver reveals each figure once (spine draws
 *     in via stroke-dashoffset, nodes/gates fade in staggered). Only the
 *     `fragmented` figure keeps a slow, subtle ambient flicker on its broken
 *     segments, and only while on-screen, so Chaos reads as restless and every
 *     later act reads as progressively calmer.
 */
export function FlowLine({ state, label, description }: FlowLineProps) {
  const ref = useRef<HTMLElement>(null);
  const [motionOk, setMotionOk] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const mq =
      typeof window !== 'undefined' && typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-reduced-motion: reduce)')
        : null;

    // Reduced motion: render the reviewed static states, fully visible.
    if (mq && mq.matches) {
      setRevealed(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    setMotionOk(true);

    // Avoid a hide-flash for a figure that is already in the viewport on mount
    // (e.g. the Chaos `fragmented` line near the top): reveal it in the same
    // render tick that motion is enabled.
    const rect = el.getBoundingClientRect();
    const initiallyInView =
      rect.top < window.innerHeight * 0.92 && rect.bottom > window.innerHeight * 0.08;
    if (initiallyInView || typeof IntersectionObserver === 'undefined') {
      setRevealed(true);
      setActive(true);
    }
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setActive(entry.isIntersecting);
        if (entry.isIntersecting) setRevealed(true);
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(el);

    // Honour reduced-motion being turned on mid-session.
    const handleMotionChange = () => {
      if (mq && mq.matches) {
        setMotionOk(false);
        setRevealed(true);
        setActive(false);
        observer.disconnect();
      }
    };
    if (mq && typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', handleMotionChange);
    } else if (mq && typeof (mq as MediaQueryList).addListener === 'function') {
      // Safari < 14 fallback.
      (mq as MediaQueryList).addListener(handleMotionChange);
    }

    return () => {
      observer.disconnect();
      if (mq && typeof mq.removeEventListener === 'function') {
        mq.removeEventListener('change', handleMotionChange);
      } else if (mq && typeof (mq as MediaQueryList).removeListener === 'function') {
        (mq as MediaQueryList).removeListener(handleMotionChange);
      }
    };
  }, []);

  return (
    <figure
      ref={ref}
      className={styles.flowFigure}
      data-flow-state={state}
      data-motion={motionOk ? 'on' : 'off'}
      data-revealed={revealed ? 'true' : 'false'}
      data-active={active ? 'true' : 'false'}
    >
      <div className={styles.flowMeta}>
        <span>Flow state</span>
        <strong>{label}</strong>
      </div>
      <svg
        className={styles.flowSvg}
        viewBox="0 0 640 160"
        aria-hidden="true"
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
      >
        <FlowGraphic state={state} />
      </svg>
      <figcaption>{description}</figcaption>
    </figure>
  );
}
