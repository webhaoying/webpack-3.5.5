import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userinfoActions from '../actions/userinfo'

import A from '../components/helloComponent/A'
import B from '../components/helloComponent/B'
import C from '../components/helloComponent/C'

class Hello extends React.Component {
    render() {
        return (
            <div>
                <p>这里是</p>
                <hr/>
                <A userinfo={this.props.userinfo}/>
                <hr/>
                <B userinfo={this.props.userinfo}/>
                <hr/>
                <C actions={this.props.userinfoActions}/>
            </div>
        )
    }
    componentDidMount() {
        // 模拟登陆
        /*首先mapDispatchToProps 就是将actions与派发绑定在了一起，意思就是让具体的action的调用，能够派发之后触发reducer
        *                   这里的login就是一个派发，就是针对一个action的派发
        *                   至于是派发哪个方法，就根据actions中的不同action选项，还有实际功能来决定了
        * 派发之后会触发一个reducer（处理规则），这个理的reducer就会根据派发的actions类型，进行不同的处理，
        * 然后会影响到state的变化 又因为 mapStateToProps已经将state关联到了props 所以state变化之后就会重新更新页面
        * */
        this.props.userinfoActions.login({
            userid: 'abc',
            city: 'beijing'
        })
    }
}
// 将store中的state遍历添加到组件的属性中
function mapStateToProps(state) {
    return {
        // 此处的state.userinfo 中的userinfo 是根据reducer绑定进来的
        /*  根据reducer文件夹中的index.js 批量导入reducer的时候决定的
        *  combineReducers({
         userinfo
         // 这里等同于userinfo:userinfo
         })
        * */
        userinfo: state.userinfo
    }
}
//将actions的派发 绑定到组件的属性当中 然后子元素绑定引用：actions={this.props.userinfoActions}
// 在调用的时候 就在该属性中调用就行了
//bindActionCreators(userinfoActions, dispatch)  是将那些action生成函数绑定到props
// 简单来说就是，调用了mapDispatchToProps之后我们就可以在引用的时候这么写 this.props.userinfoActions.login({
            userid: 'abc',
            city: 'beijing'
        })
// 如果不用mapDispatchToProps，我们就要引入对应的action，以及从props中获取dispatch方法，然后每一次的action的派发，都要dispatch(actions.actionName)
//  注意区分 action本身是一个对象，其中必须包含一个字段type，然后其余的字段自定义
// action 生成函数就是一个专门用来返回action的函数
function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello)
