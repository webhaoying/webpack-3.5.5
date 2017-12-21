import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
//引用components中的对应js文件
import LoginComponent from '../../components/loginComponent/loginComponent.js'
import { hashHistory } from 'react-router'
import { loginFetch } from '../../fetch/login/loginFetch.js'

class IndexHome extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: true
        }
    }

    render() {
        console.log(this.props);
        console.log(this.state.checking);
        return (
            <div>
                {
                    // 等待验证之后，再显示登录信息
                    this.state.checking
                        ?<div>
                            {/*等待中的页面*/}
                            loding
                        </div>
                        : <LoginComponent loginHandle={this.loginHandle.bind(this)}/>

                }
            </div>
        )
    }
    componentDidMount(){
    //    判断是否已经登录 componentDidMount 里边的函数先执行然后在最终渲染更新页面
        this.doCheck()
    }

    doCheck(){
        // console.log(NODE_ENV)
        console.log(process.env.NODE_ENV)
        console.log(process.env.NODE_ENV)
        console.log(process.env.npm_package_name);
        console.log(process.env.npm_package_dev);
        // if(userinfo.username){
        if(localStorage.username){
            // 已经登录，则跳转到用户主页
            this.goHomePage();
        } else {
            // 未登录 则验证结束
            // 此时的setState势必会导致状态的改变  此时如果获得state值 并不会拿到最新的statw赋值，state的最新赋值是在render中才可以拿到的  也就是说在改变之后，只能在针对这次state状态改变的render中获得
            this.setState({
                checking: false
            })
        }
    }
    // 登录过程
    loginHandle(username,password) {
        let that = this;
        loginFetch(username,password).then(function (data) {
            return data.json();
        }).then((function (response) {
            //  要不就在外边定义that将this传进来 ，要不就bind(this)
            // 登录成功
            if(response.errcode==-1){
                console.log('login  sucess');
                localStorage.username  = username;
                hashHistory.push('/homepage');
                // 同样的效果
                // location.href='http://localhost:8080/#/home'

            }else {
                localStorage.removeItem('username');
            }

        })).catch(function (error) {
            console.log(error)
        })
    }
    goHomePage() {
        hashHistory.push('/homepage')
    }
}

export default IndexHome