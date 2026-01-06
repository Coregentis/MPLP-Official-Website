import Link from "next/link";
import { DOCS_URLS } from "@/lib/site-config";

export interface CanonicalReferencesProps {
    /** Show link to /definition (default: true) */
    showDefinition?: boolean;
    /** Override definition href (default: "/definition") */
    definitionHref?: string;
    /** Primary docs.mplp.io link for normative spec */
    docsUrl?: string;
    /** GitHub repo link for source of truth */
    repoUrl?: string;
    /** Display variant: compact (inline) or full (with explanation) */
    variant?: "compact" | "full";
}

/**
 * Canonical References Component
 * 
 * Provides standardized links back to authority chain:
 * - /definition (site anchor)
 * - docs.mplp.io (normative spec)
 * - GitHub repo (source of truth)
 * 
 * Part of WG-04: All pages must link out to authority sources.
 */
export function CanonicalReferences({
    showDefinition = true,
    definitionHref = "/definition",
    docsUrl,
    repoUrl = DOCS_URLS.github,
    variant = "compact",
}: CanonicalReferencesProps) {
    // Enforce docsUrl requirement for full variant
    if (variant === "full" && !docsUrl) {
        throw new Error("CanonicalReferences: docsUrl is required when variant='full'.");
    }

    const items = [
        showDefinition
            ? { label: "Definition", href: definitionHref, external: false }
            : null,
        docsUrl
            ? { label: "Normative Spec (Docs)", href: docsUrl, external: true }
            : null,
        repoUrl
            ? { label: "Source of Truth (Repo)", href: repoUrl, external: true }
            : null,
    ].filter(Boolean) as Array<{ label: string; href: string; external: boolean }>;

    return (
        <div className="mt-6 mb-10">
            <div className="rounded-xl border border-mplp-border/40 bg-slate-950/30 px-4 py-3">
                <div className="text-xs font-semibold text-mplp-text-muted/70 uppercase tracking-wider mb-2">
                    Canonical References
                </div>

                <div className="flex flex-wrap gap-3 text-sm">
                    {items.map((it) =>
                        it.external ? (
                            <a
                                key={it.href}
                                href={it.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-mplp-blue-soft hover:underline"
                            >
                                {it.label} →
                            </a>
                        ) : (
                            <Link
                                key={it.href}
                                href={it.href}
                                className="text-mplp-blue-soft hover:underline"
                            >
                                {it.label} →
                            </Link>
                        )
                    )}
                </div>

                {variant === "full" && (
                    <p className="mt-2 text-xs text-mplp-text-muted/70">
                        This website provides discovery and positioning content only.
                        Normative requirements live in Docs; the ultimate source of truth is the Repository.
                    </p>
                )}
            </div>
        </div>
    );
}
