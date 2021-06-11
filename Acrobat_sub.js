let obj = JSON.parse($response.body)
obj = {"subscriptions":[{"subscription_name":"PDFPack","subscription_level":"Plus","subscription_state":"ACTIVE","sub_ref":"9B58627F4C06C7E69AAA","biz_source":"","billing_term":null}]}
$done({body: JSON.stringify(obj)})