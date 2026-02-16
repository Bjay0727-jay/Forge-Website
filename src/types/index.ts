export interface Service {
  slug: string;
  title: string;
  description: string;
  badge: string;
  badgeColor: 'teal' | 'blue' | 'red' | 'amber';
  heroAccent?: string;
  features: ServiceFeature[];
  phases?: ServicePhase[];
  deliverables?: ServiceDeliverable[];
  stats?: ServiceStat[];
  ctaTitle: string;
  ctaDescription: string;
  content: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServicePhase {
  title: string;
  description: string;
  duration?: string;
}

export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  featured: boolean;
  readTime: string;
  content: string;
  rawContent?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  groups?: NavGroup[];
}

export interface NavGroup {
  heading: string;
  items: NavItem[];
}
