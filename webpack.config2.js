
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const autoprefixer = require('autoprefixer')
const browserSyncPlugin = require('browser-sync-webpack-plugin')
const phaserModule = path.join(__dirname,'/node_modules/phaser')
const phaser = path.join(phaserModule,'build/custom/phaser-split.js')
const pixi = path.join(phaserModule,'build/custom/pixi.js')
const p2 = path.join(phaserModule,'build/custom/p2.js')
const definePlugin = new webpack.DefinePlugin({
    __DEV__:JSON.stringify(JSON.parse(process.env.BUILD_DEV || true))
})

const public = 'public/assets'

module.exports = {
    devtool: 'inline-source-map',
    context: path.resolve(__dirname, './src'),
    entry: {
        
        app:["./app/index.js","babel-polyfill"],
        vendor:['pixi','p2','phaser']
        
    },
       


    
    output: {
        pathinfo:true,
        path: path.join(__dirname, 'public', 'assets'),
        filename: 'js/[name].bundle.js',
        publicPath: '/public/assets/'
    },
    watch:true,
    module: {
        rules: [{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader'],
                }),




            },
            
            {
                test: /\.scss$/,
               
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader', 'postcss-loader'],


                })
            }, {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include:[
                    path.resolve(__dirname,'src')
                ],
                use: [{
                    loader: 'babel-loader',
                  query:{
                      plugins:['transform-runtime'],
                      presets:['es2015','stage-0','react']
                  },  
                    // options: {
                    //     presets: [
                    //         ['es2015']
                    //     ]
                    // }
                }]
            },
            {
                test:/pixi\.js/,
                use:['expose-loader?PIXI']
            }, 
            {
                test:/phaser-split\.js$/,
                use:['expose-loader?Phaser']
            },
            {
                  test:/p2\.js/,
                  use:['expose-loader?p2']
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file-loader',
               
                query: {
                    name: 'images/[name].[ext]'
                },

            }, {
                test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
                loader: 'url-loader',
               
                query: {
                    limit: 10000,
                    name: 'media/[name].[ext]'
                }

            }, {
                test: /\.json$/,
                loader: 'json-loader',
                query: {
                    name: 'models/[name].[ext]'

                },
            },
        ]
    },
    node:{
        fs:'empty',
        net:'empty',
        tls:'empty'
    },
    resolve:{
        alias:{
            'phaser':phaser,
            'pixi':pixi,
            'p2':p2
        }
    },
   
    plugins: [
        definePlugin,
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor',
            filename:'vendor.bundle.js'
        }),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('development')
        //   }),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV)
        // }),
        new webpack.LoaderOptionsPlugin({
            options: {
                minimize: true,
                postcss: [
                    autoprefixer({
                        browsers: ['last 2 version', 'Chrome >=49', 'Firefox >=49', 'Edge >= 11', 'ie >= 9']
                    }),
                ]
            }

        }),


       
        new HtmlWebpackPlugin({
            title: 'shan-li-adventure',
            minify: {
                removeComments:false,
                collapseWhitespace: true,
                removeRedundantAttributes: false,
                useShortDoctype:false,
                removeEmptyAttributes: false,
                removeStyleLinkTypeAttributes: false,
                keepClosingSlash: true,
                minifyJS: false,
                minifyCSS: false,
                minifyURLs:false,
                collapseWhitespace: false
            },
            hash: false,
            inject: true,
            template: './template/index.html',
            filename: 'html/index.html',
            chunks: ['app']
        }),
        new browserSyncPlugin({
            host:process.env.IP || 'localhost',
            port:process.env.PORT || 3000,
            server:{
                baseDir:['public/assets']
            }
        }),

        new webpack.optimize.UglifyJsPlugin({
            test: /(\.jsx|\.js)$/,
            minimize: true,
            sourceMap: true,
            compress: {
                sequences: true,
                dead_code: true,
                unused: true,
                warnings: false,
                screw_ie8: true,
                conditionals: true,

                comparisons: true,
                evaluate: true,
                if_return: true,
                join_vars: true
            },
            compressor: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].bundle.css',
            disable: false,
            allChunks: true,

        }),
        // new PurifyCSSPlugin({
        //     // Give paths to parse for rules. These should be absolute!
        //     paths: glob.sync(path.join(__dirname, 'src/template/*.html')),
        // }),
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery"
        //         // Popper:['Popper.js', 'defalut']
        //         // in case you imported plugins individually, you must also require them there 

        // }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new CleanWebpackPlugin(public)
       
        
    ]
}