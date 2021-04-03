const test = require('ava');
const execa = require('execa');

const HELP_TEXT = `
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
`;

test('no args', async t => {
	const {stdout} = await execa('./cli.js', []);
	t.is(stdout, HELP_TEXT);
});

test('with --help', async t => {
	const {stdout} = await execa('./cli.js', ['--help']);
	t.is(stdout, HELP_TEXT);
});

test('missing second version', async t => {
	try {
		await execa('./cli.js', ['1.2.3']);
	} catch (error) {
		t.is(error.stderr, 'Invalid semver versions used');
	}
});

test('invalid versions', async t => {
	try {
		await execa('./cli.js', ['abc']);
	} catch (error) {
		t.is(error.stderr, 'Invalid semver versions used');
	}

	try {
		await execa('./cli.js', ['1.2.3', 'abc']);
	} catch (error) {
		t.is(error.stderr, 'Invalid semver versions used');
	}
});
