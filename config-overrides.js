const webpack = require('webpack');
const WorkBoxPlugin = require('workbox-webpack-plugin');
module.exports = function override(config) {
    config.resolve.fallback = {
        process: require.resolve('process/browser'),
        zlib: require.resolve('browserify-zlib'),
        stream: require.resolve('stream-browserify'),
        util: require.resolve('util'),
        buffer: require.resolve('buffer'),
        asset: require.resolve('assert'),
    };

    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser.js',
            Buffer: ['buffer', 'Buffer'],
        })
    );

    config.plugins.forEach(plugin => {
        if (plugin instanceof WorkBoxPlugin.InjectManifest) {
            plugin.config.maximumFileSizeToCacheInBytes = 50 * 1024 * 1024;
        }
    });

    return config;
};
