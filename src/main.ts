import { Command, Helper } from 'dojo-cli/interfaces';
import { Argv } from 'yargs';

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
		return Promise.resolve();
	}
};
export default command;
