import path from 'path';
import fs from 'fs';
import test from 'ava';
import execa from 'execa';
import {fileURLToPath} from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const cwd = path.join(__dirname, '..');
const conf = path.join(__dirname, '..', 'browser', 'from-env.cjs');
const testsDirectory = path.join(__dirname, '..', 'browser', 'tests');

for (const filename of fs.readdirSync(testsDirectory)) {
	const basename = path.basename(filename, '.js');
	const filepath = path.join(testsDirectory, filename);

	test.serial(basename, async t => {
		await t.notThrowsAsync(execa('web-test-runner', ['start', conf], {
			cwd,
			env: {
				...process.env,
				ANY_OBSERVABLE_TEST_PATH: filepath
			}
		}));
	});
}
