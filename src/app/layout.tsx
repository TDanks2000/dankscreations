import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'the-new-css-reset/css/reset.css';
import { Navbar } from '../components';

import './styles.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Danks Creations',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
