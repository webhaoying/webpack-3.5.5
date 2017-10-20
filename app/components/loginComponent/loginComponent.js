/**
 * Created by roboterra_rd on 2017/10/12.
 */
import React from 'react'
import { Link } from 'react-router'

//用来检查该组件的状态是否改变   如果没有改变  页面刷新时候就不会针对该组件进行检查当然也就不会重新render  提高效率
import PureRenderMixin from 'react-addons-pure-render-mixin'
// 传统的引用css文件  loginComponentCss 然后loginComponentCss后边取属性  className={loginComponentCss.middleContent}
// import loginComponentCss from './loginComponent.
/*
 为了可以不使用繁琐的style.属性名  可以引入react-css-moudles  在该文件中使用了这个模版
 原有的css书写规则不变
 只是js文件中需要做如下的更改：
 import React from 'react';
 //引入react-css-moudles 组件
 //引入的时候 命名自由，但是导出的时候名字要保持一只
 import styles from './loginComponent.css'
 // 导出的时候
 export default CSSModules(LoginComponent, styles);
 // 组件使用的时候
 <div styleName="middleContent"></div>

* */
import CSSModules from 'react-css-modules';
import styles from './loginComponent.css'

class LoginComponent extends React.PureComponent {
    constructor(props, context) {
        // 获取父组件的所有的属性
        super(props, context);
        //  利用插件进行检查是否该组件是不是有状态改变  提高效率  也可以利用 React.PureComponent来实现
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        // 初始化定义初始的状态
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <div styleName="login_container">
                <h2 styleName="login_header">登录</h2>
                <form action="" styleName="login_form" >
                    <ul >
                        <li><label htmlFor="account">账号:</label>
                            <input
                               id="account"
                               type="text"
                               placeholder="请输入邮箱"
                               onChange={this.changeUnameHandle.bind(this)}
                           />
                        </li>
                        <li>
                            <label htmlFor="password">密码:</label>
                            <input
                                id="password"
                                type="text"
                                placeholder="请输入密码"
                                onChange={this.changePasswordHandle.bind(this)}
                            />
                        </li>
                        <li>
                            <span>动态显示账号：{this.state.username}</span>
                        </li>
                        <li>
                            <button type="button" styleName="btn_login" onClick={this.clickHandle.bind(this)}>点击登录</button>
                            <Link to="/register" styleName="register_warn" >
                                没有密码？去注册
                            </Link>

                        </li>
                    </ul>


                </form>
            </div>
        )
    }
    // 针对这种只是改变自己的组件的某个状态值的方法  都定义在该component中，称之为木偶组件，因为他不跟别的组件进行交互
    changeUnameHandle(e){
        this.setState({
            username:e.target.value
        })
    }
    // 针对这种只是改变自己的组件的某个状态值的方法  都定义在该component中，称之为木偶组件，因为他不跟别的组件进行交互

    changePasswordHandle(e){
        this.setState({
            password:e.target.value
        })
    }
    // 提交时候，要和后台ajax交互，将此类的方法：loginHandle，写到智能组件中，也就是说container中的对应组件中
    clickHandle(){
        const username =this.state.username;
        const password =this.state.password;
        const loginHandle =this.props.loginHandle;
        loginHandle(username,password);
    }
}

 // export default LoginComponent
// 使用了 react-css-modules 插件之后的导出
export default CSSModules(LoginComponent, styles);