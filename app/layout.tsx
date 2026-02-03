import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/organism/Navbar';
import Footer from '@/components/organism/Footer';

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NexaTech Solutions',
  description: 'Empowering Digital Solution',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} relative antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
