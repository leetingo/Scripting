//https:\/\/app\.bilibili\.com\/x\/(v2\/(rank|space\\\?access_key|feed\/index\\\?access_key|account\/mine\\\?access_key|view\\\?access_key|show\/popular\/index\\\?access_key)|resource\/show\/tab\\\?access_key)


const path1 = "/x/v2/rank";
const path2 = "/x/v2/space\?access_key";
const path3 = "/x/resource/show/tab\?access_key";
const path4 = "/x/v2/feed/index\?access_key";
const path5 = "/x/v2/account/mine\?access_key";
const path6 = "/x/v2/view\?access_key";
const path7 = "/x/v2/show/popular/index\?access_key";

const url = $request.url;

if(url.indexOf(path1) != -1) {
let blacklist=['共青团中央','广东共青团','浙江共青团','山东共青团','安徽共青团','河南共青团','央视频','徐大sao','翔翔大作战','徐大虾咯','科技美学','敬汉卿','NathanRich火锅大王','千户长生']

let body = $response.body
body=JSON.parse(body)
body['data'].forEach((element, index)=> {
   if(blacklist.includes(element['name'])){ 
         body['data'].splice(index,1)  
    }
})
body=JSON.stringify(body)
$done({body})
}
if(url.indexOf(path2 != -1) {
let regex = /vmid=(\d*)/
let vmid= regex.exec(url)
let mid = vmid[1]
let api = `https://space.bilibili.com/ajax/member/getSubmitVideos?mid=${mid}&pagesize=10&order=stow`
$httpClient.get(api, (error, response, body) => {
    if (error) $done({})
    else {
      console.log(body)
      body=JSON.parse(body)
      let info=""
      body['data']['vlist'].forEach((element, index)=> {
          index++
          let scheme=`bilibili://av/${element['aid']}`
          info+=index+": "+element['title']+"\n"+scheme+"\n"
      })     
      $notification.post('收藏排行前10','长按进入', info)  
      $done({})
    }
  })
}
if(url.indexOf(path3) != -1) {
let whitelist=['追番','推荐','直播','热门','影视']

let body = $response.body
body=JSON.parse(body)

body['data']['tab'].forEach((element, index) => {
if(!(whitelist.includes(element['name']))) body['data']['tab'].splice(index,1)  
});

body['data']['bottom'].forEach((element, index)=> {
    if(element['pos']==4){      
       body['data']['bottom'].splice(index,1)  
    }
})

delete body['data']['top']
body=JSON.stringify(body)
$done({body}) 
}
if(url.indexOf(path4) != -1) {
let blacklist=['共青团中央','广东共青团','浙江共青团','山东共青团','安徽共青团','河南共青团','央视频','徐大sao','翔翔大作战','徐大虾咯','科技美学','敬汉卿','NathanRich火锅大王','千户长生']

let body = $response.body
body=JSON.parse(body)
body['data']['items'].forEach((element, index)=> {
   if(element.hasOwnProperty('ad_info')||element.hasOwnProperty('banner_item')||element['card_type']!='small_cover_v2'||blacklist.includes(element['args']['up_name'])){ 
         body['data']['items'].splice(index,1)  
    }
})
body=JSON.stringify(body)
$done({body})
}
if(url.indexOf(path5) != -1) {
let body = $response.body
body=JSON.parse(body)
body['data']['sections'].splice(0,1)
body['data']['sections'][0]['items'].splice(3,1)
body['data']['sections'][0]['items'].splice(4,3)
body['data']['sections'].splice(1,1)
body=JSON.stringify(body)
$done({body})
}
if(url.indexOf(path6) != -1) {
let body = $response.body
body=JSON.parse(body)
body['data']['relates'].forEach((element, index)=> {
   if(element.hasOwnProperty('is_ad')||!element.hasOwnProperty('aid')){      
      body['data']['relates'].splice(index,1)  
    }
})
delete body['data']['cms']
body=JSON.stringify(body)
$done({body})
}
if(url.indexOf(path7) != -1) {
let blacklist=['共青团中央','广东共青团','浙江共青团','山东共青团','安徽共青团','河南共青团','央视频','徐大sao','翔翔大作战','徐大虾咯','科技美学','敬汉卿','NathanRich火锅大王','千户长生']

let body = $response.body
body=JSON.parse(body)
body['data'].forEach((element, index)=> {
   if(blacklist.includes(element['right_desc_1'])||element["card_type"] !== "small_cover_v5"){ 
         body['data'].splice(index,1)  
    }
})
body=JSON.stringify(body)
$done({body})
}