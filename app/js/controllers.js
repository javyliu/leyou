/* Controllers */
var jingping = ["$scope", "common", function($scope, common) {
	$scope.title = "乐游互动中心";
	$scope.menu = common.menu;
	var games = common.games;
	//$scope.detail = function(game_name,package_name,game_id){
	//PipGameBoxNew.v_openDetail(game_name,package_name,game_id);
	//}
	if (games && games.length > 0) {
		$scope.top_game = games[0];
		$scope.left_games = [];
		$scope.right_games = [];

		for (var i = 1, len = games.length; i < len; i++) {
			if (i % 2 == 0) {
				$scope.left_games.push(games[i]);
			} else {
				$scope.right_games.push(games[i]);
			}
		}
	}
}];

var huodong = ["$scope", "common", "$http", function($scope, common, $http) {
	$scope.title = "活动";
	$scope.libaos = common.libaos;
}];
var huodongZs = ["$scope", "common", "$http", function($scope, common, $http) {
	$scope.title = "活动助手";
	$http.jsonp(common.interface_url + "leyou/huodong_zs.json?callback=JSON_CALLBACK").success(function(res, status) {
		$scope.huodongs = res;
	});
}];
var huodongJl = ["$scope", "common", '$http', function($scope, common, $http) {
	$scope.title = "兑换记录";
	$http.jsonp(common.interface_url + "leyou/huodong_jl.json?callback=JSON_CALLBACK&user_id=183746").success(function(res, status) {
		$scope.histories = res;
	});
}];
var luntan = ["$scope", "common", "$http", function($scope, common, $http) {
	$scope.title = "论坛";
	$scope.menu = common.menu;
	$scope.games = common.games;
	$scope.icon_url = common.icon_root;
	$http.jsonp(common.interface_url + "leyou/news/bulletins.mob?callback=JSON_CALLBACK&cat_id=1").success(function(res, status) {
		$scope.bulletins = res;
	});
}];
var zhanhu = ["$scope", "common", function($scope, common) {
	$scope.title = "账户";
	$scope.menu = common.menu;
	$scope.icons = common.zhanhu_icons;
}];
//游戏详情控制器
var games = ["$scope", "common", "$routeParams", "$filter", "plugins", function($scope, common, params, $filter, plugins) {
	$scope.title = "游戏详情";
	$scope.display_text = "免费下载";
	game = $filter('filter')(common.games, {
		id: params.id
	},
	true)[0];
  game.not_first_download = false;
	document.addEventListener("deviceready", on_device_ready, false);
	console.log(game.package_name);
	function on_device_ready() {
		var detect = function() {
      console.log("检测程序")
			plugins.detect_package([game.package_name], function(res) {
				if (res[game.package_name].installed == "1") {
					$scope.display_text = "开始游戏";
					//game.game_state: 0未安装,1已安装，2可更新
					game.game_state = "1";
					if (res[game.package_name].version < game.version) {
						$scope.display_text = "更新游戏";
						game.game_state = "2";
					}
				}else{
					$scope.display_text = "免费下载";
        }
			},
			null);

		}
    detect();
    var on_resume = function(){
      detect();
      $scope.$apply();
    }
		document.addEventListener("resume", on_resume, false);

	}

	$scope.open_game = function(ev) {
		switch (game.game_state) {
		case "1":
			plugins.open_game(game.package_name, function() {
				console.log("i open the game" + game.short_name_en)
			})
			console.log("open game");
			break;
		case "2":
			console.log("update game");
			if (confirm("游戏可更新，要更新游戏么？")) {
				console.log("更新游戏");
				download();
			} else {
				plugins.open_game(game.package_name, function(res) {
					console.log("i open the game" + game.short_name_en)
				},
				null);
				console.log("打开游戏");
			}
      break;
    default:
      console.log(!game.not_first_download);
      if(!game.not_first_download){
        $scope.display_text = "下载中...";
        game.not_first_download = true;
        download();
      }
			break;
		}

	}

	//$scope.start_download = true;
	var download = function() {
		var fileTransfer = new FileTransfer();
		var uri = encodeURI(game.download_url);
		var filePath = "/mnt/sdcard/download/" + game.package_name + ".apk";
		$scope.start_download = true;
		fileTransfer.onprogress = function(progressEvent) {
			if (progressEvent.lengthComputable) {
				$scope.complete = parseInt(progressEvent.loaded * 100 / progressEvent.total);
				$scope.$apply();
			} else {
				alert("不支持状态显示");
				//loadingStatus.increment();
			}
		};

		fileTransfer.download(uri, filePath, function(entry) {
			cordova.exec(function(res) {
				//game.game_state="1";
				console.log("----------------------install ok");
			},
			null, "Tools", "install_package", [entry.fullPath]);
			$scope.start_download = false;
		},
		function(error) {
			alert("下载失败，请重新再试!" + error.code);
		},
		false, {});
	}
	$scope.icon_url = common.icon_root + "iphone" + params.id + ".png";
	$scope.game = game;
	$scope.menu = common.menu;
	$scope.icons = common.zhanhu_icons;
}];
var download_file = ["$scope", "common", function($scope, common) {
	$scope.title = "下载文件";
	$scope.menu = common.menu;
	$scope.icons = common.zhanhu_icons;
}];

var upload_file = ["$scope", "common", "$timeout", function($scope, common, $timeout) {
	$scope.title = "上传文件";
	$scope.detail = function(package_name) {
		alert("test");
		PipGameBoxNew.v_openGame(package_name);
		return false;
	}

	//test timeout data-binding"
	var stop;
	var add = function() {
		stop = $timeout(function() {
			$scope.title += "0";
			console.log($scope.title);
			add();

		},
		1000);
	}
	//add();
	$scope.menu = common.menu;
	$scope.icons = common.zhanhu_icons;
	document.addEventListener("deviceready", onDeviceReady, false);
	var pictureSource, destinationType;
	function onDeviceReady() {
		pictureSource = navigator.camera.PictureSourceType;
		destinationType = navigator.camera.DestinationType;
		$scope.device_id = device.uuid
		$scope.cordova = device.cordova
		$scope.name = device.name
		$scope.platform = device.platform
		$scope.version = device.version
		$scope.type = navigator.network.connection.type
	}

	function onPhotoDataSuccess() {
		alert("ok");
	}
	function onFail() {
		alert("false");
	}
	$scope.game = common.games[0];

	$scope.echo = function(str) {
		cordova.exec(function(res) {
			alert(res.package_name)
		},
		function(err) {
			alert(err);
		},
		"Tools", "detect_package", [str]);
	}
	$scope.download = function(url) {
		cordova.exec(function(res) {
			loaded(res.progress);
		},
		function(err) {
			alert(err);
		},
		"Downloader", "download", [url, {
			overwrite: true,
			fileName: "Sanguo_AndroidAuto_New_CGWPIP99.apk"
		}]);
	}

	$scope.data = {
		total: 0,
		completed: 0
	};
	$scope.total = 0;
	var i = 0
	var loaded = function(data) {
		$scope.data.completed = data;
		$scope.complete = data;
		$scope.$apply();
	}
	//  setInterval(function(){
	//    loaded(i++);
	//  },1000)
	$scope.download1 = function(url) {
		var fileTransfer = new FileTransfer();
		var uri = encodeURI(url);
		var filePath = "/mnt/sdcard/download/test.apk";
		fileTransfer.onprogress = function(progressEvent) {
			if (progressEvent.lengthComputable) {
				//$scope.complete = progressEvent.loaded;
				//$scope.total = progressEvent.total;
				loaded(parseInt(progressEvent.loaded * 100 / progressEvent.total));
				//loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
			} else {
				loaded(i++);
				//loadingStatus.increment();
			}
		};

		fileTransfer.download(
		uri, filePath, function(entry) {
			alert("download complete: " + entry.fullPath);
			alert($scope.complete);
		},
		function(error) {
			alert("download error source " + error.source);
			alert("download error target " + error.target);
			alert("upload error code" + error.code);
		},
		false, {});
	}

	$scope.fail = onFail;

	$scope.capturePhoto = function() {
		navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
			quality: 50,
			destinationType: destinationType.DATA_URL
		});
	}
}];

