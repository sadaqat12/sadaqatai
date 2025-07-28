import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sadaqat.ai'
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/projects', 
    '/skills',
    '/contact',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic project pages (would typically come from database)
  const projectPages = [1, 2, 3, 4, 5, 6].map(id => ({
    url: `${baseUrl}/projects/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...projectPages]
}