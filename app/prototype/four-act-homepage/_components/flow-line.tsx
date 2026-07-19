import styles from '../four-act-homepage.module.css';

export type FlowState = 'fragmented' | 'paused' | 'mapped' | 'organized' | 'verified';

type FlowLineProps = {
  state: FlowState;
  label: string;
  description: string;
};

function FlowGraphic({ state }: { state: FlowState }) {
  if (state === 'fragmented') {
    return (
      <>
        <path className={styles.flowMuted} d="M20 96 H125 L165 55 H238" />
        <path className={styles.flowSignal} d="M275 55 H348 L390 118 H470" />
        <path className={styles.flowMuted} d="M505 118 H620" />
        <path className={styles.flowRisk} d="M125 96 L92 132 H42" />
        <circle cx="125" cy="96" r="8" />
        <circle cx="390" cy="118" r="8" />
        <circle cx="505" cy="118" r="8" />
      </>
    );
  }

  if (state === 'paused') {
    return (
      <>
        <path className={styles.flowMuted} d="M20 80 H260" />
        <path className={styles.flowSignal} d="M380 80 H620" />
        <rect x="292" y="48" width="14" height="64" rx="3" />
        <rect x="326" y="48" width="14" height="64" rx="3" />
        <circle cx="180" cy="80" r="8" />
        <circle cx="460" cy="80" r="8" />
      </>
    );
  }

  if (state === 'mapped') {
    return (
      <>
        <path className={styles.flowSignal} d="M20 80 H620" />
        {[100, 210, 320, 430, 540].map((x, index) => (
          <g key={x}>
            <circle cx={x} cy="80" r="10" />
            <path className={styles.flowMuted} d={`M${x} 70 V${index % 2 === 0 ? 30 : 130}`} />
          </g>
        ))}
      </>
    );
  }

  if (state === 'organized') {
    return (
      <>
        <path className={styles.flowSignal} d="M20 80 H620" />
        {[110, 215, 320, 425, 530].map((x) => (
          <rect key={x} x={x - 7} y="55" width="14" height="50" rx="3" />
        ))}
        <path className={styles.flowMuted} d="M215 80 C255 80 270 28 320 28 C370 28 385 80 425 80" />
      </>
    );
  }

  return (
    <>
      <path className={styles.flowVerified} d="M20 80 H620" />
      {[120, 260, 400, 540].map((x) => (
        <g key={x}>
          <circle className={styles.verifiedNode} cx={x} cy="80" r="15" />
          <path className={styles.checkMark} d={`M${x - 7} 80 L${x - 2} 86 L${x + 8} 73`} />
        </g>
      ))}
    </>
  );
}

export function FlowLine({ state, label, description }: FlowLineProps) {
  return (
    <figure className={styles.flowFigure} data-flow-state={state}>
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
