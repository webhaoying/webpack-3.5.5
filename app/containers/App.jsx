import React from 'react'
import CSSModules from 'react-css-modules';
import styles from '../components/loginComponent/loginComponent.css'
class App extends React.Component {
    render() {
        // 路由中某组件拥有子集组件的话，这里要写上this.props.children,代表依赖子组件
        return (
            // 这里也是使用的CSSModules之后的使用
            <div id="index_container" styleName = 'haha' >
                <div >{this.props.children}</div>
            </div>

        )
    }
}

// export default App
// 引入CSSModules之后导出写法
export default  CSSModules(App, styles);