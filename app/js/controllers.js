/* Controllers */
var jingping = ["$scope", "common", function($scope, common) {
	$scope.title = "乐游互动中心";
	$scope.menu = common.menu;
}];

var huodong = ["$scope", "notify", function($scope, notify) {
	$scope.title = "活动";
	$scope.msg = notify;
}];
var luntan = ["$scope", function($scope) {
	$scope.title = "论坛";
}];
var zhanhu = ["$scope", function($scope) {
	$scope.title = "账户";
}];

