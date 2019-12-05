let obj = JSON.parse($response.body);
obj = {
	"errno": 0,
	"errmsg": "OK",
	"data": {
		"userId": "11835468",
		"nick": "小火箭i0cv1m",
		"score": "114514",
		"expireTime": "4070880000",
		"lastSignTime": "1575515952",
		"lastBuyTime": "1575516435",
		"lastRewardTime": "0",
		"signDays": "114514",
		"isVip": true
	}
};
$done({body: JSON.stringify(obj)});
