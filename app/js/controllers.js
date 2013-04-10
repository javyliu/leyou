/* Controllers */
var jingping = ["$scope", "common", function($scope, common) {
	$scope.title = "乐游互动中心";
	$scope.menu = common.menu;
  var games = common.games;
 if(games && games.length > 0){
  $scope.top_game = games[0];
  $scope.left_games = [];
  $scope.right_games = [];

  for(var i=1;i<games.length;i++){
    if(i%2 == 0){
      $scope.left_games.push(games[i]);
    }else{
      $scope.right_games.push(games[i]);
    }
  }
 }
}];

var huodong = ["$scope", "common","$http", function($scope, common,$http) {
	$scope.title = "活动";
  $scope.libaos = common.libaos;
}];
var huodongZs = ["$scope", "common","$http", function($scope, common,$http) {
	$scope.title = "活动助手";
  $http.jsonp(common.interface_url+"leyou/huodong_zs.json?callback=JSON_CALLBACK").success(function(res,status){
    $scope.huodongs = res;
  });
}];
var huodongJl = ["$scope", "common",'$http', function($scope, common,$http) {
	$scope.title = "兑换记录";
  $http.jsonp(common.interface_url+"leyou/huodong_jl.json?callback=JSON_CALLBACK&user_id=183746").success(function(res,status){
    $scope.histories = res;
  });
}];
var luntan = ["$scope","common","$http", function($scope,common,$http) {
	$scope.title = "论坛";
	$scope.menu = common.menu;
	$scope.games = common.games;
  $http.jsonp(common.interface_url+"leyou/news/bulletins.mob?callback=JSON_CALLBACK&cat_id=1").success(function(res,status){
    $scope.bulletins = res;
  });
}];
var zhanhu = ["$scope","common", function($scope,common) {
	$scope.title = "账户";
	$scope.menu = common.menu;
	$scope.icons = common.zhanhu_icons;
}];

