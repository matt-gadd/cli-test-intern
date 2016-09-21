import { Command, Helper } from './interfaces';
import { Argv } from 'yargs';

export interface BuildArgs extends Argv {
	watch: boolean;
	port: number;
}

const command: Command = {
	description: 'create a build of your application',
	register(helper) {
		helper.yargs.option('w', {
			alias: 'watch',
			describe: 'watch and serve'
		});

		helper.yargs.options('p', {
			alias: 'port',
			describe: 'port to serve on when using --serve',
			type: 'number'
		});

		return helper.yargs;
	},
	run(helper: Helper, args: BuildArgs) {
		const webpack: any = require('webpack');
		const config: any = require('./webpack.config.prod.js');

		const options = {
			stats: {
				colors: true,
				chunks: false
			}
		};

		const compiler = webpack(config);
		return new Promise((resolve) => {
			compiler.run((err: any, stats: any) => {
				console.log(stats.toString(options.stats));
				resolve({});
			});
		});
	}
};

export default command;
