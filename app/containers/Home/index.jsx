import React from 'react'
import { Link } from 'react-router'
//引用css文件  将其定义为common 然后属性
import common from '../../static/css/common.css'
class Home extends React.PureComponent {
    render() {
        return (
            <div>
                <h1> 主页</h1>
                <p>Home 这里是登录成功之后的页面</p>
                    <Link to="/homepage/list" >
                        <span > to list</span>
                    </Link>
            </div>
        )
    }
}

export default Home