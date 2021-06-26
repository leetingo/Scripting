let obj = JSON.parse($response.body)
for(let i = 0; i < obj.result.result.length; i++)
{
    obj.result.result[i]["privilegeStatus"] = "Activated"
    obj.result.result[i]["canPay"] = false
}
$done({body: JSON.stringify(obj)})
