var path = require("path");
var webpack = require('webpack');
var configuration = getCLIParam("configuration", "Release");

module.exports = {
    context: __dirname,
    entry: './src/main.tsx',
    output: {
        path: __dirname,
        filename: './dist/discogs-artist-releases.module.js'
    },
    module: {
        loaders: [
            { test: /\.ts(x?)$/, loader: 'ts-loader' },
        ]
    },
    plugins: configuration === "Release" ? [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]: []
};

function getCLIParam(cliParamName, defaultValue){
    if (process.argv && process.argv.length) {
        for (var i = 0, len = process.argv.length; i< len; i += 1){
            var currentArgument = process.argv[i];
            if (currentArgument.indexOf(cliParamName)!== -1){
                return currentArgument.slice(currentArgument.indexOf('=') + 1);
            }
        }
    }
    return defaultValue;
}

