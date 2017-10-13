// import 'whatwg-fetch'
// import 'es6-promise'

// 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式
function obj2params(obj) {
    var result = '',item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }

    if (result) {
        result = result.slice(1);
    }

    return result;
}

// 发送 post 请求
export function post(url, paramsObj) {
    // fetch('http://gbscn1.roboterra.com.cn:9000/api/register',{
    //     // get 海域head 方法的请求 不能包含body信息
    //     method:'post',
    //     //控制是否包含cookies omit: 默认值，忽略cookie的发送
    //     //控制是否包含cookies same-origin: 表示cookie只能同域发送，不能跨域发送
    //     //控制是否包含cookies include: cookie既可以同域发送，也可以跨域发送
    //     // credentials: 'include',
    //     //mode：控制是否允许跨域。same-origin（同源请求）、no-cors（默认不允许跨域请求）和cors（允许跨域请求,也可以写成cors）
    //     mode:'cors',
    //     // headers: {
    //     //     'Accept': 'application/json, text/plain, */*'
    //     // }
    //     //post 请求的header 中Content-Type:'application/x-www-form-urlencoded'
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //
    //     body:`email=${username}&spassword=${password}&nickname=hao&given_name=111&family_name=222&region=333&language=zh_CN`,
    //
    // })
    var result = fetch(url, {
        method: 'POST',
        //控制是否包含cookies omit: 默认值，忽略cookie的发送
        //控制是否包含cookies same-origin: 表示cookie只能同域发送，不能跨域发送
        //控制是否包含cookies include: cookie既可以同域发送，也可以跨域发送
        // credentials: 'include',
        //mode：控制是否允许跨域。same-origin（同源请求）、no-cors（默认不允许跨域请求）和cors（允许跨域请求,也可以写成cors）
        mode:'cors',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            // 针对post请求的header要如此写
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: obj2params(paramsObj)
    });

    return result;
}
