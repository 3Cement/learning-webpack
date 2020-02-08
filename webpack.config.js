const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: './src/js/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "sass-loader"}
                ]
            },
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "common",
                    enforce: true,
                    chunks: "all"
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title: 'Our Webpack application'
        }) // generate the default index.html
    ]
}