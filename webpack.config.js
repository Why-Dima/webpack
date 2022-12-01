const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');


module.exports = {
    devtool: 'inline-source-map',
    stats: { 
        errorDetails: true,
        children: true },
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        static: './dist',
        hot: true,
        port: 3000,
      },
    output: {
        filename: 'main.js'
    },
    plugins: [ 
        new TerserWebpackPlugin(),
        new OptimizeCssAssetsWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: "Development",
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserWebpackPlugin(), new OptimizeCssAssetsWebpackPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                    }
                }, 'css-loader'],
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            // {
            //     test: /\.js$/,
            //     exclude: '/node_modules/',
            //     use: 'eslint-loader'
            // }
        ]
    }
};

