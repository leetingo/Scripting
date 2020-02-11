const path1 = "/download/info";
const path2 = "/user";
const path3 = "/free";

const url = $request.url;
let obj = JSON.parse($response.body);

if (url.indexOf(path1) != -1 && obj.is_allow == false) {
	obj.pay_detail.free_download_times_remain = 6;
}
if (url.indexOf(path2) != -1) {
	obj.user.biz.xy_vip_expire=4070880000;
	obj.user.biz.is_xy_vip = true;
}
if (url.indexOf(path3) != -1) {
	obj.free_download_times_remain = 6;
}
$done({body: JSON.stringify(obj)});
