import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'

import RouteMap from './router/routeMap'

// 通用样式
import './static/css/common.css'
import './static/css/font.css'


render(
    <RouteMap history={hashHistory}/>,
    document.getElementById('root')
)
