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
            },
            {
                test:/\.(gif|jpg|png)$/,
                use:'url-loader',
            },
        ],
    },  
    devServer: {
        hot: true,
        port,
        open: true,
        proxy: {
            '/api': {
                target: 'http://example.com',
                // 如果是https接口，需要配置这个参数
                secure: false,  
                // 如果接口跨域，需要进行这个参数配置
                changeOrigin: true, 
            },
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});