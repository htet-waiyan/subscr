/*
    configuration for router
 */
subscr.config(['$routeProvider',function($routeProvider){
  //if access home page, return index template
  $routeProvider.when('/',{
    templateUrl:'/index',
    controller:'HomeController'
  });
}]);
