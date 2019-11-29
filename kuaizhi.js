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
	obj.userinfo.experiencer = 0;
	obj.userinfo.vip = 1;
	obj.userinfo.vip_expired_at = 4070880000;
	obj.userinfo.vip_expired = false;
	obj.userinfo.vip_if_gift = false;
}

$done({body: JSON.stringify(obj)});