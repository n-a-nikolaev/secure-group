var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
    context: __dirname,
    entry: {
        app: './src/app/app',
        styles: './assets/scss/main.scss'
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
            { test: /\.ts(x?)$/, loader: 'ts-loader' },
            { test: /\.css$/, loader: "css-loader" },
            { test: /\.scss$/, loaders: ["style-loader", "css-loader?minimize", "sass-loader"] },
            { test: /\.handlebars$/, loader: "handlebars-loader" },
            { test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000' },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            "window.jQuery": "jquery"
        }),
        new ExtractTextPlugin('[name].min.css')
    ]
}];