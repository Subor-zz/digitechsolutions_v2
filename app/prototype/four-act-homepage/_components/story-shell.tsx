import Link from 'next/link';

import { homepageCopy } from '@/lib/rebrand/homepage-copy';

import styles from '../four-act-homepage.module.css';

export function PrototypeHeader() {
  const { navigation } = homepageCopy;

  return (
    <>
      <a className={styles.skipLink} href="#four-act-content">
        {navigation.skipLink}
      </a>
      <header className={styles.siteHeader}>
        <div className={styles.shell}>
          <div className={styles.headerInner}>
            <Link className={styles.brand} href="/" aria-label={navigation.brandLabel}>
              <span>{navigation.brandName}</span>
              <small>{navigation.brandDescriptor}</small>
            </Link>
            <nav aria-label={navigation.ariaLabel}>
              {navigation.links.map((link) => (
                <a className={styles.headerLink} href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
              <a className={styles.primaryButton} href={navigation.primaryCta.href}>
                {navigation.primaryCta.label}
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export function StoryProgress() {
  const { navigation } = homepageCopy;

  return (
    <nav className={styles.storyProgress} aria-label={navigation.progressAriaLabel}>
      <ol className={styles.shell}>
        {navigation.acts.map((act) => (
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
  const { footer } = homepageCopy;
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.siteFooter}>
      <div className={`${styles.shell} ${styles.footerInner}`}>
        <div>
          <strong>{footer.brandName}</strong>
          <p>{footer.descriptor}</p>
          <p>{footer.prototypeStatus}</p>
          <p>
            © {currentYear} {footer.rights}
          </p>
        </div>
        <nav aria-label="Footerlinks">
          {footer.links.map((link) => (
            <Link href={link.href} key={`${link.href}-${link.label}`}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
