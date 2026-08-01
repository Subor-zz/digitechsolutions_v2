import { homepageCopy } from "@/lib/rebrand/homepage-copy";

const { method } = homepageCopy;
const methodSteps = method.steps;
const methodPhases = method.phases.map((phase) => ({
  ...phase,
  steps: phase.stepIds.map((stepId) => {
    const step = methodSteps.find((item) => item.id === stepId);

    if (!step) {
      throw new Error(`Onbekende methodestap: ${stepId}`);
    }

    return step;
  }),
}));

export function MethodStack() {
  return (
    <div className="method-stack">
      <div className="method-stack__intro">
        <h2 id="werkwijze-heading">{method.headline}</h2>
        <p>{method.intro}</p>
      </div>
      <div className="method-route" aria-hidden="true">
        <span className="method-route__line" />
        {methodSteps.map((step) => (
          <i key={step.id} />
        ))}
      </div>
      <ol className="method-phases">
        {methodPhases.map((phase) => (
          <li className="method-phase" key={phase.title}>
            <ol className="method-phase__steps" aria-label={`Stappen binnen ${phase.title}`}>
              {phase.steps.map((step) => {
                return (
                  <li key={step.id}>
                    <span className="method-phase__step-index" aria-hidden="true">
                      {step.number}
                    </span>
                    <span className="method-phase__step-name">{step.title}</span>
                  </li>
                );
              })}
            </ol>
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
