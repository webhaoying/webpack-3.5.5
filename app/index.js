import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import {Provider} from 'react-redux'

import RouteMap from './router/routeMap'
import configureStore from './store/configureStore'

// 创建store
const  store = configureStore();

// 通用样式
import './static/css/common.css'
// import './static/css/font.css'


render(
    <Provider store={store}>
        <RouteMap history={hashHistory} />
    </Provider>
    ,
    document.getElementById('root')
)