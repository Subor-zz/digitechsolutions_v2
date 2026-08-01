"use client";

import { useEffect, useState } from "react";
import { homepageCopy } from "../../lib/rebrand/homepage-copy";

const { navigation } = homepageCopy;

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="mobile-nav">
      <button
        className="mobile-nav__toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        <span>{open ? navigation.mobileClose : navigation.mobileOpen}</span>
        <span className="mobile-nav__icon" aria-hidden="true">
          <i />
          <i />
        </span>
      </button>
      {open ? (
        <nav
          id="mobile-navigation"
          className="mobile-nav__panel"
          aria-label={navigation.mobileAriaLabel}
        >
          {navigation.links.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="button button--primary"
            href={navigation.primaryCta.href}
            onClick={() => setOpen(false)}
          >
            {navigation.primaryCta.label}
          </a>
        </nav>
      ) : null}
    </div>
  );
}
