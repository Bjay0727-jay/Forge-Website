import { MetadataRoute } from 'next';
import { getServiceSlugs } from '@/lib/services';
import { getArticleSlugs } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://forgecyberdefense.com';

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/knowledge`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
  ];

  const serviceSlugs = getServiceSlugs();
  const servicePages = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const articleSlugs = getArticleSlugs();
  const articlePages = articleSlugs.map((slug) => ({
    url: `${baseUrl}/knowledge/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...articlePages];
}
