const webpack = require('webpack');
const RequirePlugin = require('umd-compat-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
const path = require('path');
const basePath = process.cwd();

module.exports = {
	entry: {
		'tests/unit/all': [path.join(basePath, 'tests/unit/all.ts')],
		'tests/functional/all': [path.join(basePath, 'tests/functional/all.ts')]
	},
	devtool: 'source-map',
	resolve: {
		root: [ basePath ],
		extensions: ['', '.ts', '.tsx', '.js'],
		alias: {
			rxjs: '@reactivex/rxjs/dist/amd',
			intern: path.join(__dirname, 'intern')
		}
	},
	resolveLoader: {
		root: [ path.join(__dirname, "node_modules") ]
	},
	module: {
		unknownContextRegExp: /$^/,
		unknownContextCritical: false,
		exprContextRegExp: /$^/,
		exprContextCritical: false,
		loaders: [
			{ test: /[src|test]\/.*\.ts?$/, loader: 'ts-loader' }
		]
	},
	plugins: [
		new RequirePlugin(),
		new WebpackShellPlugin({ onBuildEnd:['./node_modules/.bin/intern-client config=node_modules/dojo-cli-test-intern/intern'] })
	],
	output: {
		path: path.resolve('./dist'),
		filename: '[name].js',
		libraryTarget: 'umd'
	}
};
