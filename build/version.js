/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const pathname = path.resolve(__dirname, '../package.json');
const pkg = JSON.parse(fs.readFileSync(pathname, 'utf-8'));

const version = pkg.version;

console.log('version:', version);

const exec = require('child_process').exec;

const cmdStr = `git commit -m "v${version}" && git push && git tag -a "v${version}" -m "${version}" && git push origin --tags`;

exec(cmdStr, function(err, stdout, stderr)
{
  console.log('exec:', err, stdout, stderr);
});