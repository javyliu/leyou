angular.module('leyou', []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/huodong', {templateUrl: 'partials/huodong.html', controller: huodong}).
    when('/jingping', {templateUrl: 'partials/jingping.html', controller: jingping}).
    when('/luntan', {templateUrl: 'partials/luntan.html', controller: luntan}).
    when('/zhanhu', {templateUrl: 'partials/zhanhu.html', controller: zhanhu}).
    otherwise({redirectTo: '/jingping'});
  }]);

var menu = [
{href:"#/huodong", :img_src:"img/hd.png",alt:"活动",color:"#399EFF"}
{href:"#/jingping",:img_src:"img/jp.png",alt:"精品",color:"#FF3863"}
{href:"#/luntan",  :img_src:"img/lt.png",alt:"论坛",color:"#7BAA08"}
{href:"#/zhanhu",  :img_src:"img/zh.png",alt:"账户",color:"#EFA210"}

];
