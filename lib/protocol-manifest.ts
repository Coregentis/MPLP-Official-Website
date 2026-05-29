import manifest from "@/lib/data/mplp-public-manifest.json";

type PackageReplacementState = "planned_not_published" | "published" | "deferred" | "skipped";

type ProtocolPackage = {
    name: string;
    registry: "npm" | "pypi";
    current_version: string;
    next_clean_version: string;
    package_replacement_status: PackageReplacementState;
};

type ProtocolPublicManifest = {
    manifest_id: string;
    manifest_version: string;
    generated_at: string;
    protocol_name: "MPLP";
    protocol_full_name: "Multi-Agent Lifecycle Protocol";
    protocol_version: string;
    protocol_release_tag: string | null;
    protocol_commit_sha: string;
    copyright_holder: string;
    trademark_notice: string;
    license: "Apache-2.0";
    canonical_repository: string;
    future_repository_target: string;
    docs_url: string;
    website_url: string;
    sdk_packages: ProtocolPackage[];
    pypi_packages: ProtocolPackage[];
    validation_lab_pointer: {
        lab_url: string;
        validation_lab_repo: string;
        future_validation_lab_repo_target: string;
        ruleset_version: string;
        relation_status: string;
    };
    validation_lab_boundary: {
        non_certifying: true;
        non_normative: true;
        evidence_based_verdicts_only: true;
        no_endorsement: true;
        no_certification: true;
        no_regulator_approval: true;
        no_protocol_truth_override: true;
        no_runtime_authority: true;
        no_sdk_authority: true;
    };
    website_boundary: {
        discovery_positioning_only: true;
        seo_geo_surface: true;
        protocol_truth_override_allowed: false;
        schema_truth_override_allowed: false;
        release_truth_override_allowed: false;
        package_publication_authority_allowed: false;
    };
    forbidden_claims: string[];
    non_certification_notice: string;
    package_replacement_status: {
        status: "planned_not_published" | "published" | "deferred";
        clean_replacement_versions_defined: boolean;
        package_actions_executed: false;
    };
    repo_migration_status: {
        status: "reserved_future_org_not_migrated";
        current_org: "Coregentis";
        future_org: string;
        migration_now: false;
        remotes_changed: false;
        package_repository_urls_changed: false;
    };
};

export const protocolPublicManifest = manifest as ProtocolPublicManifest;

export const protocolIdentity = {
    name: protocolPublicManifest.protocol_name,
    fullName: protocolPublicManifest.protocol_full_name,
    version: protocolPublicManifest.protocol_version,
    releaseTag: protocolPublicManifest.protocol_release_tag,
    commitSha: protocolPublicManifest.protocol_commit_sha,
} as const;

export const protocolLegal = {
    copyrightHolder: protocolPublicManifest.copyright_holder,
    trademarkNotice: protocolPublicManifest.trademark_notice,
    license: protocolPublicManifest.license,
} as const;

export const protocolUrls = {
    canonicalRepository: protocolPublicManifest.canonical_repository,
    futureRepositoryTarget: protocolPublicManifest.future_repository_target,
    docs: protocolPublicManifest.docs_url,
    website: protocolPublicManifest.website_url,
    validationLab: protocolPublicManifest.validation_lab_pointer.lab_url,
} as const;

export const protocolBoundaries = {
    forbiddenClaims: protocolPublicManifest.forbidden_claims,
    nonCertificationNotice: protocolPublicManifest.non_certification_notice,
    validationLab: protocolPublicManifest.validation_lab_boundary,
    website: protocolPublicManifest.website_boundary,
} as const;

export const protocolPackageState = {
    npm: protocolPublicManifest.sdk_packages,
    pypi: protocolPublicManifest.pypi_packages,
    replacement: protocolPublicManifest.package_replacement_status,
} as const;

export const protocolRepoMigrationStatus = protocolPublicManifest.repo_migration_status;

export function formatProtocolVersion(prefix = "v"): string {
    return `${prefix}${protocolIdentity.version}`;
}
