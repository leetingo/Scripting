//https:\/\/biz\.caiyunapp\.com\/v2\/user\?app_name=weather
let obj = JSON.parse($response.body)
obj.result.xy_vip_expire = 4070880000
obj.result.is_vip = true
obj.result.vip_expired_at = 4070880000
obj.result.is_xy_vip = true
$done({body: JSON.stringify(obj)})