import { homepageCopy } from "@/lib/rebrand/homepage-copy";

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
  return (
    <figure className="flow-diagram" aria-labelledby="flow-caption">
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
