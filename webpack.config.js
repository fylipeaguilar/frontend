const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    resolve: {
        extensions: ['','.js', '.jsx'],
        alias:{
            module: __dirname + '/node_modules'
        }
    },
    plugin: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loader: [{
            test: /.js[x]?$/,
            loader: 'babel_modules/',
            exclude: '/node_modules/',
            query:{
                presets: ['es2015','react'],
                plugin: ['transform-object-rest-spread']        
            }
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        },{
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }]
    }
}