const cookieName = 'tianyi'
const cookieKey = 'chavy_cookie_tianyi'
const chavy = init()
const cookieVal = chavy.getdata(cookieKey)

sign()

function sign() {
        let url = {
            url: `http://ispeed.ebit.cn/xyface/xyspeedActivity/speedup.jhtml`,
            headers: {
                Cookie: cookieVal
            },
            body: {r:Math.random()}
        }
        chavy.get(url, (error, response, data) => {
            let result = JSON.parse(data)
            let title = `${cookieName}`
            // 签到成功
            if (result && result.state == 1) {
                let subTitle = `提速结果: 成功`
                let detail = `说明: ${result.message}`
                chavy.msg(title, subTitle, detail)
            }
            // 签到失败
            else {
                let subTitle = `提速结果: 失败`
                let detail = `说明: ${result.message}`
                chavy.msg(title, subTitle, detail)
            }
            chavy.log(`${cookieName}, data: ${data}`)
        }
    )
    chavy.done()
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
