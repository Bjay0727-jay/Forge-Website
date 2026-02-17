import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import TwoPillars from '@/components/sections/TwoPillars';
import ForgeComplyTeaser from '@/components/sections/ForgeComplyTeaser';
import SocialProof from '@/components/sections/SocialProof';
import IndustriesGrid from '@/components/sections/IndustriesGrid';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <TwoPillars />
      <ForgeComplyTeaser />
      <SocialProof />
      <IndustriesGrid />
      <ContactSection />
    </>
  );
}
