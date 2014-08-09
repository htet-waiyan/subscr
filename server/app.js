var express=require('express');
var http=require('http');
var setting=require('./config/setting.js');

var app=express();

//app level configuration
var config=require('./config/config.js')(app);
var router=require('./router/router.js')(app,express);

http.createServer(app).listen(setting.port,function(){
  console.log("Server Initialized");
});
