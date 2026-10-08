import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://moniquehawkins.com'
  const now = new Date()
  const routes: { path: string; priority: number; freq: 'monthly' | 'yearly' }[] = [
    { path: '', priority: 1.0, freq: 'monthly' },
    { path: '/consulting', priority: 0.9, freq: 'monthly' },
    { path: '/about', priority: 0.8, freq: 'monthly' },
    { path: '/methodology', priority: 0.8, freq: 'monthly' },
    { path: '/work', priority: 0.7, freq: 'monthly' },
    { path: '/insights', priority: 0.7, freq: 'monthly' },
    { path: '/web-design', priority: 0.7, freq: 'monthly' },
    { path: '/contact', priority: 0.6, freq: 'yearly' },
  ]
  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }))
}
