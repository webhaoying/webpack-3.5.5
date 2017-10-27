import React from 'react'
//引用css文件  将其定义为common 然后属性
import common from '../../static/css/common.css'
class Detail extends React.Component {
    render() {
        return (
            <p >Detail页面，接收到的参数：{this.props.params.id}</p>
        )
    }
}

export default Detail