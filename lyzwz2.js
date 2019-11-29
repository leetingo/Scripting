let obj = JSON.parse($response.body);
let info = {
	"id": 9067247,
	"auth_type": 1,
	"auth_value": 4070880000
}
obj.userinfo.vip.splice(0,1, info);
$done({body: JSON.stringify(obj)});