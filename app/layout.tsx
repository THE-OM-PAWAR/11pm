import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { cn } from '@/lib/utils';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/animations/CustomCursor';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import InitialLoad from '@/components/animations/InitialLoad';
import AnimatedLayout from '@/components/animations/AnimatedLayout';
import { motion } from 'framer-motion';
import React from 'react';

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-grotesk',
  display: 'swap',
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const metadata: Metadata = {
  title: '11 PM Gaming Cafe | Premium Gaming Lounge & Esports Center',
  description: '11 PM Gaming Cafe - Your ultimate gaming destination featuring high-end gaming PCs, VR experiences, tournaments, and 24/7 gaming sessions. The best gaming cafe for esports enthusiasts.',
  keywords: 'Gaming cafe near me, best gaming lounge, 11 PM Gaming Cafe, gaming center, esports cafe, high-end gaming PCs, VR gaming experience, gaming tournaments, 24/7 gaming, competitive gaming, gaming community, PC gaming cafe, console gaming, gaming events, esports training, gaming equipment rental, gaming party venue, LAN gaming, multiplayer gaming, gaming cafe with food, premium gaming experience',
  authors: [{ name: '11 PM Gaming Cafe' }],
  creator: '11 PM Gaming Cafe',
  publisher: '11 PM Gaming Cafe',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://11pmgaming.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '11 PM Gaming Cafe | Premium Gaming Lounge & Esports Center',
    description: '11 PM Gaming Cafe - Your ultimate gaming destination featuring high-end gaming PCs, VR experiences, tournaments, and 24/7 gaming sessions.',
    url: 'https://11pmgaming.com',
    siteName: '11 PM Gaming Cafe',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '11 PM Gaming Cafe - Premium Gaming Lounge',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '11 PM Gaming Cafe | Premium Gaming Lounge & Esports Center',
    description: '11 PM Gaming Cafe - Your ultimate gaming destination featuring high-end gaming PCs, VR experiences, tournaments, and 24/7 gaming sessions.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'i8gBAwu70B5z-iPm1aV7UI32PmR-CcAoYjN1dfmWhTM',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        grotesk.variable,
        'font-grotesk bg-black text-white relative'
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <InitialLoad />
          <CustomCursor />
          <AnimatedLayout>
            {children}
          </AnimatedLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}