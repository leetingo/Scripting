const chavy = init()

let adurl = $request.url.match(/(https:\/\/interpreter\.cyapi\.cn\/v1\/doc\/\w+\/)download\/info/)[1]
adurl = adurl + "ad/view"

let obj = JSON.parse($request.body)
let info = {
    "user_id": obj.user_id
}
let header = $request.headers
let head = {
    "X-Authorization": header["X-Authorization"]
}

let pdata = {
    url: adurl,
    headers: head,
    body: info
}

view_ad()
function view_ad() {
    chavy.post(pdata, (error, response, data) => {
        let result = JSON.parse(data)
        if (result.ad_num < result.required_view_num) {
            view_ad()
        }
        else {
            chavy.done()
        }
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
