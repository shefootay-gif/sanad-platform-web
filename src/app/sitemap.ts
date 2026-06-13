import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://sanad-platform-web.vercel.app', lastModified: new Date() }
  ];
}