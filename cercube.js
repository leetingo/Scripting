let obj = JSON.parse($response.body);
obj.subscription = {
    "externalTransactionId": "CA-TWEET-PROMO",
    "active": true,
    "startDate": "2019-11-28T09:40:07.652Z",
    "endDate": "2099-12-05T09:40:07.651Z",
    "internalTransactionId": "T77UR4YPHTXRFWO"
  };
$done({body: JSON.stringify(obj)});