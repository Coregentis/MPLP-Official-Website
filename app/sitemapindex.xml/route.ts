import { NextResponse } from 'next/server';
import { siteConfig, DOCS_URLS, LAB_URLS } from '@/lib/site-config';

/**
 * Sitemapindex Route Handler
 * 
 * Provides cross-entry discovery by aggregating sitemaps from all four MPLP surfaces.
 * This is an SEO enhancement only; it does not imply canonical authority over other domains.
 * 
 * @see governance/05-specialized/ECOSYSTEM_ANCHORS.json for SSOT
 */
export async function GET() {
    const sitemaps = [
        `${siteConfig.url}/sitemap.xml`,
        `${DOCS_URLS.home}/sitemap.xml`,
        `${LAB_URLS.home}/sitemap.xml`,
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(url => `  <sitemap>
    <loc>${url}</loc>
  </sitemap>`).join('\n')}
</sitemapindex>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    });
}
