"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { homepageCopy } from "@/lib/rebrand/homepage-copy";

gsap.registerPlugin(useGSAP);

const MOTION_TIME_SCALE = 2 / 3;
const { systemVisual } = homepageCopy.hero;

export function HeroSystemMap() {
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
          if (!context.conditions?.motionAllowed) return;

          const fragments = gsap.utils.toArray<HTMLElement>(
            ".hero-map__canvas .hero-map__fragment",
          );
          const decision = scope.current?.querySelector<HTMLElement>(
            ".hero-map__canvas .hero-map__decision",
          );
          const outcome = scope.current?.querySelector<HTMLElement>(
            ".hero-map__canvas .hero-map__outcome",
          );
          const paths = gsap.utils.toArray<SVGPathElement>(
            ".hero-map__canvas .hero-map__line",
          );
          const junction = scope.current?.querySelector<SVGCircleElement>(
            ".hero-map__canvas .hero-map__junction",
          );
          const desktop = Boolean(context.conditions?.desktop);

          if (!decision || !outcome || !junction || paths.length < 4) return;

          paths.forEach((path) => {
            const length = path.getTotalLength();
            gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
          });

          gsap.set(fragments, {
            autoAlpha: 0,
            x: desktop ? (index: number) => [-24, -36, -18][index] : 0,
            y: desktop ? 0 : 14,
          });
          gsap.set([decision, outcome], { autoAlpha: 0, y: 14 });
          gsap.set(junction, { autoAlpha: 0, scale: 0, transformOrigin: "center" });

          const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

          timeline
            .to(fragments, { autoAlpha: 1, x: 0, y: 0, duration: 0.42, stagger: 0.07 })
            .to(paths.slice(0, 3), { strokeDashoffset: 0, duration: 0.38, stagger: 0.04 }, 0.18)
            .to(junction, { autoAlpha: 1, scale: 1, duration: 0.2 }, 0.46)
            .to(decision, { autoAlpha: 1, y: 0, duration: 0.32 }, 0.48)
            .to(paths[3], { strokeDashoffset: 0, duration: 0.38, ease: "power2.out" }, 0.66)
            .to(outcome, { autoAlpha: 1, y: 0, duration: 0.32 }, 0.82);

          timeline.timeScale(MOTION_TIME_SCALE);

          return () => timeline.kill();
        },
      );

      return () => media.revert();
    },
    { scope },
  );

  return (
    <figure ref={scope} className="hero-map" aria-labelledby="hero-map-caption">
      <figcaption id="hero-map-caption">{systemVisual.caption}</figcaption>
      <svg
        className="hero-map__canvas"
        viewBox="0 0 640 620"
        role="img"
        aria-label={systemVisual.ariaLabel}
      >
        <path className="hero-map__line hero-map__line--muted" d="M190 132H270V285H370" />
        <path className="hero-map__line hero-map__line--friction" d="M210 308H302V285H370" />
        <path className="hero-map__line hero-map__line--muted" d="M205 487H270V285H370" />
        <path className="hero-map__line hero-map__line--flow" d="M370 285H458V476H492" />
        <circle className="hero-map__junction" cx="370" cy="285" r="7" />

        <foreignObject x="26" y="88" width="164" height="88">
          <div className="hero-map__fragment">
            <span>{systemVisual.fragments[0].label}</span>
            {systemVisual.fragments[0].text}
          </div>
        </foreignObject>
        <foreignObject x="46" y="264" width="164" height="88">
          <div className="hero-map__fragment">
            <span>{systemVisual.fragments[1].label}</span>
            {systemVisual.fragments[1].text}
          </div>
        </foreignObject>
        <foreignObject x="40" y="443" width="165" height="88">
          <div className="hero-map__fragment">
            <span>{systemVisual.fragments[2].label}</span>
            {systemVisual.fragments[2].text}
          </div>
        </foreignObject>
        <foreignObject x="370" y="235" width="188" height="100">
          <div className="hero-map__decision">
            <span>{systemVisual.decision.label}</span>
            {systemVisual.decision.text}
          </div>
        </foreignObject>
        <foreignObject x="492" y="432" width="126" height="88">
          <div className="hero-map__outcome">
            <span>{systemVisual.outcome.label}</span>
            {systemVisual.outcome.text}
          </div>
        </foreignObject>
      </svg>

      <div className="hero-map__mobile-list" aria-hidden="true">
        {systemVisual.mobileSteps.map((step, index) => (
          <div
            className={index === 1 ? "hero-map__decision" : index === 2 ? "hero-map__outcome" : "hero-map__fragment"}
            key={step.label}
          >
            <span>{step.label}</span>
            {step.text}
          </div>
        ))}
      </div>
    </figure>
  );
}
