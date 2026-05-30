#!/usr/bin/env node
/**
 * Validates the vendored MPLP Protocol Public Manifest without network access.
 */

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "../..");
const MANIFEST_PATH = path.join(ROOT, "lib", "data", "mplp-public-manifest.json");
const CHECKSUM_PATH = path.join(ROOT, "lib", "data", "mplp-public-manifest.sha256");

const REQUIRED_FIELDS = [
    "manifest_id",
    "manifest_version",
    "generated_at",
    "protocol_name",
    "protocol_full_name",
    "protocol_version",
    "protocol_release_tag",
    "protocol_commit_sha",
    "copyright_holder",
    "trademark_notice",
    "license",
    "canonical_repository",
    "future_repository_target",
    "docs_url",
    "website_url",
    "schema_manifest",
    "sdk_packages",
    "pypi_packages",
    "validation_lab_pointer",
    "validation_lab_boundary",
    "website_boundary",
    "release_status",
    "forbidden_claims",
    "non_certification_notice",
    "package_replacement_status",
    "repo_migration_status",
];

function fail(message) {
    console.error(`[protocol-manifest] FAIL: ${message}`);
    process.exit(1);
}

function assert(condition, message) {
    if (!condition) fail(message);
}

function readJson(file) {
    try {
        return JSON.parse(fs.readFileSync(file, "utf8"));
    } catch (error) {
        fail(`Cannot parse JSON at ${path.relative(ROOT, file)}: ${error.message}`);
    }
}

assert(fs.existsSync(MANIFEST_PATH), "Vendored manifest is missing.");
assert(fs.existsSync(CHECKSUM_PATH), "Vendored manifest checksum is missing.");

const manifestBytes = fs.readFileSync(MANIFEST_PATH);
const manifest = readJson(MANIFEST_PATH);
const checksumLine = fs.readFileSync(CHECKSUM_PATH, "utf8").trim();
const expectedHash = checksumLine.split(/\s+/)[0];
const actualHash = crypto.createHash("sha256").update(manifestBytes).digest("hex");

assert(/^[0-9a-f]{64}$/.test(expectedHash), "Checksum file must start with a sha256 hash.");
assert(actualHash === expectedHash, "Vendored manifest checksum does not match.");

for (const field of REQUIRED_FIELDS) {
    assert(Object.hasOwn(manifest, field), `Missing required field: ${field}`);
}

assert(manifest.protocol_name === "MPLP", "protocol_name must be MPLP.");
assert(manifest.protocol_full_name === "Multi-Agent Lifecycle Protocol", "protocol_full_name mismatch.");
assert(manifest.copyright_holder === "Jearon Wong", "copyright_holder must be Jearon Wong.");
assert(manifest.license === "Apache-2.0", "license must remain Apache-2.0.");
assert(manifest.canonical_repository === "https://github.com/Coregentis/MPLP-Protocol", "canonical_repository must remain Coregentis/MPLP-Protocol.");
assert(manifest.future_repository_target === `https://github.com/${manifest.repo_migration_status?.future_org}/MPLP-Protocol`, "future_repository_target mismatch.");
assert(manifest.repo_migration_status?.migration_now === false, "repo migration must remain disabled.");
assert(manifest.repo_migration_status?.remotes_changed === false, "remotes_changed must be false.");
assert(manifest.repo_migration_status?.package_repository_urls_changed === false, "package_repository_urls_changed must be false.");
assert(manifest.package_replacement_status?.package_actions_executed === false, "package actions must remain false.");

const forbiddenClaims = Array.isArray(manifest.forbidden_claims)
    ? manifest.forbidden_claims.map((claim) => claim.toLowerCase()).join("\n")
    : "";
assert(forbiddenClaims.includes("certified"), "forbidden_claims must include certification boundary.");
assert(forbiddenClaims.includes("endorsed"), "forbidden_claims must include endorsement boundary.");
assert(forbiddenClaims.includes("regulator approved"), "forbidden_claims must include regulator approval boundary.");
assert(manifest.validation_lab_boundary?.no_certification === true, "validation_lab_boundary.no_certification must be true.");
assert(manifest.validation_lab_boundary?.no_endorsement === true, "validation_lab_boundary.no_endorsement must be true.");
assert(manifest.validation_lab_boundary?.no_regulator_approval === true, "validation_lab_boundary.no_regulator_approval must be true.");
assert(manifest.website_boundary?.protocol_truth_override_allowed === false, "Website must not override protocol truth.");
assert(manifest.website_boundary?.schema_truth_override_allowed === false, "Website must not override schema truth.");
assert(manifest.website_boundary?.release_truth_override_allowed === false, "Website must not override release truth.");

console.log("[protocol-manifest] PASS: vendored manifest validated without network access.");
