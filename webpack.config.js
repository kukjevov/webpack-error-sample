var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(options)
{
    var config =
    {
        entry: 
        {
            app: [path.join(__dirname, "index.js")]
        },
        output:
        {
            path: path.join(__dirname, '.'),
            filename: '[name].js',
            publicPath: ''
        },
        target: 'web',
        resolve:
        {
            extensions: ['.ts', '.js']
        },
        module:
        {
            rules:
            [
            ]
        },
        plugins:
        [
            new HtmlWebpackPlugin(
            {
                filename: "index.html"
            })
        ]
    };

    return config;
}