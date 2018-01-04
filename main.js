/**
 * Created by loukaine on 04/01/18.
 */
var http = require('http');
var express = require('express');
var app = express();

var http = require('http').Server(app);

app.get('/hello', function (req, res) {
    res.end('Salut');
});

http.listen(8080, ()=>{
    console.log("server started");

});

