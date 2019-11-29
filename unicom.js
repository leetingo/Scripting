const ssid = "BUPT-mobile";
let cu = {
	url: "http://cu.byr.cn/login",
	headers: {"Content-Type": "application/x-www-form-urlencoded"},
	body: "user=2018213697&pass=ltg2052586&line=TenGigabitEthernet2/0/2"
};
if($network.wifi.ssid == ssid)	$httpClient.post(cu,(error, response, body) => {
    if (error) $done({})});
$done({});