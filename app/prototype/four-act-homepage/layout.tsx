import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Four-act homepage prototype | Digitech Solutions',
  },
  description: 'Statisch, niet-geïndexeerd prototype voor de four-act homepagearchitectuur.',
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
