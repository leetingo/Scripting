//^https:\/\/api\.meiease\.cn\/(users\/show\/me\.json$|shop\/subscription\/validate)

let obj = JSON.parse($response.body)
let url = $request.url;

const path1 = "users/show/me.json"
const path2 = "shop/subscription/validate"

if(url.indexOf(path1) != -1) {
	obj.verified_type = "subscribed"
	obj.subscription.granted = true
}
if(url.indexOf(path2) != -1) {
	obj.response.status = "SUBSCRIPTION_PURCHASED"
	obj.response.expire_date = 4070880000000
	obj.response.subscription_id = "com.picsart.studio.subscription_yearly"
	obj.response.is_trial = false
	obj.reason = "purchased"
}
$done({body: JSON.stringify(obj)})