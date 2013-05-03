var app = angular.module('plunker', ['ngMobile']);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  $scope.onTest = function() {
    $scope.test = new Date().getTime();
  };
});

