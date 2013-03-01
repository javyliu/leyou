'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/huodong', {templateUrl: 'partials/huodong.html', controller: huodong});
    $routeProvider.when('/jingping', {templateUrl: 'partials/jingping.html', controller: jingping});
    $routeProvider.when('/luntan', {templateUrl: 'partials/luntan.html', controller: luntan});
    $routeProvider.when('/zhanhu', {templateUrl: 'partials/zhanhu.html', controller: zhanhu});
    $routeProvider.otherwise({redirectTo: '/jingping'});
  }]);
