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
            <div id="index_container" styleName = 'haha' >
                {/*<i className="icon-search" className="quanjuyangshi"></i>*/}
                <i className="quanjuyangshi">全局样式在子组件的应用，全局样式定义在index.html的head中，或者外部引用</i>
                <br/>
                <br/>
                <i className={commonCss.tongyongyangshi}>通用样式在子组件的应用</i>
                <br/>
                {/* 图标字体可以使用color和fontSize设置  也就是说针对字体进行设置*/}
                <div className='icon-search' style={{color:'red',fontSize:30}}></div>
                <br/>
                <div className='icon-search' style={{width:100,height:100}}></div>
                <span>字体图标在本地组件引入的使用</span>
                <br/>
                <div className={styles.background} style={{width:100,height:100}}></div>
                <span>字体图标在本地组件引入的使用</span>
                <br/>
                <br/>
                <div >{this.props.children}</div>
            </div>

        )
    }
}

// export default App
// 引入CSSModules之后导出写法
export default  CSSModules(App, styles);