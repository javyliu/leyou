angular.module('leyou', ['leyou.service', 'ui.bootstrap']).
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
	when('/games/:id', {
		templateUrl: 'partials/game.html',
		controller: games
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
	interface_url: "http://192.168.0.252:7200/",
	icon_root: "http://m.pipgame.cn/game_logos/",
	games: [{
		id: "14",
		short_name_en: "sy",
		name_cn: "龙斗士",
		src: "img/img_jp_01.png",
		alt: "",
		version: "1.0",
		updated_at: "2013-04-01",
		style: "策略战争",
		size: "7.8M",
		screen: "480x800",
		package_name: "com.pip.mzcity",
		description: "是一款多人在线的网络策略战争类游戏。 游戏将玩家带回西方中世纪一个充满魔幻，梦想的战乱年代。玩家将要扮演一位拥有理想与信念的君主，占据一座城堡要塞募集来自世界大陆四方的英雄强者，在战火纷乱的年代中保护自已的子民，并建立稳定而强大的政权，最终统一大陆，成为一代霸者。",
    download_url: "http://3g.pipgame.com/c?gn=sy&ft=ShengYu_Android_advanced.apk",
		cycles: [{
			id: "1",
			src: "http://m.pipgame.com/cycle_imgs/20130402100729514.jpg"
		},
		{
			id: "1",
			src: "http://m.pipgame.com/cycle_imgs/201304021006584268.jpg"
		},
		{
			id: "1",
			src: "http://m.pipgame.com/cycle_imgs/201304021008123788.jpg"
		}]
	},
	{
		id: "6",
		short_name_en: "sg",
		name_cn: "明珠三国",
		src: "img/img_jp_02.png",
		alt: "",
		version: "1.0",
		updated_at: "2013-04-01",
		style: "策略战争",
		size: "7.8M",
		screen: "480x800",
		package_name: "com.pip.andsanguonew",
		description: "是一款多人在线的网络策略战争类游戏。 游戏将玩家带回西方中世纪一个充满魔幻，梦想的战乱年代。玩家将要扮演一位拥有理想与信念的君主，占据一座城堡要塞募集来自世界大陆四方的英雄强者，在战火纷乱的年代中保护自已的子民，并建立稳定而强大的政权，最终统一大陆，成为一代霸者。",
    download_url: "http://3g.pipgame.com/c?gn=sg&ft=Sanguo_AndroidAuto_New_Large_CGWPIP99.apk",
		cycles: [{
			id: "1",
			src: "http://m.pipgame.com/cycle_imgs/20130402100729514.jpg"
		},
		{
			id: "1",
			src: "http://m.pipgame.com/cycle_imgs/201304021006584268.jpg"
		},
		{
			id: "1",
			src: "http://m.pipgame.com/cycle_imgs/201304021008123788.jpg"
		}]
	},
	{
		id: "13",
		short_name_en: "ss",
		name_cn: "杀神",
		src: "img/img_jp_03.png",
		alt: "",
		version: "1.0",
		updated_at: "2013-04-01",
		style: "策略战争",
		size: "7.8M",
		screen: "480x800",
		package_name: "com.pip.android.ss",
		description: "是一款多人在线的网络策略战争类游戏。 游戏将玩家带回西方中世纪一个充满魔幻，梦想的战乱年代。玩家将要扮演一位拥有理想与信念的君主，占据一座城堡要塞募集来自世界大陆四方的英雄强者，在战火纷乱的年代中保护自已的子民，并建立稳定而强大的政权，最终统一大陆，成为一代霸者。",
    download_url: "http://3g.pipgame.com/c?gn=ss&ft=SS_Android_CGWPIP99.apk",
		cycles: [{
			id: "1",
			src: "http://m.pipgame.com/cycle_imgs/20130402100729514.jpg"
		},
		{
			id: "1",
			src: "http://m.pipgame.com/cycle_imgs/201304021006584268.jpg"
		},
		{
			id: "1",
			src: "http://m.pipgame.com/cycle_imgs/201304021008123788.jpg"
		}]
	},
	{
		id: "10",
		short_name_en: "xy",
		name_cn: "明珠轩辕",
		src: "img/img_jp_04.png",
		alt: "",
		version: "1.0",
		updated_at: "2013-04-01",
		style: "策略战争",
		size: "7.8M",
		screen: "480x800",
		package_name: "shaft.android",
		description: "是一款多人在线的网络策略战争类游戏。 游戏将玩家带回西方中世纪一个充满魔幻，梦想的战乱年代。玩家将要扮演一位拥有理想与信念的君主，占据一座城堡要塞募集来自世界大陆四方的英雄强者，在战火纷乱的年代中保护自已的子民，并建立稳定而强大的政权，最终统一大陆，成为一代霸者。",
    download_url: "http://3g.pipgame.com/c?gn=xy&ft=Shaft_Android_CGWPIP99.apk",
		cycles: [{
			id: "1",
			src: "http://m.pipgame.com/cycle_imgs/20130402100729514.jpg"
		},
		{
			id: "1",
			src: "http://m.pipgame.com/cycle_imgs/201304021006584268.jpg"
		},
		{
			id: "1",
			src: "http://m.pipgame.com/cycle_imgs/201304021008123788.jpg"
		}]
	},
	{
		id: "8",
		short_name_en: "hx",
		name_cn: "明珠幻想",
		src: "img/img_jp_05.png",
		alt: "",
		version: "1.0",
		updated_at: "2013-04-01",
		style: "策略战争",
		size: "7.8M",
		screen: "480x800",
		package_name: "com.pip.itimes",
		description: "是一款多人在线的网络策略战争类游戏。 游戏将玩家带回西方中世纪一个充满魔幻，梦想的战乱年代。玩家将要扮演一位拥有理想与信念的君主，占据一座城堡要塞募集来自世界大陆四方的英雄强者，在战火纷乱的年代中保护自已的子民，并建立稳定而强大的政权，最终统一大陆，成为一代霸者。",
    download_url:"http://3g.pipgame.com/c?gn=hx&ft=FiTAndroidAuto_CGWPIP99.apk",
		cycles: [{
			id: "1",
			src: "http://m.pipgame.com/cycle_imgs/20130402100729514.jpg"
		},
		{
			id: "1",
			src: "http://m.pipgame.com/cycle_imgs/201304021006584268.jpg"
		},
		{
			id: "1",
			src: "http://m.pipgame.com/cycle_imgs/201304021008123788.jpg"
		}]
	},
	{
		id: "9",
		short_name_en: "xyj",
		name_cn: "明珠西游",
		src: "img/img_jp_06.png",
		alt: "",
		version: "5.0",
		updated_at: "2013-04-01",
		style: "策略战争",
		size: "7.8M",
		screen: "480x800",
		package_name: "com.pip.android.xiyou",
		description: "是一款多人在线的网络策略战争类游戏。 游戏将玩家带回西方中世纪一个充满魔幻，梦想的战乱年代。玩家将要扮演一位拥有理想与信念的君主，占据一座城堡要塞募集来自世界大陆四方的英雄强者，在战火纷乱的年代中保护自已的子民，并建立稳定而强大的政权，最终统一大陆，成为一代霸者。",
    download_url: "http://3g.pipgame.com/c?gn=xyj&ft=XiyouAndroid_CGWPIP99.apk",
		cycles: [{
			id: "1",
			src: "http://m.pipgame.com/cycle_imgs/20130402100729514.jpg"
		},
		{
			id: "1",
			src: "http://m.pipgame.com/cycle_imgs/201304021006584268.jpg"
		},
		{
			id: "1",
			src: "http://m.pipgame.com/cycle_imgs/201304021008123788.jpg"
		}]
	},
	{
		id: "2",
		short_name_en: "wl",
		name_cn: "武林",
		src: "img/img_jp_07.png",
		alt: "",
		version: "1.0",
		updated_at: "2013-04-01",
		style: "策略战争",
		size: "7.8M",
		screen: "480x800",
		package_name: "com.pip.wulin2",
		description: "是一款多人在线的网络策略战争类游戏。 游戏将玩家带回西方中世纪一个充满魔幻，梦想的战乱年代。玩家将要扮演一位拥有理想与信念的君主，占据一座城堡要塞募集来自世界大陆四方的英雄强者，在战火纷乱的年代中保护自已的子民，并建立稳定而强大的政权，最终统一大陆，成为一代霸者。",
    download_url: "http://3g.pipgame.com/c?gn=wl&ft=Wulin2_AndroidGeneral_CGWPIP99.apk",
		cycles: [{
			id: "1",
			src: "http://m.pipgame.com/cycle_imgs/20130402100729514.jpg"
		},
		{
			id: "1",
			src: "http://m.pipgame.com/cycle_imgs/201304021006584268.jpg"
		},
		{
			id: "1",
			src: "http://m.pipgame.com/cycle_imgs/201304021008123788.jpg"
		}]
	}],
	zhanhu_icons: [{
		name: "游戏充值",
		img_src: "img/img_zh_01.png",
		link: "#"
	},
	{
		name: "余额查询",
		img_src: "img/img_zh_02.png",
		link: "#"
	},
	{
		name: "设置密保",
		img_src: "img/img_zh_03.png",
		link: "#"
	},
	{
		name: "找回密码",
		img_src: "img/img_zh_04.png",
		link: "#"
	},
	{
		name: "找回密码",
		img_src: "img/img_zh_04.png",
		link: "#/upload"
	}],
	libaos: [{
		id: 1,
		game_id: 15,
		game_name: "圣域之战",
		name: "特权礼包",
		desc: "一盒酥*10",
		points: 100
	},
	{
		id: 2,
		game_id: 6,
		game_name: "明珠三国",
		name: "特权礼包",
		desc: "一盒酥*10",
		points: 100
	},
	{
		id: 3,
		game_id: 12,
		game_name: "杀神",
		name: "特权礼包",
		desc: "一盒酥*10",
		points: 100
	},
	{
		id: 4,
		game_id: 11,
		game_name: "明珠轩辕",
		name: "特权礼包",
		desc: "一盒酥*10",
		points: 100
	},
	{
		id: 5,
		game_id: 10,
		game_name: "明珠幻想",
		name: "特权礼包",
		desc: "一盒酥*10",
		points: 100
	},
	{
		id: 6,
		game_id: 15,
		game_name: "明珠西游",
		name: "特权礼包",
		desc: "一盒酥*10",
		points: 100
	},
	{
		id: 6,
		game_id: 12,
		game_name: "武林",
		name: "特权礼包",
		desc: "一盒酥*10",
		points: 100
	},
	{
		id: 6,
		game_id: 9,
		game_name: "明珠西游",
		name: "特权礼包",
		desc: "一盒酥*10",
		points: 100
	},
	{
		id: 6,
		game_id: 8,
		game_name: "武林",
		name: "特权礼包",
		desc: "一盒酥*10",
		points: 100
	}],

}).factory("notify", ['$window', function(win) {
	var msgs = [];
	return function(msg) {
		msgs.push(msg);
		if (msgs.length == 3) {
			win.alert(msgs.join("\n"));
			msgs = [];
		}
	};

}]).factory("plugins", ['$window', function($window) {
	var actions = {};
	actions.detect_package = function(package_name,success, fail) {
		var fail = fail || function(res) {
			alert(res)
		}
		console.log(package_name);
		cordova.exec(success, fail, "Tools", "detect_package", package_name);
	}
  actions.open_game = function(package_name,success,fail){
		var fail = fail || function(res) {
			alert(res)
		}
		console.log("open"+package_name);
		cordova.exec(success, fail, "Tools", "open_game", [package_name]);

  }
  actions.download = function(app,onprogress,success,fail){
    var game = app;
	  var fileTransfer = new FileTransfer();
		var uri = encodeURI(game.download_url);
		var filePath = "/mnt/sdcard/download/" + game.package_name + ".apk";
    //防止用户重启点击下载
    //game.not_first_download = true;
		//game.start_download = true;
		fileTransfer.onprogress = onprogress;

		fileTransfer.download(uri, filePath, success,fail,false, {});
	}
  //actions.download = function(url,package_name,$scope){
  //  var fileTransfer = new FileTransfer();
  //  var uri = encodeURI(url);
  //  var filePath = "/mnt/sdcard/download/"+package_name+".apk";
  //  //$scope.start_download = true;
  //  fileTransfer.onprogress = function(progressEvent) {
  //    if (progressEvent.lengthComputable) {
  //      $scope.complete = parseInt(progressEvent.loaded*100/progressEvent.total);
  //    } else {
  //      alert("不支持状态显示");
  //      //loadingStatus.increment();
  //    }
  //  };

  //  fileTransfer.download( uri, filePath,
  //      function(entry) {
  //        cordova.exec(null, null, "Tools", "install_package", [entry.fullPath]);
  //        $scope.start_download = false;
  //      },
  //      function(error) {
  //        alert("下载失败，请重新再试!" + error.code);
  //      },
  //      false, { }
  //      );
  //}
	return actions;

}

]);

