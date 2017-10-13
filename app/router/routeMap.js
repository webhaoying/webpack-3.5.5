import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers/App'
import Home from '../containers/Home'
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
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={App}>
                    <Route path='list' component={List}/>
                    <Route path='register' component={Register}/>
                    <Route path='detail/:id' component={Detail}/>
                    <Route path='home' component={Home}/>
                    <Route path="*" component={NotFound}/>
                    <IndexRoute component={Login}/>
                </Route>
            </Router>
        )
    }
}

export default RouteMap