import { DOCS_URLS } from "@/lib/site-config";

export function PositioningDisclaimer() {
    return (
        <div className="mb-6 p-3 rounded-lg border border-mplp-border/30 bg-slate-950/30">
            <p className="text-xs text-mplp-text-muted">
                <strong>Positioning Summary:</strong> This page provides a high-level overview of the MPLP architecture model.
                For normative layer definitions, see{" "}
                <a href={DOCS_URLS.architecture} target="_blank" rel="noopener noreferrer" className="text-mplp-blue-soft hover:underline">docs.mplp.io</a>.
            </p>
        </div>
    );
}
