var path = require('path');

var src = path.join(__dirname, '/src');
var dest = path.join(__dirname, '/src');

module.exports = {
    entry: `${src}/app.jsx`,
    output: {
        filename: 'bundle.js',
        path: dest,
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: src,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/react', 'es2015']
                }
            }
        ]
    }
};