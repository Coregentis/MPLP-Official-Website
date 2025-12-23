import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd, generateBreadcrumbSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

export interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
    // Prepare schema data
    const schemaItems = [
        { name: "Home", item: siteConfig.url },
        ...items.map((item) => ({
            name: item.label,
            item: `${siteConfig.url}${item.href}`,
        })),
    ];

    const schema = generateBreadcrumbSchema(schemaItems);

    return (
        <>
            <JsonLd data={schema} />
            <nav aria-label="Breadcrumb" className={`flex items-center text-sm text-mplp-text-muted ${className}`}>
                <ol className="flex items-center space-x-2">
                    <li>
                        <Link
                            href="/"
                            className="flex items-center hover:text-mplp-blue transition-colors"
                            aria-label="Home"
                        >
                            <Home className="h-4 w-4" />
                        </Link>
                    </li>

                    {items.map((item, index) => (
                        <li key={`${item.href}-${index}`} className="flex items-center space-x-2">
                            <ChevronRight className="h-4 w-4 text-mplp-border" />
                            {index === items.length - 1 ? (
                                <span className="text-mplp-text font-medium" aria-current="page">
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="hover:text-mplp-blue transition-colors"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
