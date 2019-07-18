var path = require('path');
var SRC_DIR = path.join(__dirname, '/src');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
	entry: `${SRC_DIR}/app.jsx`,
	output: {
		filename: 'bundle.js',
		path: DIST_DIR,
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				include: SRC_DIR,
				loader: 'babel-loader',
				query: {
//					presets: ['@babel/react', 'es2015'],
				},
			},
		],
	},
};
