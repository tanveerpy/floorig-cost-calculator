import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://flooringestimators.com'

    const materials = ['hardwood', 'vinyl', 'laminate', 'tile', 'epoxy', 'concrete', 'bamboo', 'mezzanine']
    const guides = [
        'ultimate-flooring-cost-guide-2026',
        'hardwood-refinishing-vs-replacement',
        'concrete-polishing-cost-guide',
        'big-box-vs-local-installer'
    ]

    const materialRoutes: MetadataRoute.Sitemap = materials.map((slug) => ({
        url: `${baseUrl}/${slug}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    const guideRoutes: MetadataRoute.Sitemap = guides.map((slug) => ({
        url: `${baseUrl}/guides/${slug}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
        },
        ...materialRoutes,
        ...guideRoutes,
    ]
}
