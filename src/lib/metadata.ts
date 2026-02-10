import { Metadata } from 'next';

export function generatePageMetadata(title: string, description: string, path?: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | Forge Cyber Defense`,
      description,
      url: path ? `https://forgecyberdefense.com${path}` : undefined,
    },
  };
}
