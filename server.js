const express = require("express");
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');




const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);



app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);



app.listen(process.env.PORT || 3000, function() {

    console.log("connected server")

});