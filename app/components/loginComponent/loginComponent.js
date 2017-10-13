/**
 * Created by roboterra_rd on 2017/10/12.
 */
import React from 'react'
import { Link } from 'react-router'
//用来区分该组件的状态是否改变   如果没有改变  页面刷新时候就不会针对该组件进行检查  提高效率
import PureRenderMixin from 'react-addons-pure-render-mixin'
//引用css文件  将其定义为common 然后common后边取属性  className={common.middleContent}
import loginComponentCss from './loginComponent.css'
class LoginComponent extends React.PureComponent {
    constructor(props, context) {
        // 获取父组件的所有的属性
        super(props, context);
        //  利用插件进行检查是否该组件是不是有状态改变  提高效率
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        // 定义初始的状态
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <div className={loginComponentCss.middleContent}>
                <p>这里是登录页面，在这里完成登录</p>
                <form action="" className={loginComponentCss.login_form}>
                    <ul >
                        <li><label htmlFor="account">账号</label>
                            <input
                               id="account"
                               type="text"
                               placeholder="请输入邮箱"
                               value={this.state.username}
                               onChange={this.changeUnameHandle.bind(this)}
                           />
                        </li>
                        <li>
                            <label htmlFor="account">密码</label>
                            <input
                                id="account"
                                type="text"
                                placeholder="请输入密码"
                                value={this.state.passname}
                                onChange={this.changePasswordHandle.bind(this)}
                            />
                        </li>
                        <li>
                            <span>动态显示：{this.state.username}</span>
                        </li>
                        <li>
                            <button className="btn_login" onClick={this.clickHandle.bind(this)}>点击登录+ajax(fetch)</button>
                            <Link to="register" >
                                <span className={loginComponentCss.registerWarn}>没有密码？去注册</span>
                            </Link>
                        </li>
                    </ul>


                </form>
            </div>
        )
    }
    changeUnameHandle(e){
        this.setState({
            username:e.target.value
        })
    }
    changePasswordHandle(e){
        this.setState({
            password:e.target.value
        })
    }
    clickHandle(){
        const username =this.state.username;
        const password =this.state.password;
        const loginHandle =this.props.loginHandle;
        loginHandle(username,password);
    }
}

export default LoginComponent