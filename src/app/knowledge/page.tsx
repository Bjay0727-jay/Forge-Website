import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight, Calendar, Clock } from 'lucide-react';
import { getAllArticles } from '@/lib/content';

export const metadata: Metadata = { title: 'Knowledge Hub', description: 'White papers, guides, and expert insights on cybersecurity compliance.' };

export default async function KnowledgeHubPage() {
  const articles = await getAllArticles();
  return (
    <>
      <section className="bg-gradient-to-br from-navy-900 via-navy-700 to-navy-600 text-white pt-40 pb-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-[1280px] mx-auto relative z-10">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6">Knowledge Hub</h1>
          <p className="text-xl text-white/75 max-w-[720px] leading-relaxed">White papers, expert guides, and insights on cybersecurity compliance, federal security frameworks, and secure application development.</p>
        </div>
      </section>
      <section className="py-24 px-8 bg-white">
        <div className="max-w-[1280px] mx-auto">
          {articles.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-navy-700 mb-3">Coming Soon</h2>
              <p className="text-gray-500 max-w-md mx-auto">We&apos;re preparing expert content on cybersecurity compliance. Check back soon for white papers, guides, and industry insights.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link key={article.slug} href={`/knowledge/${article.slug}`} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 transition-all no-underline text-inherit block hover:border-teal-500 hover:shadow-lg hover:-translate-y-1 group">
                  <span className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-md bg-teal-500/15 text-teal-600 mb-4">{article.category}</span>
                  <h3 className="text-lg font-bold text-navy-700 mb-3 group-hover:text-teal-600 transition-colors">{article.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{article.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{article.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{article.readTime}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:text-teal-500 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
