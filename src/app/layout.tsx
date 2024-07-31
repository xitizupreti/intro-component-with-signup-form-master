import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const inter = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SignUp Form',
  description: 'Frontend Mentor',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
