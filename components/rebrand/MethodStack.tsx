import { homepageCopy } from "@/lib/rebrand/homepage-copy";

const { method } = homepageCopy;
const methodPhases = method.phases;

export function MethodStack() {
  return (
    <div className="method-stack">
      <div className="method-stack__intro">
        <h2 id="werkwijze-heading">{method.headline}</h2>
        <p>{method.intro}</p>
      </div>
      <ol className="method-phases">
        {methodPhases.map((phase) => (
          <li className="method-phase" key={phase.title}>
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
