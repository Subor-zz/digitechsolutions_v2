"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homepageCopy } from "@/lib/rebrand/homepage-copy";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PROCESS_PLAYBACK_RATE = 0.72;

const { hiddenDrag } = homepageCopy;
const fragmentedFlow = hiddenDrag.visibleCurrentFlow;
const controlledFlow = hiddenDrag.targetFlow;

type ProcessLineProps = {
  items: readonly string[];
  variant: "fragmented" | "controlled";
};

function ProcessLine({ items, variant }: ProcessLineProps) {
  return (
    <ol className={`process-line process-line--${variant}`}>
      {items.map((item, index) => (
        <li key={item}>
          <span className="process-line__node" aria-hidden="true" />
          <span>{item}</span>
          {index < items.length - 1 ? <i aria-hidden="true" /> : null}
        </li>
      ))}
    </ol>
  );
}

export function FlowDiagram() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(
        {
          motionAllowed: "(prefers-reduced-motion: no-preference)",
          desktop: "(min-width: 768px)",
        },
        (context) => {
          if (!context.conditions?.motionAllowed || !scope.current) return;

          const beforeHeader = scope.current.querySelector<HTMLElement>(
            ".flow-diagram__state--before .flow-diagram__state-header",
          );
          const beforeNodes = Array.from(
            scope.current.querySelectorAll<HTMLElement>(".process-line--fragmented li"),
          );
          const beforeLinks = Array.from(
            scope.current.querySelectorAll<HTMLElement>(".process-line--fragmented li i"),
          );
          const frictionSignals = Array.from(
            scope.current.querySelectorAll<HTMLElement>(".friction-signals li"),
          );
          const transitionLines = Array.from(
            scope.current.querySelectorAll<HTMLElement>(".flow-diagram__transition span"),
          );
          const afterHeader = scope.current.querySelector<HTMLElement>(
            ".flow-diagram__state--after .flow-diagram__state-header",
          );
          const afterNodes = Array.from(
            scope.current.querySelectorAll<HTMLElement>(".process-line--controlled li"),
          );
          const afterLinks = Array.from(
            scope.current.querySelectorAll<HTMLElement>(".process-line--controlled li i"),
          );

          if (!beforeHeader || !afterHeader) return;

          const desktop = Boolean(context.conditions?.desktop);

          const timeline = gsap.timeline({
            defaults: { ease: "power2.out" },
            scrollTrigger: {
              trigger: scope.current,
              start: desktop ? "top 72%" : "top 84%",
              once: true,
            },
          });

          timeline
            .from(beforeHeader, {
              autoAlpha: 0,
              y: 10,
              duration: 0.48,
              clearProps: "transform,opacity,visibility",
            })
            .from(beforeNodes, {
              autoAlpha: 0,
              y: 10,
              duration: 0.52,
              stagger: 0.16,
              clearProps: "transform,opacity,visibility",
            }, "-=0.08")
            .from(
              beforeLinks,
              {
                scaleX: 0,
                transformOrigin: "left",
                duration: 0.68,
                stagger: 0.12,
                clearProps: "transform",
              },
              "<",
            )
            .from(frictionSignals, {
              autoAlpha: 0,
              x: -8,
              duration: 0.42,
              stagger: 0.14,
              clearProps: "transform,opacity,visibility",
            }, "-=0.12")
            .from(
              transitionLines,
              {
                scaleX: 0,
                transformOrigin: (index: number) => (index === 0 ? "right" : "left"),
                duration: 0.62,
                stagger: 0.12,
                clearProps: "transform",
              },
              "-=0.04",
            )
            .from(
              afterHeader,
              {
                autoAlpha: 0,
                y: 12,
                duration: 0.52,
                clearProps: "transform,opacity,visibility",
              },
              "-=0.18",
            )
            .from(
              afterNodes,
              {
                autoAlpha: 0,
                x: -10,
                duration: 0.5,
                stagger: 0.18,
                clearProps: "transform,opacity,visibility",
              },
              "-=0.16",
            )
            .from(
              afterLinks,
              {
                scaleX: 0,
                transformOrigin: "left",
                duration: 0.7,
                stagger: 0.14,
                clearProps: "transform",
              },
              "<",
            );

          timeline.timeScale(desktop ? PROCESS_PLAYBACK_RATE : 0.84);

          return () => {
            timeline.scrollTrigger?.kill();
            timeline.kill();
          };
        },
      );

      return () => media.revert();
    },
    { scope },
  );

  return (
    <figure ref={scope} className="flow-diagram" aria-labelledby="flow-caption">
      <figcaption id="flow-caption">{hiddenDrag.caption}</figcaption>
      <div className="flow-diagram__state flow-diagram__state--before">
        <div className="flow-diagram__state-header">
          <span>{hiddenDrag.currentLabel}</span>
          <strong>{hiddenDrag.currentSummary}</strong>
        </div>
        <ProcessLine items={fragmentedFlow} variant="fragmented" />
        <ul className="friction-signals" aria-label={hiddenDrag.signalsAriaLabel}>
          {hiddenDrag.visibleSignals.map((signal) => (
            <li key={signal}>{signal}</li>
          ))}
        </ul>
      </div>
      <div className="flow-diagram__transition" aria-hidden="true">
        <span />
        <b>{hiddenDrag.transition}</b>
        <span />
      </div>
      <div className="flow-diagram__state flow-diagram__state--after">
        <div className="flow-diagram__state-header">
          <span>{hiddenDrag.targetLabel}</span>
          <strong>{hiddenDrag.targetSummary}</strong>
        </div>
        <ProcessLine items={controlledFlow} variant="controlled" />
      </div>
    </figure>
  );
}
