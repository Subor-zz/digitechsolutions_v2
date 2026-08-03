import { homepageCopy } from "@/lib/rebrand/homepage-copy";

const { method } = homepageCopy;
const methodPhases = method.phases;

export function MethodStack() {
  return (
    <div className="method-stack">
      <div className="method-stack__intro" data-reveal="rise">
        <h2 id="werkwijze-heading">{method.headline}</h2>
        <p>{method.intro}</p>
      </div>
      <ol className="method-phases">
        {methodPhases.map((phase, index) => (
          <li className="method-phase" data-reveal="rise" data-reveal-delay={index + 1} key={phase.title}>
            <div>
              <h3>{phase.title}</h3>
              <p>{phase.description}</p>
              <p className="method-phase__artifact">{phase.artifact}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
