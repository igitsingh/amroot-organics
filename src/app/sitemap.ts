import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://amrootorganics.com';

  // Define static routes
  const routes = [
    '',
    '/about',
    '/community',
    '/contact',
    '/industries',
    '/learn',
    '/origin',
    '/products',
    '/quality',
    '/trace',
  ];

  // Map over the static routes to generate the sitemap entries
  const sitemapEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/products' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/products' || route === '/quality' ? 0.9 : 0.8,
  }));

  // Define dynamic routes (e.g. products, learn subpages)
  const learnRoutes = [
    '/learn/applications',
    '/learn/certifications',
    '/learn/faqs',
    '/learn/import-guide',
    '/learn/knowledge-hub',
    '/learn/research',
    '/learn/single-origin',
  ];

  const learnEntries: MetadataRoute.Sitemap = learnRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...sitemapEntries, ...learnEntries];
}
