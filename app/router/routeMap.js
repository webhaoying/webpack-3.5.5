import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers/App'
import Home from '../containers/Home'
import Hello from '../containers/Hello'
import Homepage from '../containers/HomeBox/HomePage.js'

import Login from '../containers/login/login.js'
import Register from '../containers/register/register.js'
// 如果是命名的index.js  则可以省略书写
import List from '../containers/List'
import Detail from '../containers/Detail'
import NotFound from '../containers/NotFound'

class RouteMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        //  首先react-router  截止到20171016  有2.x 和4.x版本   两者用法差别较大，此project使用2.x版本
        //常见的坑：
        // 因为route的执行是从上到下匹配执行的，路由如果传值的话，需要尽量放在下边。
        //  路由可以嵌套，每级嵌套的时候，都可以设置一个IndexRoute，来匹配默认的路由指向  该标签没有path属性
        //  传值的获取  路由冒号传值：this.props.params.paramName
        // URL的查询字符串/foo?bar=baz，可以用this.props.location.query.bar获取。
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                {/*route中可以继续嵌套route,但是注意书写路由的时候要注意添加腹肌目录的前缀 例如/homepage/list 、/register  */}
                <Route path='/' component={App}>
                    <Route path='homepage' component={Homepage}>
                        <IndexRoute component={Home}/>
                        <Route path='list' component={List}/>
                        <Route path='detail/:id' component={Detail}/>
                        <Route path='home' component={Home}/>
                    </Route>

                    <IndexRoute component={Login}/>
                    <Route path='register' component={Register}/>
                    <Route path='hello' component={Hello}/>
                    <Route path='hello2' component={Hello}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouteMap