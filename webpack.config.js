let webpack = require('webpack');

module.exports = {
    entry: {
        app: './app/',
        worker: './worker/'
    },
    output: {
        filename: "[name].js",
        library: "[name]",
        libraryTarget: "umd"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: ["node_modules"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    devServer: {
        open: true
    }
};
