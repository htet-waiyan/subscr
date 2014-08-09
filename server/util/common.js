var path=require('path');

module.exports=(function(){
  var serverPath='/server';

  var root=(function(){
    return __dirname.substring(0,__dirname.indexOf(serverPath));
  })();

  return {
    root:root
  };
})();
