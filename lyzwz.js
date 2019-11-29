//https:\/\/app\.xunjiepdf\.com\/api\/v4\/(resumerole|memprofile)

const path1 = "resumerole";
const path2 = "memprofile";

const url = $request.url;

if(url.indexOf(path1) != -1) {
let obj = JSON.parse($response.body);
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
$done({body: JSON.stringify(obj)});
}
if(url.indexOf(path2) != -1) {
let obj = JSON.parse($response.body);
let info = {
	"id": 9067247,
	"auth_type": 1,
	"auth_value": 4070880000
}
obj.userinfo.vip.splice(0,1, info);
$done({body: JSON.stringify(obj)});
}