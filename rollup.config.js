/* @flow */

import babel from 'rollup-plugin-babel';

export default {
	dest: 'dist/bundle.js',
	entry: 'src/index.js',
	format: 'umd',
	moduleName: 'reactCustomElement',
	plugins: [babel()]
};
