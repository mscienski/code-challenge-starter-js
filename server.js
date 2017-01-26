const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');

const isDevelopment = process.env.NODE_ENV !== 'production';
const port = isDevelopment ? 3000 : process.env.PORT;
const app = express();

if (isDevelopment) {
    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        contentBase: 'src',
        stats: {
            // Add asset Information
            assets: true,
            // Sort assets by a filed
            assetsSort: "field",
            // Add information about cached (not built) modules
            cached: true,
            // Add children information
            children: true,
            // Add chunk information (setting this to `false` allows for a less verbose output)
            chunks: true,
            // Add built modules information to chunk information
            chunkModules: true,
            // Add the origins of chunks and chunk merging info
            chunkOrigins: true,
            // Sort the chunks by a field
            chunksSort: "field",
            // Context directory for request shortening
            context: "src",
            // Add errors
            errors: true,
            // Add details to errors (like resolving log)
            errorDetails: true,
            // Add the hash of the compilation
            hash: true,
            // Add built modules information
            modules: true,
            // Sort the modules by a field
            modulesSort: "field",
            // Add public path information
            publicPath: true,
            // Add information about the reasons why modules are included
            reasons: true,
            // Add the source code of modules
            source: true,
            // Add timing information
            timings: true,
            // Add webpack version information
            version: true,
            // Add warnings
            warnings: true
        },
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        }
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    app.get('*', function response(req, res) {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
        res.end();
    });
} else {
    app.use(express.static(__dirname + '/dist'));
    app.get('*', function response(req, res) {
        res.sendFile(__dirname, 'dist/index.html');
    });
}

app.listen(port, '0.0.0.0', function onStart(err) {
    if (err) {
        console.error(err);
    } else {
        console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
    }
})
