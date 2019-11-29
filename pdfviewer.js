var body = $response.body;
var obj = JSON.parse(body);
obj["subscriber"]["subscriptions"]["com.pspdfkit.viewer.sub.pro.months.3"]["unsubscribe_detected_at"] = null;
obj["subscriber"]["subscriptions"]["com.pspdfkit.viewer.sub.pro.months.3"]["expires_date"] = "2099-11-11T00:00:00Z";
obj["subscriber"]["entitlements"]["sub.pro"]["expires_date"] = "2099-11-11T00:00:00Z";
body = JSON.stringify(obj);
$done({body})