import Link from 'next/link';
import styles from '../four-act-homepage.module.css';

const acts = [
  { href: '#act-chaos', number: '01', label: 'Chaos' },
  { href: '#act-reflection', number: '02', label: 'Bezinning' },
  { href: '#act-work', number: '03', label: 'Arbeid' },
  { href: '#act-result', number: '04', label: 'Resultaat' },
] as const;

export function PrototypeHeader() {
  return (
    <>
      <a className={styles.skipLink} href="#four-act-content">
        Ga naar het verhaal
      </a>
      <header className={styles.siteHeader}>
        <div className={styles.shell}>
          <div className={styles.headerInner}>
            <Link className={styles.brand} href="/" aria-label="Digitech Solutions — terug naar huidige homepage">
              <span>Digitech Solutions</span>
              <small>Workflow- en applicatiemodernisering</small>
            </Link>
            <nav aria-label="Prototypehoofdnavigatie">
              <a className={styles.headerLink} href="#act-work">Werkwijze</a>
              <a className={styles.primaryButton} href="#scan-entry">Start met een Modernization Scan</a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export function StoryProgress() {
  return (
    <nav className={styles.storyProgress} aria-label="Vier aktes">
      <ol className={styles.shell}>
        {acts.map((act) => (
          <li key={act.href}>
            <a href={act.href}>
              <span>{act.number}</span>
              {act.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PrototypeFooter() {
  return (
    <footer className={styles.siteFooter}>
      <div className={`${styles.shell} ${styles.footerInner}`}>
        <div>
          <strong>Digitech Solutions</strong>
          <p>Statisch four-act homepageprototype — geen productiepagina.</p>
        </div>
        <nav aria-label="Juridische links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/voorwaarden">Voorwaarden</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
