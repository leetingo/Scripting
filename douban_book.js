let obj = JSON.parse($response.body);
let url = $request.url;
obj.has_owned = true;
obj.vip = {
    "price": 319,
    "discount": 80,
    "can_read": true
  };
if(url.indexOf("includes") == -1) {
	for(var i in toc) {
		let tmp = JSON.parse(i);
		tmp.has_owned = true;
	}
}
$done({body: JSON.stringify(obj)});
//https:\/\/read\.douban\.com\/api\/v2\/works\/\d+($|\?x_includes=has_owned%2Cprice%2Cis_in_library%2Cvip%2Cpromotion)