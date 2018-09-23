const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const SRC_PATH = path.resolve('./src');
const ASSETS_BUILD_PATH = path.resolve('./build');
const ASSETS_PUBLIC_PATH = '/assets/';

module.exports = {
    context:SRC_PATH,
    resolve:{
        extensions:['.js','jsx']
    },
    entry:{
        vender:'./vendor',
        app:'./app/index.js'
    },
    output:{
        path:ASSETS_BUILD_PATH,
        publicPath:ASSETS_PUBLIC_PATH,
        filename:'./[name].js'
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:8192,
                            name:'images/[name].[ext]'
                        }
                    }
                ]
            },{
                test:/\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:8192,
                            mimetype:'application/font-woff',
                            name:'fonts/[name].[ext]'
                        }
                    }
                ]
            },{
                test:/\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            limit:8192,
                            mimetype:'application/font-woff',
                            name:'fonts/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin([ASSETS_BUILD_PATH],{
            verbose:false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor',
            minChunks:Infinity
        })
    ]

}