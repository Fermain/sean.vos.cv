// Copies the Decap CMS bundle out of node_modules and into public/admin/ so the
// admin page can load it from our own origin instead of a CDN.
//
// Why: loading the CMS from unpkg meant a new upstream release reached production
// without us deploying anything (decap-cms 3.15.0 shipped a React #130 regression
// and broke /admin mid-day). Sourcing it from node_modules puts the version under
// the lockfile, so upgrades arrive as reviewable PRs.
//
// The copied file is gitignored — it is a build artifact, regenerated on install.

import { copyFile, mkdir } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';

const require = createRequire(import.meta.url);

const source = resolve(dirname(require.resolve('decap-cms/package.json')), 'dist/decap-cms.js');
const target = resolve(import.meta.dirname, '../public/admin/decap-cms.js');

await mkdir(dirname(target), { recursive: true });
await copyFile(source, target);

console.log(`[copy-cms] ${require('decap-cms/package.json').version} -> public/admin/decap-cms.js`);
