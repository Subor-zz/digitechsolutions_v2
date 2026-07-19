import { ChaosAct, ReflectionAct, ResultAct, WorkAct } from './_components/acts';
import { PrototypeFooter, PrototypeHeader, StoryProgress } from './_components/story-shell';
import styles from './four-act-homepage.module.css';

export default function FourActHomepagePrototype() {
  return (
    <div className={styles.prototype}>
      <PrototypeHeader />
      <StoryProgress />
      <main id="four-act-content" aria-label="Four-act homepageverhaal" tabIndex={-1}>
        <ChaosAct />
        <ReflectionAct />
        <WorkAct />
        <ResultAct />
      </main>
      <PrototypeFooter />
    </div>
  );
}
