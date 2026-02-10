import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getArticleSlugs } from '@/lib/content';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import CTABanner from '@/components/sections/CTABanner';
import TableOfContents from '@/components/TableOfContents';
import { Calendar, Clock, User } from 'lucide-react';

interface PageProps { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};
  return { title: article.title, description: article.description };
}

// Function to add IDs to headings in HTML content
function addHeadingIds(html: string): string {
  return html.replace(/<h([23])>([^<]+)<\/h[23]>/g, (match, level, text) => {
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
    return `<h${level} id="${id}">${text}</h${level}>`;
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const contentWithIds = addHeadingIds(article.content);

  return (
    <>
      <section className="bg-gradient-to-br from-navy-900 via-navy-700 to-navy-600 text-white pt-40 pb-16 px-8 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-5xl mx-auto relative z-10">
          <Breadcrumbs items={[{ label: 'Knowledge Hub', href: '/knowledge' }, { label: article.title }]} dark />
          <span className="inline-block text-[11px] font-semibold px-3 py-1 rounded-md bg-teal-500/20 text-teal-400 mb-4">{article.category}</span>
          <h1 className="text-4xl font-extrabold tracking-tight mb-6 max-w-3xl">{article.title}</h1>
          <p className="text-lg text-white/80 max-w-2xl mb-6">{article.description}</p>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{article.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{article.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{article.readTime}</span>
          </div>
        </div>
      </section>
      <section className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main Content */}
            <div>
              <div
                className="prose prose-lg max-w-none prose-headings:text-navy-700 prose-headings:font-bold prose-a:text-teal-500 prose-strong:text-navy-800 prose-h2:scroll-mt-24 prose-h3:scroll-mt-24"
                dangerouslySetInnerHTML={{ __html: contentWithIds }}
              />
              {article.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-medium text-gray-500">Tags:</span>
                    {article.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-gray-100 text-gray-600">{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar with TOC */}
            <aside className="hidden lg:block">
              <TableOfContents content={article.rawContent || ''} />
            </aside>
          </div>
        </div>
      </section>
      <CTABanner title="Have Questions?" description="Our security experts are ready to help. Get in touch for a free consultation." />
    </>
  );
}
