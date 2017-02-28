'use strict';
var app = angular.module('htmelvisTemplateApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'duScroll',
  'duParallax'
]);

app.config(['$routeProvider',function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/blog/', {
      templateUrl: 'views/blog.html',
      controller: 'BlogCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
