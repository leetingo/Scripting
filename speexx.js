const chavy = init()
const cookieVal = $request.headers['Cookie']
obj = {
    "result": 100
}
obj.elapsed = randomNum(200, 1000)

let url = {
    url: $request.url,
    headers: {
        Cookie: $request.headers['Cookie']
    },
    body: obj
}

chavy.put(url, (error, response, data) => { })
chavy.done()

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
    put = (url, cb) => {
        if (isSurge()) {
            $httpClient.put(url, cb)
        }
        if (isQuanX()) {
            url.method = 'PUT'
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
        put,
        done
    }
}
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}
