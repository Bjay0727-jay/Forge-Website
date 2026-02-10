import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title?: string;
  description?: string;
}

export default function CTABanner({ title = 'Ready to Get Started?', description = 'Our security experts are ready to help you achieve compliance and build secure applications.' }: CTABannerProps) {
  return (
    <section className="py-16 px-8 bg-gradient-to-r from-teal-500 to-teal-400 text-center">
      <div className="max-w-[600px] mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-white/90 mb-8">{description}</p>
        <Button href="/contact" variant="white" size="lg" icon={<ArrowRight className="w-5 h-5" />}>Schedule a Consultation</Button>
      </div>
    </section>
  );
}
