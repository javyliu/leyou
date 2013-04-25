/* Controllers */
var jingping = ["$scope", "common", function($scope, common) {
	$scope.title = "乐游互动中心";
	$scope.menu = common.menu;
  //window.applicationCache.update();
  //alert(window.applicationCache.status);
  //if(window.applicationCache.status == 4){
  //  window.applicationCache.swapCache();
  //  window.location.reload();
  //}
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
	game = $filter('filter')(common.games, {
		id: params.id
	},
	true)[0];
  if(!game.display_text){
    game.display_text = "免费下载";
  }
  console.log($scope);

  game.install = function(scope){
      var _this = this;
      var path = "/mnt/sdcard/download/" + _this.package_name + ".apk"
        console.log("----------------install package");
			cordova.exec(function(res) {
				//安装完成
        console.log(res);
        _this.display_text = "打开游戏";
        _this.game_state = "1";
        _this.complete=0;
				console.log("-------"+_this+"---------------install ok");
			}, function(res){
        alert(res);
        _this.game_state="0";
        _this.complete=0;
        _this.display_text="重新下载";
      }, "Tools", "install_package", [path]);
      $scope.$apply();
  }

  //检测程序，设备准备好后执行，用于检测是否安装了程序,应做成服务(need_update)
  var detect = function() {
    //如果正在下载，则不做检测
    if(game.game_state == "4"){
      return;
    }
    console.log("检测程序")
    plugins.detect_package([game.package_name], function(res) {
      if (res[game.package_name].installed == "1") {
        game.display_text = "开始游戏";
        //game.game_state: 0未安装,1已安装，2可更新,3已下载，未安装
        game.game_state = "1";
        if (res[game.package_name].version < game.version) {
          game.display_text = "更新游戏";
          game.game_state = "2";
        }
      }else if(game.game_state == "3"){
        //如果下载完未完装，从其它页面返回该页
        game.display_text = "点击安装"
      }else if(game.game_state == "4"){
        //如果从其它页面返回
        game.display_text = "下载中..."
      }else{
        game.display_text = "免费下载";
      }
    },
    null);
  }
  //game.not_first_download = false;
	document.addEventListener("deviceready", on_device_ready, false);
	//document.addEventListener("onbeforeunload", function(){
  //  if(confirm("离开该页将会中断下载，确定要离开么？")){
  //    game.fileTransfer && game.fileTransfer.abort();
  //  }
  //}, false);
	console.log(game.package_name);
	function on_device_ready() {
    detect();
   // var on_resume = function(){
   //   detect();
   //   $scope.$apply();
   // }
		//document.addEventListener("resume", on_resume, false);

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
        plugins.download(game,download_progress,download_success,download_error)
				//download(game,$scope);
			} else {
				plugins.open_game(game.package_name, function(res) {
					console.log("i open the game" + game.short_name_en)
				},
				null);
				console.log("打开游戏");
			}
      break;
    case "3":
      //can install the package
      game.install();

      break;
    case "4":
      //此时正在下载,点击无效
      break;
    default:
      //默认情况下点击下载
      //download(game,$scope);
      $scope.game.display_text = "下载中...";
      $scope.game.game_state = "4";
      plugins.download(game,download_progress,download_success,download_error)
			break;
		}

	}
  var download_success = function(entry) {
        //游戏下载完成，调用安装程序
        //game.start_download = false;
        $scope.game.display_text = "点击安装";
        $scope.game.game_state = "3";
        $scope.game.install();
      }
  var download_error=function(error) {
        $scope.game.display_text = "重新下载"
        $scope.game.game_state = "0";
        $scope.game.complete=0;
        //$scope.$apply();
        var msgs="下载失败"
        if(error.code == 3){
          msgs = msgs + ",网络连接失败！";
        }else if(error.code == 2){
          msgs = msgs + ",无效地址！";
        }else{
          msgs = msgs + ",请确定sd卡是否可用！";
        }
        alert(msgs);
   }

  var download_progress = function(progressEvent) {
			if (progressEvent.lengthComputable) {
				$scope.game.complete = parseInt(progressEvent.loaded * 100 / progressEvent.total);
				$scope.$apply();
			} else {
				alert("不支持状态显示");
				//loadingStatus.increment();
			}
		}



	//$scope.start_download = true;
	var download = function(app,$scope) {
    var game = app;
	  var fileTransfer = new FileTransfer();
		var uri = encodeURI(game.download_url);
		var filePath = "/mnt/sdcard/download/" + game.package_name + ".apk";
    game.display_text = "下载中...";
    game.game_state = "4";
    //防止用户重启点击下载
    //game.not_first_download = true;
		//game.start_download = true;
		fileTransfer.onprogress = function(progressEvent) {
			if (progressEvent.lengthComputable) {
				game.complete = parseInt(progressEvent.loaded * 100 / progressEvent.total);
				$scope.$apply();
			} else {
				alert("不支持状态显示");
				//loadingStatus.increment();
			}
		};

		fileTransfer.download(uri, filePath, function(entry) {
      //游戏下载完成，调用安装程序
			//game.start_download = false;
			game.display_text = "点击安装";
			game.game_state = "3";
      game.install();
		},
		function(error) {
      game.display_text = "重新下载"
			game.game_state = "0";
      game.complete=0;
      $scope.$apply();
      var msgs="下载失败"
      if(error.code == 3){
        msgs = msgs + ",网络连接失败！";
      }else if(error.code == 2){
        msgs = msgs + ",无效地址！";
      }else{
        msgs = msgs + ",请确定sd卡是否可用！";
      }
			alert(msgs);

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

var upload_file = ["$scope", "common", "$timeout",'$templateCache', function($scope, common, $timeout,$templateCache) {
	$scope.title = "上传文件";
  $scope.tmpcache = $templateCache;
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

