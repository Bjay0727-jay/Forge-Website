import { CheckCircle2, Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const results = [
  { metric: 'FedRAMP Moderate', detail: 'Authorization achieved for mid-size cloud service provider in under 10 months' },
  { metric: 'CMMC Level 2', detail: 'Readiness assessments delivered for defense contractors across the DIB' },
  { metric: 'HIPAA Compliance', detail: 'Security programs established for healthcare technology organizations' },
  { metric: 'Secure Applications', detail: 'Government portals and enterprise platforms built with compliance-ready architecture' },
];

// Replace these with real testimonials when available
const testimonials = [
  {
    quote: "Forge Cyber Defense brought the structure and federal experience we needed to get through FedRAMP authorization. Their team integrated seamlessly with ours.",
    attribution: "— Cloud Service Provider, Federal Sector",
  },
  {
    quote: "Having one team handle both our compliance posture and application development meant nothing fell through the cracks. That's rare in this industry.",
    attribution: "— Defense Industrial Base Contractor",
  },
];

export default function SocialProof() {
  return (
    <section className="py-28 px-8 bg-gray-50">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeading
          label="Proven Results"
          title="Trusted by Federal Agencies and Defense Contractors"
          subtitle="We deliver measurable outcomes for organizations navigating complex compliance requirements."
          align="center"
        />

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {results.map((result) => (
            <div key={result.metric} className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                <span className="text-sm font-bold text-navy-700">{result.metric}</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{result.detail}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[960px] mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-8 relative">
              <Quote className="w-8 h-8 text-teal-500/20 absolute top-6 right-6" />
              <p className="text-[15px] text-gray-600 leading-relaxed mb-4 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-sm font-semibold text-navy-700">{t.attribution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
