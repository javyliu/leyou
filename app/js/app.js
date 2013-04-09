angular.module('leyou', ['leyou.service']).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/huodong', {
		templateUrl: 'partials/huodong.html'
		,controller: huodong
	}).
	when('/jingping', {
		templateUrl: 'partials/jingping.html'
		,controller: jingping
	}).
	when('/luntan', {
		templateUrl: 'partials/luntan.html'
		,controller: luntan
	}).
	when('/zhanhu', {
		templateUrl: 'partials/zhanhu.html'
		,controller: zhanhu
	}).
	otherwise({
		redirectTo: '/jingping'
	});
}]);

angular.module('leyou.service',[]).value('common', {
	menu: [{
		href: "#/huodong"
		,img_src: "img/hd.png"
		,alt: "活动"
		,color: "#399EFF"
	}, {
		href: "#/jingping"
		,img_src: "img/jp.png"
		,alt: "精品"
		,color: "#FF3863"
	}, {
		href: "#/luntan"
		,img_src: "img/lt.png"
		,alt: "论坛"
		,color: "#7BAA08"
	}, {
		href: "#/zhanhu"
		,img_src: "img/zh.png"
		,alt: "账户"
		,color: "#EFA210"
	}]
	,logo: "img/logo.png"
}).factory("notify", ['$window', function(win) {
	var msgs = [];
	return function(msg) {
		msgs.push(msg);
		if (msgs.length == 3) {
			win.alert(msgs.join("\n"));
			msgs = [];
		}
	};

}]);


