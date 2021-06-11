let obj = JSON.parse($response.body)
obj.acrobat_pro = true
$done({body: JSON.stringify(obj)})