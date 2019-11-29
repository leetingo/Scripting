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