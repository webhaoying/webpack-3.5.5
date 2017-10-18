# css的处理
## common.css
这个是一个通用的css文件，需要在顶级目录下import进来此文件，然后就可以在任何一个子组件下引用该样式
实际上就是处理action的规则，这里的userinfo.js是为了练手redux
## css文件的模块化
######
1、全局的css样式，可以直接在index.html 直接link进来全局的样式 也就是针对body html之类的样式
######
2、通用的css样式，可以直接在index.js(顶级的js文件，或者说是入口文件) 直接import进来通用的样式 这里的样式是可以复用的。
3、个体的自定义的css样式，针对这样的样式，只针对某个组件，那么组件的使用可以参考loginComponent.js 中的引用，具体的区别主要是在以下展示：
````
import CSSModules from 'react-css-modules';
import styles from './loginComponent.css'
... //其他代码

  <div styleName="haha">这里是使用的react-css-modules</div> // 这里是使用的CSSModules之后的书写方式
....// 其他代码
export default CSSModules(LoginComponent, styles);
// CSSModules 是导入进来的cssmodules命名的变量名字
// 传参数 组件名  以及导入进来的css的变量名
...
````
> 使用CSSModules的时候注意，每一个组件需要使用
 