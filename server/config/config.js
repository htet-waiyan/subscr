/*
  Application Level Configuraiton Defines Here
  such as Database, Logging, i18n etc...
 */
var common=require('./../util/common.js');
var express=require('express');

module.exports=function(app){
  //express.use(common.root+'/bower_components/**');
  app.use('/public',express.static(common.root+'/public'));
  app.use('/bower_components',express.static(common.root+'/bower_components'));
};
