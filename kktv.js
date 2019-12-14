let obj = JSON.parse($response.body)
obj.data.autoRenew = true
obj.data.expiredAt = 4070880000
obj.data.role = "premium"
obj.data.hasPaid = true
obj.data.from.kkbox_info.status = "PREMIUM"
$done({body: JSON.stringify(obj)})