import Link from "next/link";
import { DOCS_URLS, REPO_URLS } from "@/lib/site-config";

interface PositioningNoticeProps {
    /**
     * "shell" = primary shell-level boundary notice directly below the header
     * "callout" = route-level supplemental notice
     * "inline" = legacy footer-style fallback
     */
    variant?: "shell" | "inline" | "callout";
    /** Custom label for the notice (default: "Positioning Notice"). */
    label?: string;
    /** Custom message. If omitted, uses the default positioning disclaimer. */
    message?: string;
    /** Whether to show docs/repo reference links. Default: true for inline, false for callout. */
    showLinks?: boolean;
    /** Additional CSS classes. */
    className?: string;
}

const defaultShellMessage = "This website is the discovery and positioning surface for MPLP. It does not define protocol truth, certification, or adjudication outputs.";
const defaultInlineMessage = "This website provides discovery and positioning content only.";
const defaultCalloutMessage = "This page describes MPLP's architectural positioning and design intent. It is not a normative protocol specification and does not assert implementation completeness.";

export function PositioningNotice({
    variant = "inline",
    label,
    message,
    showLinks,
    className = "",
}: PositioningNoticeProps) {
    // Resolve showLinks default based on variant
    const shouldShowLinks = showLinks ?? (variant === "shell" || variant === "inline");
    const displayMessage = message ?? (
        variant === "shell"
            ? defaultShellMessage
            : variant === "inline"
                ? defaultInlineMessage
                : defaultCalloutMessage
    );
    const displayLabel = label ?? (
        variant === "shell"
            ? "Surface Notice"
            : "Positioning Notice"
    );

    if (variant === "shell") {
        return (
            <aside className={`border-b border-mplp-border/40 bg-mplp-dark-soft/40 ${className}`} aria-label="Website surface notice">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-mplp-text-muted">
                        <span className="font-semibold text-mplp-text uppercase tracking-wider">{displayLabel}</span>
                        <span className="text-mplp-text-muted/50">|</span>
                        <span>
                            {displayMessage}
                            {shouldShowLinks && (
                                <>
                                    {" "}Definition anchor:{" "}
                                    <Link href="/what-is-mplp" className="text-mplp-blue-soft hover:underline">
                                        /what-is-mplp
                                    </Link>
                                    . Documentation:{" "}
                                    <a href={DOCS_URLS.entrypoints} target="_blank" rel="noopener noreferrer" className="text-mplp-blue-soft hover:underline">
                                        docs.mplp.io
                                    </a>.
                                    {" "}Repository:{" "}
                                    <a href={REPO_URLS.root} target="_blank" rel="noopener noreferrer" className="text-mplp-blue-soft hover:underline">
                                        GitHub Repository
                                    </a>.
                                </>
                            )}
                        </span>
                    </div>
                </div>
            </aside>
        );
    }

    if (variant === "callout") {
        return (
            <div className={`p-4 rounded-xl border border-amber-500/30 bg-amber-500/5 text-sm text-mplp-text-muted ${className}`} aria-label="Supplemental route notice">
                <strong className="text-amber-500 block mb-1">{displayLabel}</strong>
                {displayMessage}
                {shouldShowLinks && (
                    <span className="block mt-2">
                        This route-level notice supplements the shared website surface notice.
                        {" "}
                        Canonical website definition anchor:{" "}
                        <Link href="/what-is-mplp" className="text-mplp-blue-soft hover:underline">
                            /what-is-mplp
                        </Link>
                        . Documentation and Repository provide the authoritative documentation chain.
                    </span>
                )}
            </div>
        );
    }

    // Default: inline (footer) style
    return (
        <div className={`mt-8 pt-4 border-t border-mplp-border/30 text-center ${className}`}>
            <p className="text-xs text-mplp-text-muted/60">
                <strong>Positioning Notice:</strong> {displayMessage}
                {shouldShowLinks && (
                    <>
                        {" "}Canonical website definition anchor:{" "}
                        <Link href="/what-is-mplp" className="text-mplp-blue-soft hover:underline">
                            /what-is-mplp
                        </Link>
                        . Documentation:{" "}
                        <a href={DOCS_URLS.entrypoints} target="_blank" rel="noopener noreferrer" className="text-mplp-blue-soft hover:underline">
                            docs.mplp.io
                        </a>.
                        {" "}Repository:{" "}
                        <a href={REPO_URLS.root} target="_blank" rel="noopener noreferrer" className="text-mplp-blue-soft hover:underline">
                            GitHub Repository
                        </a>.
                    </>
                )}
            </p>
        </div>
    );
}
