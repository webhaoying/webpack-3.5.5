import React from 'react'
import { Link ,IndexLink} from 'react-router'
//引用css文件
import  headComponentCss from './headComponent.css'
import  commonCss from '../../static/css/common.css'
class HeaderComponent extends React.Component {
    render() {
        return (
            <div>
                HeaderComponent
                {/*<div className={headComponentCss.header_container}>*/}
                    {/*<p>这里是公用的头部</p>*/}
                    {/*/!*定义在自己组件中的样式的引用*!/*/}
                    {/*<ul className={headComponentCss.list}>*/}
                        {/*<li>*/}
                            {/*<Link to="/register" >*/}
                                {/*<span >注册页面</span>*/}
                            {/*</Link>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                            {/*<Link to="/homepage/detail/传过去的参数" >*/}
                                {/*<span className="">详情页面</span>*/}
                            {/*</Link>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                            {/*<Link to="/homepage/list" >*/}
                                {/*<span >列表页面</span>*/}
                            {/*</Link>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                            {/*/!*定义在顶级js文件index.js中的通用样式*!/*/}
                            {/*<Link to="/homepage/list" >*/}
                                {/*<span className={commonCss.blueh2}>列表页面</span>*/}
                            {/*</Link>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                            {/*/!*定义在index.html的全局样式*!/*/}
                            {/*<Link to="/hello" >*/}
                                {/*<span className='quanjuyangshi'>跳转到hello页面</span>*/}
                            {/*</Link>*/}
                        {/*</li>*/}
                    {/*</ul>*/}
                {/*</div>*/}
            </div>

        )
    }
}

export default HeaderComponent