import { DOCS_URLS, REPO_URLS } from "@/lib/site-config";

export function PositioningNotice() {
    return (
        <div className="mt-8 pt-4 border-t border-mplp-border/30 text-center">
            <p className="text-xs text-mplp-text-muted/60">
                <strong>Positioning Notice:</strong> This website provides discovery and positioning content only.
                For normative protocol definitions, see{" "}
                <a href={DOCS_URLS.home} target="_blank" rel="noopener noreferrer" className="text-mplp-blue-soft hover:underline">docs.mplp.io</a>.
                Source of truth:{" "}
                <a href={REPO_URLS.root} target="_blank" rel="noopener noreferrer" className="text-mplp-blue-soft hover:underline">GitHub Repository</a>.
            </p>
        </div>
    );
}
