import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/ar/dashboard', '/en/dashboard', '/api/'],
    },
    sitemap: 'https://sanad-platform.com/sitemap.xml',
  };
}