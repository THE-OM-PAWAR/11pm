import Link from 'next/link';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import GallerySection from '@/components/sections/GallerySection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ClassesSection from '@/components/sections/ClassesSection';
import TrainersPreview from '@/components/sections/TrainersPreview';
import PricingPreview from '@/components/sections/PricingPreview';
import CtaSection from '@/components/sections/CtaSection';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <GallerySection />
      <TestimonialsSection />
      <PricingPreview />
      <CtaSection />
    </div>
  );
}