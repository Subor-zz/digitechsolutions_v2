import { homepageCopy } from "@/lib/rebrand/homepage-copy";

export function BrandLockup() {
  const { brand } = homepageCopy;

  return (
    <span className="brand-lockup" aria-label={brand.ariaLabel}>
      <svg className="brand-lockup__mark" viewBox="0 0 34 34" aria-hidden="true">
        <path d="M7 7h9.5C23.4 7 28 11 28 17s-4.6 10-11.5 10H7V7Z" />
        <path className="brand-lockup__flow" d="M2 17h11l3-4 4 8 3-4h9" />
      </svg>
      <span className="brand-lockup__text">
        <strong>{brand.firstLine}</strong>
        <span>{brand.secondLine}</span>
      </span>
    </span>
  );
}
