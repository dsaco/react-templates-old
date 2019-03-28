const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base');
const { port } = require('./config');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.jsx?$/,
                use: 'eslint-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')
                            ]                            
                        }
                    },  
                    'sass-loader',
                ],
            }
        ],
    },  
    devServer: {
        hot: true,
        port,
        open: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});