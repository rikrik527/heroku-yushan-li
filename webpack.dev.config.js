const webpack = require('webpack');
const config = require('./webpack.base.config');
 config.devServer = {
     contentBase:'./',
     publicPath:'/assets/'
 };
 config.module.rules.push(
     {
         test:/\.scss$/,
         use:[
             'style-loader',
             'css-loader',
             'scss-loader'
         ],
         exclude:/node_module/
     }
 );
 config.externals ={
     
 };
 config.plugins.push(
     new webpack.SourceMapDevToolPlugin({
         filename:'[file].map',
         exclude:['vendor.js']
     })
 );

 Object.keys(config.entry).forEach((key)=>{
     if(Array.isArray(config.entry[key])){
         config.entry[key].unshift(
             'webpack-dev-server/client?http://0.0.0.0.:8080',
             'webpack/hot/only-dev-server'
         )
     }
 });
 config.plugins.push(
     new webpack.HotModuleReplacementPlugin()
 )
 module.exports = config;