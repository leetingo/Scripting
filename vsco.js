let body = $response.body;
let obj = JSON.parse(body);
obj["subscriber"]["subscriptions"]["VSCOANNUAL"]["unsubscribe_detected_at"] = null;
obj["subscriber"]["subscriptions"]["VSCOANNUAL"]["expires_date"] = "2099-11-11T00:00:00Z";
obj["subscriber"]["entitlements"]["membership"]["expires_date"] = "2099-11-11T00:00:00Z";
body = JSON.stringify(obj);
$done({body})