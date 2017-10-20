import React from 'react'
import CSSModules from 'react-css-modules';
import styles from '../components/loginComponent/loginComponent.css'
import  commonCss from '../static/css/common.css'

class App extends React.Component {
    render() {
        // console.log(fontCss);
        // console.log(fontCss[icon-search]);
        // 路由中某组件拥有子集组件的话，这里要写上this.props.children,代表依赖子组件
        return (
            // 这里也是使用的CSSModules之后的使用 并且
            <div id="index_container" >
                <div >{this.props.children}</div>
            </div>

        )
    }
}

// export default App
// 引入CSSModules之后导出写法
export default  CSSModules(App, styles);