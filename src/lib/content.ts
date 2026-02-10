import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Article } from '@/types';

const knowledgeDir = path.join(process.cwd(), 'src/data/knowledge');

export async function getAllArticles(): Promise<Article[]> {
  if (!fs.existsSync(knowledgeDir)) return [];
  const files = fs.readdirSync(knowledgeDir).filter(f => f.endsWith('.md'));
  const articles = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(/\.md$/, '');
      return getArticleBySlug(slug);
    })
  );
  return articles
    .filter((a): a is Article => a !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const filePath = path.join(knowledgeDir, `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const processedContent = await remark().use(html).process(content);
    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      author: data.author || 'Forge Cyber Defense',
      date: data.date || '',
      category: data.category || '',
      tags: data.tags || [],
      featured: data.featured || false,
      readTime: data.readTime || '5 min read',
      content: processedContent.toString(),
      rawContent: content,
    };
  } catch {
    return null;
  }
}

export function getAllCategories(): string[] {
  if (!fs.existsSync(knowledgeDir)) return [];
  const files = fs.readdirSync(knowledgeDir).filter(f => f.endsWith('.md'));
  const categories = new Set<string>();
  files.forEach((filename) => {
    const filePath = path.join(knowledgeDir, filename);
    const { data } = matter(fs.readFileSync(filePath, 'utf8'));
    if (data.category) categories.add(data.category);
  });
  return Array.from(categories);
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(knowledgeDir)) return [];
  return fs.readdirSync(knowledgeDir).filter(f => f.endsWith('.md')).map(f => f.replace(/\.md$/, ''));
}
