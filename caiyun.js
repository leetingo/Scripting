//https:\/\/api\.interpreter\.caiyunai\.com\/v1\/(user|doc\/.*\/download\/info)

const path1 = "/download/info";
const path2 = "/user";

const url = $request.url;
var obj = JSON.parse($response.body);

if (url.indexOf(path1) != -1) {
    obj = {
        "rc": 0,
        "pay_type": 4,
        "is_allow": true
    }
}
if (url.indexOf(path2) != -1) {
    obj = {
        "point": {},
        "user": {
            "status": "",
            "point": 99999999,
            "audio_used_time": 0,
            "mvp_count": 999,
            "continuous_reading_count": 1,
            "updated_at": 1573484118,
            "doc_trans_block": false,
            "id": "5dc97655e56b54000e74c65a",
            "be_liked_count": 0,
            "daily_comment_count": 0,
            "reading_page_count": 999,
            "type": "registered",
            "email": "",
            "username": "***6275",
            "daily_share_count": 0,
            "translation_count": 1000,
            "biz": {
                "xy_vip_expire": 4070880000,
                "platform_name": "caiyun",
                "phone_num": "18613866275",
                "name": "***6275",
                "grade": "积雨云",
                "is_xy_vip": true,
                "last_acted_at": 1573484117.614869,
                "platform_id": "",
                "score": 2000,
                "avatar": "https://caiyunapp.com/imgs/webtrs/default.png",
                "_id": "5dc97655e56b54000e74c65a",
                "is_xy_auto_renewal": false
            },
            "audio_remaining_time": null,
            "daily_sentence_count": 0,
            "created_at": 1573484117,
            "free_download_count": 6,
            "avatar_url": "https://caiyunapp.com/imgs/webtrs/default.png",
            "reading_time_this_week": 45701,
            "_id": "5dc97655e56b54000e74c65a"
        },
        "rc": 0
    };
}
$done({body: JSON.stringify(obj)});
