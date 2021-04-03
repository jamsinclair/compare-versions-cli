#!/usr/bin/env node
const compareVersions = require('compare-versions');

const cliArgs = process.argv.slice(2).map(value => value.trim());
const [versionA = '', versionB = ''] = cliArgs;

const showHelp = () => {
	console.log(`
	Usage
	  $ compare-versions-cli versionA versionB

	Options
	  --help Shows this help prompt

	Examples
	  $ compare-versions-cli v1.2.2 v1.1.1
	  1
	  $ compare-versions-cli v1.1.1 v1.2.2
	  -1
	  $ compare-versions-cli v1.1.1 v1.1.1
	  0
`);
};

if (cliArgs.length === 0 || versionA === '--help') {
	showHelp();
	process.exit(0);
}

try {
	console.log(compareVersions(versionA, versionB));
} catch (error) {
	if (!error.message.includes('Invalid argument not valid semver')) {
		throw error;
	}

	console.error('Invalid semver versions used');
	process.exit(1);
}
