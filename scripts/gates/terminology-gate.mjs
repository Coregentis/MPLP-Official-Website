#!/usr/bin/env node
/**
 * GATE-TERM-WEBSITE — Terminology Gate for Website
 * 
 * Checks app/, components/, lib/ for forbidden terminology:
 * - GF-0[1-9] (must use FLOW-xx)
 * - "Golden Flow 0X" (must use FLOW-xx ID)
 * 
 * Exit 0 = PASS, Exit 1 = FAIL
 */

import { execSync } from 'child_process';

const SEARCH_PATHS = ['app/', 'components/', 'lib/'];

const FORBIDDEN_PATTERNS = [
    { pattern: 'GF-0[1-9]', description: 'GF-xx (use FLOW-xx instead)' },
    { pattern: 'Golden Flow 0[1-9]', description: 'Golden Flow 0X (use FLOW-xx ID instead)' }
];

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('GATE-TERM-WEBSITE: Website Terminology Gate');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

let violations = 0;

for (const { pattern, description } of FORBIDDEN_PATTERNS) {
    for (const searchPath of SEARCH_PATHS) {
        try {
            const result = execSync(
                `grep -rn "${pattern}" ${searchPath} --include="*.tsx" --include="*.ts" 2>/dev/null || true`,
                { encoding: 'utf-8' }
            ).trim();

            if (result) {
                console.log(`\n❌ VIOLATION in ${searchPath}: ${description}`);
                console.log(result);
                violations++;
            }
        } catch (e) {
            // grep returns exit 1 when no match, which is OK
        }
    }
    if (violations === 0) {
        console.log(`✅ No ${description} found`);
    }
}

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

if (violations > 0) {
    console.log(`❌ GATE FAILED: ${violations} terminology violation(s)`);
    process.exit(1);
} else {
    console.log('✅ GATE PASSED: Website terminology compliant');
    process.exit(0);
}
