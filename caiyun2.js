var obj = JSON.parse($response.body);

obj.free_download_times_remain = 6;
$done({body: JSON.stringify(obj)});