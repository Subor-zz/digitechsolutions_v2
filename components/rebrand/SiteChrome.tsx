import { homepageCopy } from "@/lib/rebrand/homepage-copy";

import { BrandLockup } from "./BrandLockup";
import { MobileNav } from "./MobileNav";

type SiteHeaderProps = {
  primaryCtaHref?: string;
};

export function SiteHeader({ primaryCtaHref }: SiteHeaderProps) {
  const { brand, navigation } = homepageCopy;
  const resolvedPrimaryCtaHref = primaryCtaHref ?? navigation.primaryCta.href;

  return (
    <>
      <a className="skip-link" href="#hoofdinhoud">{navigation.skipLink}</a>
      <header className="site-header">
        <a className="site-header__brand" href={brand.homeHref}>
          <BrandLockup />
        </a>
        <nav className="desktop-nav" aria-label={navigation.ariaLabel}>
          {navigation.links.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </nav>
        <a className="button button--header" href={resolvedPrimaryCtaHref}>
          {navigation.primaryCta.label}
        </a>
        <MobileNav primaryCtaHref={resolvedPrimaryCtaHref} />
      </header>
    </>
  );
}

export function SiteFooter() {
  const { footer } = homepageCopy;

  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <BrandLockup />
        <p>{footer.descriptor}</p>
        <a className="text-link text-link--light" href={footer.backToTop.href}>
          {footer.backToTop.label} <span aria-hidden="true">↑</span>
        </a>
      </div>
      <div className="container site-footer__bottom">
        <nav aria-label="Voettekstnavigatie">
          {footer.links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <span>{footer.location}</span>
        <span>{footer.rights}</span>
      </div>
    </footer>
  );
}
