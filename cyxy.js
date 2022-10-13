let obj = JSON.parse($response.body)
obj.pay_type = 1
obj.total_doc_translate_remain = 1
obj.is_allow = true
obj.pay_detail.free_download_times_remain = 1
obj.pay_detail.backing.backer_num = 1
obj.pay_detail.backing.required_num = 0
$done({body: JSON.stringify(obj)})
