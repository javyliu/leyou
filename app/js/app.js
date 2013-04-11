angular.module('leyou', ['leyou.service']).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/huodong', {
    templateUrl: 'partials/huodong.html',
		controller: huodong
	}).
	when('/huodong_zs', {
		templateUrl: 'partials/huodong_zs.html',
		controller: huodongZs
	}).
	when('/huodong_jl', {
		templateUrl: 'partials/huodong_jl.html',
		controller: huodongJl
	}).
	when('/jingping', {
		templateUrl: 'partials/jingping.html',
		controller: jingping
	}).
	when('/luntan', {
		templateUrl: 'partials/luntan.html',
		controller: luntan
	}).
	when('/zhanhu', {
		templateUrl: 'partials/zhanhu.html',
		controller: zhanhu
	}).
	when('/upload', {
		templateUrl: 'partials/upload.html',
		controller: upload_file
	}).
	otherwise({
		redirectTo: '/jingping'
	});
}]);

angular.module('leyou.service', []).value('common', {
	menu: [{
		href: "#/huodong",
		img_src: "img/hd.png",
		alt: "活动",
		color: "#399EFF"
	},
	{
		href: "#/jingping",
		img_src: "img/jp.png",
		alt: "精品",
		color: "#FF3863"
	},
	{
		href: "#/luntan",
		img_src: "img/lt.png",
		alt: "论坛",
		color: "#7BAA08"
	},
	{
		href: "#/zhanhu",
		img_src: "img/zh.png",
		alt: "账户",
		color: "#EFA210"
	}],
	logo: "img/logo.png",
  interface_url:"http://192.168.0.252:7200/",
  games:[
    {id:14 , short_name_en:"sy", name_cn:"龙斗士"  ,src:"img/img_jp_01.png",alt:"",package_name:"com.pip.mzcity"},
    {id:6  , short_name_en:"sg", name_cn:"明珠三国",src:"img/img_jp_02.png",alt:"",package_name:"com.pip.CCAAGB05"},
    {id:13 , short_name_en:"ss", name_cn:"杀神"    ,src:"img/img_jp_03.png",alt:"",package_name:"com.pip.ss"},
    {id:10 , short_name_en:"xy", name_cn:"明珠轩辕",src:"img/img_jp_04.png",alt:"",package_name:"shaft.android"},
    {id:8  , short_name_en:"hx", name_cn:"明珠幻想",src:"img/img_jp_05.png",alt:"",package_name:"com.pip.itimes"},
    {id:9  , short_name_en:"xyj",name_cn:"明珠西游",src:"img/img_jp_06.png",alt:"",package_name:"com.pip.android.xiyou"},
    {id:2  , short_name_en:"wl", name_cn:"武林"    ,src:"img/img_jp_07.png",alt:"",package_name:"com.pip.wulin2"}
    ],
    zhanhu_icons:[
    {name: "游戏充值",img_src:"img/img_zh_01.png",link:"#"},
    {name: "余额查询",img_src:"img/img_zh_02.png",link:"#"},
    {name:"设置密保",img_src:"img/img_zh_03.png",link:"#"},
    {name:"找回密码",img_src:"img/img_zh_04.png",link:"#"},
    {name:"找回密码",img_src:"img/img_zh_04.png",link:"#/upload"}
    ],
  libaos:[
    {id:1,game_id:15,game_name:"圣域之战",name:"特权礼包",desc:"一盒酥*10",points:100},
    {id:2,game_id: 6,game_name:"明珠三国",name:"特权礼包",desc:"一盒酥*10",points:100},
    {id:3,game_id:12,game_name:"杀神"    ,name:"特权礼包",desc:"一盒酥*10",points:100},
    {id:4,game_id:11,game_name:"明珠轩辕",name:"特权礼包",desc:"一盒酥*10",points:100},
    {id:5,game_id:10,game_name:"明珠幻想",name:"特权礼包",desc:"一盒酥*10",points:100},
    {id:6,game_id:15,game_name:"明珠西游",name:"特权礼包",desc:"一盒酥*10",points:100},
    {id:6,game_id:12,game_name:"武林"    ,name:"特权礼包",desc:"一盒酥*10",points:100},
    {id:6,game_id:9 ,game_name:"明珠西游",name:"特权礼包",desc:"一盒酥*10",points:100},
    {id:6,game_id:8 ,game_name:"武林"    ,name:"特权礼包",desc:"一盒酥*10",points:100}
    ],


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

