const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const host = process.env.host || 'localhost';
const port = parseInt(process.env.port, 10) + 1;
const version = require('./package').version;

const babelrc = fs.readFileSync('./.babelrc');
let babelrcObject = {};

try {
    babelrcObject = JSON.parse(babelrc);
} catch (e) {
    console.error('===>    Error parsing babelrc', e);
}

module.exports = {
    devtool: 'source-map',
    context: path.resolve(__dirname, './src'),
    entry: {
        'app': [
            path.join(__dirname, 'src/app.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].' + version + '.min.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: babelrcObject
            }, {
                loader: 'eslint-loader'
            }]
        }, {
            test: /\.json$/,
            use: [{
                loader: 'json-loader'
            }]
        }, {
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    modules: true,
                    sourceMap: true,
                    localIdentName: '[local]__[hash:base64]',
                    minimize: true
                }
            }]
        }]
    },
    resolve: {
        modules: [
            'src',
            'node_modules'
        ],
        extensions: [ '.json', '.js']
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        hot: true,
        lazy: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new FaviconsWebpackPlugin(path.join(__dirname, 'src/boris.png')),
        new ExtractTextWebpackPlugin('[name]-[hash].min.css'),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.IgnorePlugin(/webpack-stats\.json$/)
    ]
};
