const cookieName = 'ncov'
const cookieKey = 'chavy_cookie_ncov'
const chavy = init()
const cookieVal = chavy.getdata(cookieKey)

sign()

function sign() {
    signinfo = 'sfzx=1&tw=2&area=北京市 昌平区&city=北京市&province=北京市&address=北京市昌平区沙河镇北京邮电大学沙河校区雁北园男生宿舍&geo_api_info={"type":"complete","position":{"Q":40.158691677518,"R":116.28864339192802,"lng":116.288643,"lat":40.158692},"location_type":"html5","message":"Get geolocation success.Convert Success.Get address success.","accuracy":65,"isConverted":true,"status":1,"addressComponent":{"citycode":"010","adcode":"110114","businessAreas":[{"name":"沙河","id":"110114","location":{"Q":40.134237,"R":116.28009600000001,"lng":116.280096,"lat":40.134237}},{"name":"百善","id":"110114","location":{"Q":40.175749,"R":116.32030500000002,"lng":116.320305,"lat":40.175749}}],"neighborhoodType":"","neighborhood":"","building":"","buildingType":"","street":"南丰路","streetNumber":"1号","country":"中国","province":"北京市","city":"","district":"昌平区","township":"沙河镇"},"formattedAddress":"北京市昌平区沙河镇北京邮电大学沙河校区雁北园男生宿舍","roads":[],"crosses":[],"pois":[],"info":"SUCCESS"}&sfcyglq=0&sfyzz=0&qtqk=&askforleave=0'

    let url = {
        url: `https://app.bupt.edu.cn/xisuncov/wap/open-report/save`,
        headers: {
            Cookie: cookieVal
        },
        body: signinfo
    }
    url.headers['Accept'] = 'application/json, text/javascript, */*; q=0.01'
    url.headers['Host'] = 'app.bupt.edu.cn'
    url.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
    url.headers['X-Requested-With'] = 'XMLHttpRequest'
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.10(0x17000a21) NetType/WIFI Language/zh_CN'

    chavy.post(url, (error, response, data) => {
        let result = JSON.parse(data)
        let title = `晨午晚检`
        // 签到成功
        if (result && result.e == 0) {
            let subTitle = `签到结果: 成功`
            let detail = `说明: ${result.m}`
            chavy.msg(title, subTitle, detail)
        }
        // 签到失败
        else {
            let subTitle = `签到结果: 失败`
            let detail = `说明: ${result.m}`
            chavy.msg(title, subTitle, detail)
        }
        chavy.log(`${cookieName}, data: ${data}`)
        chavy.done()
    })
}

function init() {
    isSurge = () => {
        return undefined === this.$httpClient ? false : true
    }
    isQuanX = () => {
        return undefined === this.$task ? false : true
    }
    getdata = (key) => {
        if (isSurge())
            return $persistentStore.read(key)
        if (isQuanX())
            return $prefs.valueForKey(key)
    }
    setdata = (key, val) => {
        if (isSurge())
            return $persistentStore.write(key, val)
        if (isQuanX())
            return $prefs.setValueForKey(key, val)
    }
    msg = (title, subtitle, body) => {
        if (isSurge())
            $notification.post(title, subtitle, body)
        if (isQuanX())
            $notify(title, subtitle, body)
    }
    log = (message) => console.log(message)
    get = (url, cb) => {
        if (isSurge()) {
            $httpClient.get(url, cb)
        }
        if (isQuanX()) {
            url.method = 'GET'
            $task.fetch(url).then((resp) => cb(null, {}, resp.body))
        }
    }
    post = (url, cb) => {
        if (isSurge()) {
            $httpClient.post(url, cb)
        }
        if (isQuanX()) {
            url.method = 'POST'
            $task.fetch(url).then((resp) => cb(null, {}, resp.body))
        }
    }
    done = (value = {}) => {
        $done(value)
    }
    return {
        isSurge,
        isQuanX,
        msg,
        log,
        getdata,
        setdata,
        get,
        post,
        done
    }
}