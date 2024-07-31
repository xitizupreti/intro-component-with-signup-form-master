import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

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
      <Head>
        <link rel='icon' type='image/jpg' href='/favicon.jpg' />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
