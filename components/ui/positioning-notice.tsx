import Link from "next/link";
import { DOCS_URLS, REPO_URLS } from "@/lib/site-config";

interface PositioningNoticeProps {
    /**
     * "inline" = footer-style (centered, muted)
     * "callout" = amber-bordered box (typically at top of page)
     */
    variant?: "inline" | "callout";
    /** Custom label for the notice (default: "Positioning Notice"). */
    label?: string;
    /** Custom message. If omitted, uses the default positioning disclaimer. */
    message?: string;
    /** Whether to show docs/repo reference links. Default: true for inline, false for callout. */
    showLinks?: boolean;
    /** Additional CSS classes. */
    className?: string;
}

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
    const shouldShowLinks = showLinks ?? (variant === "inline");
    const displayMessage = message ?? (variant === "inline" ? defaultInlineMessage : defaultCalloutMessage);
    const displayLabel = label ?? "Positioning Notice";

    if (variant === "callout") {
        return (
            <div className={`p-4 rounded-xl border border-amber-500/30 bg-amber-500/5 text-sm text-mplp-text-muted ${className}`}>
                <strong className="text-amber-500 block mb-1">{displayLabel}</strong>
                {displayMessage}
                {shouldShowLinks && (
                    <span className="block mt-2">
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
