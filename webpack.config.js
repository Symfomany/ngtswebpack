var babel = require('babel-core');
var webpack = require('webpack');

/**
 * All Webpack
 */
module.exports = function() {
    return {
        files: [
            { pattern: 'src/**/*.html', load: false },
            { pattern: 'src/**/*.scss', load: false },
            { pattern: 'src/**/*.css', load: false },
            { pattern: 'src/**/*.ts', load: false },
            { pattern: 'node_modules/**/*.js', ignore: true }
        ],
        preprocessors: {
            '**/*.js': file => babel.transform(file.content, { sourceMap: true })
        },
        module: {
            loaders: [{
                    test: /\.html$/,
                    exclude: /node_modules/,
                    loader: 'raw'
                },
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
                },
                {
                    test: /\.scss$/,
                    loader: 'style!css!sass'
                }
            ]
        }
    };
};