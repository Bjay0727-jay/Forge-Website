import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Service } from '@/types';

const servicesDir = path.join(process.cwd(), 'src/data/services');

export async function getAllServices(): Promise<Service[]> {
  if (!fs.existsSync(servicesDir)) return [];
  const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.md'));
  const services = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(/\.md$/, '');
      return getServiceBySlug(slug);
    })
  );
  return services.filter((s): s is Service => s !== null);
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const filePath = path.join(servicesDir, `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const processedContent = await remark().use(html).process(content);
    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      badge: data.badge || '',
      badgeColor: data.badgeColor || 'teal',
      rate: data.rate,
      heroAccent: data.heroAccent,
      features: data.features || [],
      phases: data.phases || [],
      deliverables: data.deliverables || [],
      stats: data.stats || [],
      ctaTitle: data.ctaTitle || 'Ready to Get Started?',
      ctaDescription: data.ctaDescription || 'Contact us to learn more about this service.',
      content: processedContent.toString(),
    };
  } catch {
    return null;
  }
}

export function getServiceSlugs(): string[] {
  if (!fs.existsSync(servicesDir)) return [];
  return fs.readdirSync(servicesDir).filter(f => f.endsWith('.md')).map(f => f.replace(/\.md$/, ''));
}
