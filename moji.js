let obj = JSON.parse($response.body)
obj = {
    'result': ['000-000-00001']
}
$done({body: JSON.stringify(obj)})