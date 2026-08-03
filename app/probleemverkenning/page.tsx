import type { Metadata } from "next";

import { ProblemExplorationForm } from "@/components/rebrand/ProblemExplorationForm";
import { SiteFooter, SiteHeader } from "@/components/rebrand/SiteChrome";
import { homepageCopy } from "@/lib/rebrand/homepage-copy";

const { problemExploration } = homepageCopy;

export const metadata: Metadata = {
  title: { absolute: problemExploration.metadata.title },
  description: problemExploration.metadata.description,
  alternates: { canonical: problemExploration.metadata.canonical },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: problemExploration.metadata.canonical,
    siteName: "Digitech Solutions",
    title: problemExploration.metadata.title,
    description: problemExploration.metadata.description,
  },
};

export default function ProblemExplorationPage() {
  return (
    <div className="site-shell">
      <SiteHeader primaryCtaHref="#probleemverkenning" />
      <main id="hoofdinhoud" className="problem-exploration-page">
        <header className="problem-exploration-hero">
          <div className="container">
            <p className="section-kicker section-kicker--light">Probleemverkenning</p>
            <h1>{problemExploration.title}</h1>
            <p>{problemExploration.lead}</p>
          </div>
        </header>
        <ProblemExplorationForm />
      </main>
      <SiteFooter />
    </div>
  );
}
