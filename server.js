const path = require('path')
const express = require('express')
const app = express()
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const config = require('./webpack.config')

const isDevloping = process.env.NODE_ENV !=='production'
const port = isDevloping ? 8080 : process.env.PORT



if(isDevloping){
    const compiler = webpack(config)
    const middleware = webpackMiddleware(compiler,{
        entry:{
           app:["./src/app/index.js"]
        //    vendor:['pixi','phaser','p2']
        },
        publicPath:config.output.publicPath,
        contentBase:'src',
        headers:{"X-Custom-Header":"yes"},
       
        stats:{
            colors:true,
            hash:false,
            timings:true,
            chunks:true,
            chunkModules:false,
            modules:false,
            
        }
    });
    
    app.use(middleware)
    app.use(webpackHotMiddleware(compiler))
    app.get('*',function response(req,res){
        res.write(middleware.fileSystem.readFileSync(path.join(__dirname,'public/assets/html/index.html')))
    })
}else{
    app.use(express.static(__dirname + '/public/assets'))
    app.get('*',function response(req,res){
        res.sendFile(path.join(__dirname,'public/assets/html/index.html'))
    })

}

    
    
    

app.listen(port,'0.0.0.0',function onStart(err){
    if(err){
        console.log(err)
    }
    console.log('server is served on port 8080',port)
});