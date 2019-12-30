var url = $request.url;

if ($request.headers) {

    if (url.indexOf('video') != -1) {
      var header = $request.headers['Cookie'];
      var UserAgent = $request.headers['User-Agent'];
      $prefs.setValueForKey(header,"CookieDHF");
      $prefs.setValueForKey(UserAgent,"UADHF");
  }

    if (url.indexOf('token') != -1) {
        var reSn = /sn=(\d+)/;
        var sn = reSn.exec(url)[1];
        var EndAd = {
        url: 'https://api.gamer.com.tw/mobile_app/anime/v1/stat_ad.php?ad=end&schedule=0&sn=' + sn,
		method = 'GET',
        headers: {
        "Cookie": $prefs.valueForKey("CookieDHF"),
        "User-Agent": $prefs.valueForKey("UADHF"),
            }
          }
            $task.fetch(EndAd, function(error, response, data) {
            if (error) {
                console.log(error)
                $done()
            } else {
              if (response.status == 200) {
                    $task.fetch(EndAd, function(error, response, data) {
                    if (error) {
                    console.log(error)
                    $done()
                  } else {
                    if (response.status == 200) {
                    $task.fetch(EndAd, function(error, response, data) {
                    if (error) {
                    console.log(error)
                    $done()
                  } else {
                    //$notification.post("发送结束AD3成功", sn, "token请求");
                  }
                });
              }
            }
          });
        }
      }
    });
  }
$done({})
} else {
    	    var body = $response.body;
    		  var obj = JSON.parse(body);
    	      if (url.indexOf('video') != -1){
    		       var snn = obj['video']['video_sn']
               var StartAd = {
               url: 'https://api.gamer.com.tw/mobile_app/anime/v1/stat_ad.php?ad=&schedule=0&sn=' + snn,
			   method = 'GET',
               headers: {
               "Cookie": $prefs.valueForKey("CookieDHF"),
               "User-Agent": $prefs.valueForKey("UADHF"),
            }
        }
          $task.fetch(StartAd, function(error, response, data) {
            if (error) {
                console.log(error)
                $done()
            } else {
              if (response.status == 200) {
                  $task.fetch(StartAd, function(error, response, data) {
                    if (error) {
                    console.log(error)
                    $done()
                    } else {
                        if (response.status == 200) {
                          $task.fetch(StartAd, function(error, response, data) {
                              if (error) {
                               console.log(error)
                                 $done()
                                } else {
                               // $notification.post("发送开始AD3成功", snn, "Video响应");
setTimeout(function(){$done({})}, 500)
                              }
                          });
                        }
                      }
                  });
                }
              }
          });
  //  $done({})
  }
  if (url.indexOf('token') != -1){
      obj['ad']['minor'] = [];
      obj['ad']['major'] = [];
      body = JSON.stringify(obj)
      setTimeout(function(){$done({body})}, 1000)
  }
}