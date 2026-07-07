import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = { title: 'Midtown Dental Care Associates', description: 'dentist • manhattan • 4.9 rating • 574 Google reviews • 12 E 41st St Ste 1100, New York, NY 10017, USA' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
