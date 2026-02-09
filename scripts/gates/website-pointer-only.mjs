#!/usr/bin/env node
/**
 * Website Pointer-Only Gate
 * 
 * Enforces WEB-PTR rules:
 * 1. No data mirroring (counts, substrates list).
 * 2. No forbidden terms (Certified, Ranked, etc.).
 * 3. Enforce Lab links and boundary statements.
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '../..');

const SCAN_DIRS = ['app', 'src', 'content'];
const FORBIDDEN_TERMS = [
    /\bCertified\b/i,
    /\bRanked\b/i,
    /\bEndorsed\b/i,
    /\bCompliant\b/i,
    /\bPASS\b/,
    /\bFAIL\b/
];

const DATA_MIRROR_PATTERNS = [
    /\d+ substrates/i,
    /\d+ runs/i,
    /coverage: \d+%/i,
    /\|.*\|.*\|/ // Table patterns
];

const ALLOWED_LAB_LINK = /lab\.mplp\.io/;

async function main() {
    console.log('═══════════════════════════════════════════════════════════');
    console.log('  Website Pointer-Only Gate (WEB-PTR)');
    console.log('═══════════════════════════════════════════════════════════\n');

    let issues = [];

    const filesToScan = [];
    for (const dir of SCAN_DIRS) {
        const fullDir = path.join(PROJECT_ROOT, dir);
        if (fs.existsSync(fullDir)) {
            findFiles(fullDir, filesToScan);
        }
    }

    let hasLabLink = false;

    console.log(`🔍 Scanning ${filesToScan.length} files in ${SCAN_DIRS.join(', ')}...\n`);

    for (const file of filesToScan) {
        const content = fs.readFileSync(file, 'utf-8');
        const relativePath = path.relative(PROJECT_ROOT, file);

        if (ALLOWED_LAB_LINK.test(content)) {
            hasLabLink = true;
        }

        // 1. Check Forbidden Terms
        for (const term of FORBIDDEN_TERMS) {
            if (term.test(content)) {
                issues.push({
                    file: relativePath,
                    code: 'WEB-PTR-02-FORBIDDEN_TERMS',
                    msg: `Forbidden term detected: ${term}`
                });
            }
        }

        // 2. Check Data Mirroring
        for (const pattern of DATA_MIRROR_PATTERNS) {
            if (pattern.test(content)) {
                // Heuristic: only flag if it looks like a coverage table or stat
                if (content.includes('coverage') || content.includes('substrate')) {
                    issues.push({
                        file: relativePath,
                        code: 'WEB-PTR-01-DATA_MIRROR_DETECTED',
                        msg: `Potential data mirroring detected: ${pattern}`
                    });
                }
            }
        }
    }

    if (!hasLabLink) {
        issues.push({
            file: 'PROJECT_ROOT',
            code: 'WEB-PTR-03-MISSING_LAB_LINK',
            msg: `Missing required link to lab.mplp.io across scanned directories.`
        });
    }

    if (issues.length > 0) {
        console.log('❌ Issues detected:\n');
        issues.forEach(i => console.log(`  [${i.code}] ${i.file}: ${i.msg}`));
        process.exit(1);
    } else {
        console.log('✅ PASS: No forbidden data or terms detected.');
        process.exit(0);
    }
}

function findFiles(dir, fileList) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.next') {
                findFiles(fullPath, fileList);
            }
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.md') || file.endsWith('.mdx')) {
            fileList.push(fullPath);
        }
    }
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
