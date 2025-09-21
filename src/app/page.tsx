import HeroSection from '@/components/HeroSection';
import CoreQAPromises from '@/components/CoreQAPromises';
import FeatureGrid from '@/components/FeatureGrid';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import TrustedBy from '@/components/TrustedBy';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CoreQAPromises />
      <HowItWorks />
      <FeatureGrid />
      <Testimonials />
      <TrustedBy />
      <FinalCTA />
    </main>
  );
}