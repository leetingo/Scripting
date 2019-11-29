var obj = JSON.parse($response.body);
obj.data.subscription_type = "premium";
obj.data.subscription_expires = "2099-1-1";
$done({body: JSON.stringify(obj)});