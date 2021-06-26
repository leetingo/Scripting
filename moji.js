let obj = JSON.parse($response.body)
for(let i = 0; i < obj.result.result.length; i++)
{
    obj.result.result[i]["privilege"]["purchaseDate"] = "1589631265675"
    obj.result.result[i]["privilegeStatus"] = "activated"
}
$done({body: JSON.stringify(obj)})
