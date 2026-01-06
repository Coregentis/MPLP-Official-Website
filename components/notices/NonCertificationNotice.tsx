import { DOCS_URLS } from "@/lib/site-config";

export function NonCertificationNotice() {
    return (
        <div className="mb-8 p-4 rounded-xl border border-mplp-warning/30 bg-mplp-warning/5">
            <p className="text-sm text-mplp-text-muted">
                <strong className="text-mplp-warning">Non-Certification &amp; Non-Endorsement Notice:</strong>{" "}
                This page provides an informational overview of the MPLP conformance model.
                It does not constitute certification, endorsement, or official verification.
                For normative conformance requirements, see{" "}
                <a href={DOCS_URLS.conformance} target="_blank" rel="noopener noreferrer" className="text-mplp-blue-soft hover:underline">docs.mplp.io</a>.
            </p>
        </div>
    );
}
