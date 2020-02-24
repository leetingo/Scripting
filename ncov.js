const cookieName = 'ncov'
const cookieKey = 'chavy_cookie_ncov'
const chavy = init()
const cookieVal = chavy.getdata(cookieKey)

sign()

function sign() {
    getsigninfo((signinfo) => {
        let url = {
            url: `https://app.bupt.edu.cn/ncov/wap/default/save`,
            headers: {
                Cookie: cookieVal
            },
            body: signinfo
        }
        url.headers['Accept-Encoding'] = 'gzip, deflate, br'
        url.headers['Accept-Language'] = 'zh-cn'
        url.headers['Connection'] = 'keep-alive'
        url.headers['Origin'] = 'https://app.bupt.edu.cn'
        url.headers['Referer'] = 'https://app.bupt.edu.cn/ncov/wap/default/index'
        url.headers['Accept'] = 'application/json, text/javascript, */*; q=0.01'
        url.headers['Host'] = 'app.bupt.edu.cn'
        url.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
        url.headers['X-Requested-With'] = 'XMLHttpRequest'
        url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.10(0x17000a21) NetType/WIFI Language/zh_CN'
        chavy.log(url.body)

        chavy.post(url, (error, response, data) => {
            let result = JSON.parse(data)
            let title = `${cookieName}`
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
        })
    })
    chavy.done()
}
function getsigninfo(cb) {
    let url = {
        url: `https://app.bupt.edu.cn/ncov/wap/default/index`,
        headers: {
            Cookie: cookieVal
        }
    }
    url.headers['Host'] = 'app.bupt.edu.cn'
    url.headers['Accept-Encoding'] = 'gzip, deflate'
    url.headers['Accept-Language'] = 'zh-cn'
    url.headers['Accept'] = 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.10(0x17000a21) NetType/WIFI Language/zh_CN'
    url.headers['Connection'] = 'keep-alive'

    chavy.get(url, (error, response, data) => {
        let re = /oldInfo: {.*}/g
        data = data.match(re)[0]
        re = /{.*}/g
        data = data.match(re)[0]
        data = JSON.parse(data)
		data.sfxk = 0
		data.xkqq = ''
		data.gwszdd = ''
		data.sfyqjzgc = ''
		data.jrsfqzys = ''
		data.jrsfqzfy = ''
		data.szsqsfybl = 0
        re = /%20/g
        const formBody = Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&').replace(re, '+')
        cb(formBody)
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
