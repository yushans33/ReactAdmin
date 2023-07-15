const weather = {
    message: "success感谢又拍云(upyun.com)提供CDN赞助",
    status: 200,
    date: "20230627",
    time: "2023-06-28 14:14:23",
    cityInfo: {
        city: "北京市",
        citykey: "101010100",
        parent: "北京",
        updateTime: "22:31"
    },
    data: {
        shidu: "42%",
        pm25: 13,
        pm10: 41,
        quality: "轻度",
        wendu: "31",
        ganmao: "儿童、老年人及心脏、呼吸系统疾病患者人群应减少长时间或高强度户外锻炼",
        forecast: [
            {
                date: "27",
                high: "高温 39℃",
                low: "低温 22℃",
                ymd: "2023-06-27",
                week: "星期二",
                sunrise: "04:48",
                sunset: "19:47",
                aqi: 84,
                fx: "西南风",
                fl: "2级",
                type: "多云",
                notice: "阴晴之间，谨防紫外线侵扰"
            },
            {
                date: "28",
                high: "高温 30℃",
                low: "低温 24℃",
                ymd: "2023-06-28",
                week: "星期三",
                sunrise: "04:48",
                sunset: "19:47",
                aqi: 91,
                fx: "北风",
                fl: "2级",
                type: "小雨",
                notice: "雨虽小，注意保暖别感冒"
            },
            {
                date: "29",
                high: "高温 37℃",
                low: "低温 22℃",
                ymd: "2023-06-29",
                week: "星期四",
                sunrise: "04:48",
                sunset: "19:47",
                aqi: 98,
                fx: "南风",
                fl: "2级",
                type: "晴",
                notice: "愿你拥有比阳光明媚的心情"
            },
            {
                date: "30",
                high: "高温 39℃",
                low: "低温 25℃",
                ymd: "2023-06-30",
                week: "星期五",
                sunrise: "04:49",
                sunset: "19:47",
                aqi: 102,
                fx: "东南风",
                fl: "2级",
                type: "多云",
                notice: "阴晴之间，谨防紫外线侵扰"
            },
            {
                date: "01",
                high: "高温 40℃",
                low: "低温 23℃",
                ymd: "2023-07-01",
                week: "星期六",
                sunrise: "04:49",
                sunset: "19:47",
                aqi: 107,
                fx: "南风",
                fl: "2级",
                type: "阴",
                notice: "不要被阴云遮挡住好心情"
            },
            {
                date: "02",
                high: "高温 38℃",
                low: "低温 25℃",
                ymd: "2023-07-02",
                week: "星期日",
                sunrise: "04:50",
                sunset: "19:46",
                aqi: 95,
                fx: "东南风",
                fl: "2级",
                type: "多云",
                notice: "阴晴之间，谨防紫外线侵扰"
            },
            {
                date: "03",
                high: "高温 32℃",
                low: "低温 25℃",
                ymd: "2023-07-03",
                week: "星期一",
                sunrise: "04:50",
                sunset: "19:46",
                aqi: 79,
                fx: "东风",
                fl: "2级",
                type: "中雨",
                notice: "记得随身携带雨伞哦"
            },
            {
                date: "04",
                high: "高温 34℃",
                low: "低温 23℃",
                ymd: "2023-07-04",
                week: "星期二",
                sunrise: "04:51",
                sunset: "19:46",
                aqi: 67,
                fx: "西北风",
                fl: "2级",
                type: "小雨",
                notice: "雨虽小，注意保暖别感冒"
            },
            {
                date: "05",
                high: "高温 39℃",
                low: "低温 22℃",
                ymd: "2023-07-05",
                week: "星期三",
                sunrise: "04:52",
                sunset: "19:46",
                aqi: 58,
                fx: "西南风",
                fl: "3级",
                type: "晴",
                notice: "愿你拥有比阳光明媚的心情"
            },
            {
                date: "06",
                high: "高温 39℃",
                low: "低温 25℃",
                ymd: "2023-07-06",
                week: "星期四",
                sunrise: "04:52",
                sunset: "19:46",
                aqi: 75,
                fx: "西南风",
                fl: "2级",
                type: "晴",
                notice: "愿你拥有比阳光明媚的心情"
            },
            {
                date: "07",
                high: "高温 39℃",
                low: "低温 27℃",
                ymd: "2023-07-07",
                week: "星期五",
                sunrise: "04:53",
                sunset: "19:45",
                aqi: 86,
                fx: "南风",
                fl: "2级",
                type: "阴",
                notice: "不要被阴云遮挡住好心情"
            },
            {
                date: "08",
                high: "高温 39℃",
                low: "低温 27℃",
                ymd: "2023-07-08",
                week: "星期六",
                sunrise: "04:53",
                sunset: "19:45",
                aqi: 81,
                fx: "西北风",
                fl: "2级",
                type: "阴",
                notice: "不要被阴云遮挡住好心情"
            },
            {
                date: "09",
                high: "高温 28℃",
                low: "低温 22℃",
                ymd: "2023-07-09",
                week: "星期日",
                sunrise: "04:54",
                sunset: "19:45",
                aqi: 53,
                fx: "西南风",
                fl: "2级",
                type: "多云",
                notice: "阴晴之间，谨防紫外线侵扰"
            },
            {
                date: "10",
                high: "高温 30℃",
                low: "低温 23℃",
                ymd: "2023-07-10",
                week: "星期一",
                sunrise: "04:55",
                sunset: "19:44",
                aqi: 55,
                fx: "东北风",
                fl: "1级",
                type: "多云",
                notice: "阴晴之间，谨防紫外线侵扰"
            },
            {
                date: "11",
                high: "高温 27℃",
                low: "低温 22℃",
                ymd: "2023-07-11",
                week: "星期二",
                sunrise: "04:55",
                sunset: "19:44",
                aqi: 63,
                fx: "东南风",
                fl: "2级",
                type: "晴",
                notice: "愿你拥有比阳光明媚的心情"
            }
        ],
        yesterday: {
            date: "26",
            high: "高温 35℃",
            low: "低温 23℃",
            ymd: "2023-06-26",
            week: "星期一",
            sunrise: "04:47",
            sunset: "19:47",
            aqi: 73,
            fx: "西南风",
            fl: "2级",
            type: "阴",
            notice: "不要被阴云遮挡住好心情"
        }
    }
}
export const type = weather.data.forecast[1].type
export const city = weather.cityInfo.parent
