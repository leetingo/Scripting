//https:\/\/kz\.sync163\.com\/api_v2\/user\/(pro-jobs-count|info)

const path1 = "pro-jobs-count";
const path2 = "info";

const url = $request.url;
let obj = JSON.parse($response.body);

if(url.indexOf(path1) != -1) {
	obj.total_pro_jobs_count = 99;
	obj.available_pro_jobs_count = 99;
	obj.total_invite_count = 99;
	obj.available_invite_count =99;
}

if(url.indexOf(path2) != -1) {
	obj.userInfo.experiencer = 0;
	obj.userInfo.vip = 1;
	obj.userInfo.vip_expired_at = "2099-11-11";
	obj.userInfo.vip_expired = false;
	obj.userInfo.vip_if_gift = false;
}

$done({body: JSON.stringify(obj)});