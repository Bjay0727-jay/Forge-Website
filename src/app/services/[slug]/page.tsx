import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getServiceSlugs } from '@/lib/services';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import StatBlock from '@/components/ui/StatBlock';
import CTABanner from '@/components/sections/CTABanner';

interface PageProps { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};
  return { title: service.title, description: service.description };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <section className="bg-gradient-to-br from-navy-900 via-navy-700 to-navy-600 text-white pt-40 pb-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-[1280px] mx-auto relative z-10">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: service.title }]} dark />
          <span className={`inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4 ${service.badgeColor === 'red' ? 'bg-red-500 text-white' : service.badgeColor === 'blue' ? 'bg-blue-500 text-white' : 'bg-teal-500 text-white'}`}>{service.badge}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">{service.title}</h1>
          <p className="text-xl text-white/75 max-w-[720px] leading-relaxed">{service.description}</p>
          {service.rate && <div className="mt-6 text-2xl font-bold text-teal-400">{service.rate}</div>}
        </div>
      </section>
      {service.stats && service.stats.length > 0 && (
        <section className="py-12 px-8 bg-navy-800">
          <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {service.stats.map((stat) => (<StatBlock key={stat.label} value={stat.value} label={stat.label} />))}
          </div>
        </section>
      )}
      {service.features && service.features.length > 0 && (
        <section className="py-24 px-8 bg-white">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="text-3xl font-extrabold text-navy-700 tracking-tight mb-10">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.features.map((feature) => (
                <div key={feature.title} className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                  <h4 className="text-lg font-bold text-navy-700 mb-3">{feature.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-[800px] mx-auto">
          <div className="prose prose-lg max-w-none prose-headings:text-navy-700 prose-headings:font-bold prose-a:text-teal-500 prose-strong:text-navy-800" dangerouslySetInnerHTML={{ __html: service.content }} />
        </div>
      </section>
      <CTABanner title={service.ctaTitle} description={service.ctaDescription} />
    </>
  );
}
