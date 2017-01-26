const webpack = require("webpack");

module.exports = {
    entry: './src/index.js',
    target: 'node',
    output: {
        filename: 'index.js',
        path: './lib',
        library: 'libname',
        libraryTarget: 'umd',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, ]
    },
    externals: {
    //    dependencies
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
}
