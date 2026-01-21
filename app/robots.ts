import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/"],
        },
        sitemap: [
            `${siteConfig.url}/sitemap.xml`,
            `${siteConfig.url}/sitemapindex.xml`,
            "https://docs.mplp.io/sitemap.xml",
            "https://lab.mplp.io/sitemap.xml",
        ],
    };
}
