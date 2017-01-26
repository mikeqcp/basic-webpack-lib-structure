module.exports = {
    entry: './src/index.js',
    target: 'node',
    output: {
        filename: 'bundle.js',
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
    }
}
