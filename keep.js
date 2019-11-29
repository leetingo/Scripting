let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

const path1 = 'exercises';
const path2 = '/klass/v2/k/';

if (url.indexOf(path1) != -1) {
   obj.data.permission.isMembership = true;
   obj.data.permission.membership = true;
   obj.data.permission.inSuit = true;
}
if (url.indexOf(path2) != -1) {
   for (var i = 0; i < obj.data.subjectInfos.length; i++) {
         obj.data.subjectInfos[i].needPay = false;
   }
}
body = JSON.stringify(obj);
$done({body});