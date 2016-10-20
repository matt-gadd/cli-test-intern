import { Command, Helper } from 'dojo-cli/interfaces';
import { Argv } from 'yargs';
import { join } from 'path';
const execa: any = require('execa');

interface TestArgs extends Argv {
	unit: boolean;
	functional: boolean;
}

const command: Command = {
	description: 'run tests for your application',
	register(helper: Helper) {
		helper.yargs.option('u', {
			alias: 'unit',
			describe: 'run unit tests'
		});

		helper.yargs.option('f', {
			alias: 'functional',
			describe: 'run functional tests'
		});

		return helper.yargs;
	},
	run(helper: Helper, args: TestArgs) {
		const configArgs = ['config=' + join('node_modules/dojo-cli-test-intern', 'intern') ];
		const client = args.functional ? 'intern-runner' : 'intern-client';
		return execa(client, configArgs).then((result: any) => {
			console.log(result.stdout);
		});
	}
};
export default command;
