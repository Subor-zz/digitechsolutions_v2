import type { Metadata } from 'next';

import { homepageCopy } from '@/lib/rebrand/homepage-copy';

export const metadata: Metadata = {
  title: {
    absolute: homepageCopy.metadata.title,
  },
  description: homepageCopy.metadata.description,
  openGraph: {
    title: homepageCopy.metadata.openGraphTitle,
    description: homepageCopy.metadata.openGraphDescription,
  },
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

export default function FourActPrototypeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
