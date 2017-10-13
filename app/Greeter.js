/**
 * Created by roboterra_rd on 2017/9/29.
 */
import React from 'react';
import config from './config.json';
import styles from './Greeter.css';
import styles1 from './Greeter1.css';

export default class Greeter extends React.Component{
    login(){
        /*
        * address: 'http://gbscn1.roboterra.com.cn',
         port: ':9000'
         },
         API: {
         login: '/api/login',*/
        fetch('http://gbscn1.roboterra.com.cn:9000/api/register',{
            // get 海域head 方法的请求 不能包含body信息
            method:'post',
            //控制是否包含cookies omit: 默认值，忽略cookie的发送
            //控制是否包含cookies same-origin: 表示cookie只能同域发送，不能跨域发送
            //控制是否包含cookies include: cookie既可以同域发送，也可以跨域发送
            // credentials: 'include',
            //mode：控制是否允许跨域。same-origin（同源请求）、no-cors（默认不允许跨域请求）和cors（允许跨域请求,也可以写成cors）
            mode:'cors',
            // headers: {
            //     'Accept': 'application/json, text/plain, */*'
            // }
            //post 请求的header 中Content-Type:'application/x-www-form-urlencoded'
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:"email=hao.aaa1@163.com&spassword=zly426213&nickname=hao&given_name=111&family_name=222&region=333&language=zh_CN",

        }).then(function (data) {
            console.log(data);
            // console.log(data.json());
            return data.json();
        }).then(function (response) {
            console.log(response)
            if(response.errcode==-1){
                console.log('login  sucess')
            }
        }).catch(function (error) {
            console.log(error)
        })
    }
    render(){
        return(
            <div>
                <div className={styles.root} >
                    {config.greetText}zhanghao

                </div>

                <div className={styles1.root}>
                    {config.greetText}

                </div>
                <button onClick={this.login.bind(this)}>点击提交表单</button>
            </div>

        )
    }
}

