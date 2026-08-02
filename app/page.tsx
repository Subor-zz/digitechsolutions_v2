import type { Metadata } from "next";

import { RebrandPage } from "@/components/rebrand/RebrandPage";
import { homepageCopy } from "@/lib/rebrand/homepage-copy";

export const metadata: Metadata = {
  title: { absolute: homepageCopy.metadata.title },
  description: homepageCopy.metadata.description,
  alternates: { canonical: homepageCopy.metadata.canonical },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: homepageCopy.metadata.canonical,
    siteName: "Digitech Solutions",
    title: homepageCopy.metadata.title,
    description: homepageCopy.metadata.description,
  },
  twitter: {
    card: "summary_large_image",
    title: homepageCopy.metadata.title,
    description: homepageCopy.metadata.description,
  },
};

export default function HomePage() {
  return <RebrandPage />;
}
