let url = $request.url
let regex = /vmid=(\d*)/
let vmid = regex.exec(url)
let mid = vmid[1]
let myRequest = {
    url: `https://space.bilibili.com/ajax/member/getSubmitVideos?mid=${mid}&pagesize=10&order=stow`,
    method: "GET"
}
$task.fetch(myRequest).then(response => {
    console.log(response.body)
    body = JSON.parse(response.body)
    let info = ""
    body['data']['vlist'].forEach((element, index) => {
        index++
        let scheme = `bilibili://av/${element['aid']}`
        info += index + ": " + element['title'] + "\n" + scheme + "\n"
    })
    $notify('收藏排行前10', '长按进入', info)
    $done({})
}, reason => {
    console.log(reason.error)
	$done({})
});
