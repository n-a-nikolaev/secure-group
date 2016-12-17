var webpack = require("webpack");

module.exports = {
    context: __dirname,
    entry: {
        app: './src/app/app'
    },
    output: {
        path: __dirname + "/dist",
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.json'],
    },
    module: {
        loaders: [
            { test: /\.ts(x?)$/, loader: 'babel-loader!ts-loader' }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            "window.jQuery": "jquery"
        })
    ]
}