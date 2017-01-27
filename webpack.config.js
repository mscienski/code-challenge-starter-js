const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const host = process.env.host || 'localhost';
const port = parseInt(process.env.port, 10) + 1;

const babelrc = fs.readFileSync('./.babelrc');
let babelrcObject = {};

try {
    babelrcObject = JSON.parse(babelrc);
} catch (e) {
    console.error('===>    Error parsing babelrc', e);
}

module.exports = {
    devtool: 'inline-source-map',
    context: path.resolve(__dirname, './src'),
    entry: {
        'app': [
            'webpack-hot-middleware/client?reload=true&path=/__webpack_hmr&timeout=20000',
            path.join(__dirname, 'src/app.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name]-[chunkhash].js',
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
                    localIdentName: '[local]__[hash:base64]'
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
            template: 'index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new FaviconsWebpackPlugin(path.join(__dirname, 'src/boris.png')),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.IgnorePlugin(/webpack-stats\.json$/)
    ]
};
