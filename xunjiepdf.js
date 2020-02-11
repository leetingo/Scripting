//https:\/\/app\.xunjiepdf\.com\/api\/v4\/(resumerole|memprofile|virtualactregister)

const path1 = "resumerole";
const path2 = "memprofile";
const path3 = "virtualactregister";

const url = $request.url;
let obj = JSON.parse($response.body);

if(url.indexOf(path1) != -1) {
	obj = {
		"message": "success",
		"userinfo": {
			"nowtime": 1574925918,
			"vip": [
			{
				"id": 9068211,
				"auth_type": 1,
				"auth_value": 4070880000
			}
			]
		},
		"code": 10000
	};
	
}
if(url.indexOf(path2) != -1) {
	let info = {
		"id": 9067247,
		"auth_type": 1,
		"auth_value": 4070880000
	}
	obj.userinfo.vip.splice(0,1, info);
}
if(url.indexOf(path3) != -1) {
	//obj.userinfo.accounttype = 1;
	obj.userinfo.vip = [
			{
				"id": 9319985,
				"auth_type": 1,
				"auth_value": 4070880000
			}
			]
}
$done({body: JSON.stringify(obj)});