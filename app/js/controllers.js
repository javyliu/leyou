'use strict';
var home=["$rootScope","$scope",function($scope,$rootScope){ 
  $scope.current = function(ctrl){
      console.log($rootScope.name);
      return  ctrl == $rootScope.name ? "current" : "";
    }
}];

/* Controllers */
function huodong($scope,$rootScope){
  $rootScope.name = "huodong";
  
}
function jingping($scope,$timeout,$rootScope){
  $rootScope.name = "jingping";
  $scope.version = "1.0";
  $timeout(function(){
    console.log("change to 2.0")
    $scope.version = "2.0";
  },2000);
  
}
var luntan=["$scope","$rootScope",function($scope,$rootScope){
  $rootScope.name = "luntan";
  alert("asdfasdf");
}];
function zhanhu($scope,$rootScope){
  $rootScope.name = "zhanhu";
  
}

function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
