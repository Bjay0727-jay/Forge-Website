import Hero from '@/components/sections/Hero';
import ComplianceServices from '@/components/sections/ComplianceServices';
import ComplianceJourney from '@/components/sections/ComplianceJourney';
import FrameworkSelector from '@/components/sections/FrameworkSelector';
import ForgeComply360 from '@/components/sections/ForgeComply360';
import AppDevServices from '@/components/sections/AppDevServices';
import SecurityCallout from '@/components/sections/SecurityCallout';
import IndustriesGrid from '@/components/sections/IndustriesGrid';
import ConsultingPackages from '@/components/sections/ConsultingPackages';
import ResourceDownloads from '@/components/sections/ResourceDownloads';
import WhyForge from '@/components/sections/WhyForge';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ComplianceServices />
      <ComplianceJourney />
      <FrameworkSelector />
      <ForgeComply360 />
      <AppDevServices />
      <SecurityCallout />
      <IndustriesGrid />
      <ConsultingPackages />
      <ResourceDownloads />
      <WhyForge />
      <ContactSection />
    </>
  );
}
