import { homepageCopy } from "@/lib/rebrand/homepage-copy";

const { systemVisual } = homepageCopy.hero;

export function HeroSystemMap() {
  return (
    <figure className="hero-map" aria-labelledby="hero-map-caption">
      <figcaption id="hero-map-caption">{systemVisual.caption}</figcaption>
      <svg
        className="hero-map__canvas"
        viewBox="0 0 640 620"
        role="img"
        aria-label={systemVisual.ariaLabel}
      >
        <path pathLength="1" className="hero-map__line hero-map__line--muted" d="M190 132H270V285H370" />
        <path pathLength="1" className="hero-map__line hero-map__line--friction" d="M210 308H302V285H370" />
        <path pathLength="1" className="hero-map__line hero-map__line--muted" d="M205 487H270V285H370" />
        <path pathLength="1" className="hero-map__line hero-map__line--flow" d="M370 285H458V476H492" />
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
