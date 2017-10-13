import React from 'react'
import { Link ,IndexLink} from 'react-router'
//引用css文件
import  registerComponentCss from './registerComponent.css'
class RegisterComponent extends React.Component {
    render() {
        return (
            <div id="register_container" className={registerComponentCss.middleContent}>
                <p>这里是注册页面，在这里完成注册</p>
                <form action="" className={registerComponentCss.login_form}>
                    <ul >
                        <li>
                            <label htmlFor="account">账号</label>
                            <input id="account" type="text" placeholder="请输入邮箱"/></li>
                        <li>
                            <label htmlFor="password">密码</label>
                            <input id="password" type="text" placeholder="请输入密码"/></li>
                        <li>
                            <label htmlFor="re_password">重复密码</label>
                            <input id="re_password" type="text" placeholder="请再次输入密码"/></li>
                        <li>
                            {/*在这里传参数*/}
                            <button>
                                点击注册
                            </button>
                            {/*返回首页  需要使用IndexLink */}
                            <IndexLink to="/" >
                                已有账号？去登录
                            </IndexLink>
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}

export default RegisterComponent