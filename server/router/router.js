var common=require('./../util/common.js');
var express=require('express');

module.exports=function(app){
  var router=express.Router();

  router.use(function(req,res,next){
    next();
  });

  //home page/template for home,about,login....
  router.get('/subscr',function(req,res){
    //implements for home page
    res.sendfile(common.root+'/public/home/template/common.html');
  });

  router.get('/subscr/index',function(req,res){
    //implements for home page
    res.sendfile(common.root+'/public/home/index.html');
  });

  //login page
  router.get('/subscr/login',function(req,res){
    //implements for login page
    res.sendfile(common.root+'/public/login.html');
  });

  router.get('*',function(req,res){
    //404
    res.statusCode=404;
    res.sendfile(common.root+'/public/404.html');
  });

  app.use('/',router);
};
