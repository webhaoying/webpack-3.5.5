import React from 'react'
import { hashHistory } from 'react-router'

class List extends React.Component {
    render() {
        const arr = [7, 9, 13]
        return (
            <ul>
                {arr.map((item, index) => {
                    return <li key={index} onClick={this.clickHandler.bind(this, item)}>跳转到detail详情页面并且传参为： {item}</li>
                })}
            </ul>
        )
    }
    clickHandler(value) {
        hashHistory.push('homepage/detail/' + value)
    }
}

export default List