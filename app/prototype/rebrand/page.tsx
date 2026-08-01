import type { Metadata } from "next";

import { RebrandPage } from "@/components/rebrand/RebrandPage";
import { homepageCopy } from "@/lib/rebrand/homepage-copy";

export const metadata: Metadata = {
  title: homepageCopy.metadata.title,
  description: homepageCopy.metadata.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RebrandPrototypeRoute() {
  return <RebrandPage />;
}
