var loaders = require("./loaders");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin')


/**
 * Build a Bundle in js...
 */
module.exports = {
    entry: ['./src/index.ts'], //entry point
    output: { // directory output
        filename: 'build.js',
        path: 'dist'
    },
    devtool: 'source-map', // with SourceMap in file
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json'] // all extensions
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            warning: false,
            mangle: true,
            comments: false
        }),
        new HtmlWebpackPlugin({ //source HTML
            template: './src/index.html',
            inject: 'body',
            hash: true
        }),
        new webpack.ProvidePlugin({ //include library jquery
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery'
        }),
        new BellOnBundlerErrorPlugin()

    ],
    module: {
        loaders: loaders
    }
};