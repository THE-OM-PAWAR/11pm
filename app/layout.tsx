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
  title: 'Yuvi Gym Mhow | Best Gym in Dr. Ambedkar Nagar',
  description: 'Yuvi Gym in Dr. Ambedkar Nagar, Mhow - Your premier fitness destination for bodybuilding, strength training, and complete body transformation. Expert trainers, personalized plans, and state-of-the-art equipment.',
  keywords: 'Gym near me, best gym in mhow, affordable in mhow, Yuvi Gym, Yuvi Gym Mhow, Best gym in Dr. Ambedkar Nagar, Gym in Mhow Madhya Pradesh, Bodybuilding and fitness center Mhow, Strength training gym Mhow, Personal training in Mhow, Weight loss gym Dr. Ambedkar Nagar, Certified gym trainer Mhow, Modern gym equipment Mhow, Muscle building program Mhow, Top fitness center near me, Affordable gym membership Mhow, Gyms in Dr. Ambedkar Nagar, Air-conditioned gym Mhow, Complete body transformation Mhow, Expert fitness trainers Mhow, Professional gym coaching Mhow, Fitness classes Mhow, Cardio training Mhow, CrossFit gym Mhow, 24/7 gym access Mhow, Group fitness sessions Mhow, Nutrition guidance Mhow, Sports training Mhow, Women\'s fitness center Mhow',
  authors: [{ name: 'Yuvi Gym' }],
  creator: 'Yuvi Gym',
  publisher: 'Yuvi Gym',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yuvigym.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Yuvi Gym Mhow | Best Gym in Dr. Ambedkar Nagar',
    description: 'Yuvi Gym in Dr. Ambedkar Nagar, Mhow - Your premier fitness destination for bodybuilding, strength training, and complete body transformation.',
    url: 'https://yuvigym.com',
    siteName: 'Yuvi Gym',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yuvi Gym - Best Gym in Dr. Ambedkar Nagar, Mhow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yuvi Gym Mhow | Best Gym in Dr. Ambedkar Nagar',
    description: 'Yuvi Gym in Dr. Ambedkar Nagar, Mhow - Your premier fitness destination for bodybuilding, strength training, and complete body transformation.',
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