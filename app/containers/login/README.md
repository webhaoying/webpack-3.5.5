### login 逻辑的踩坑
####  form表单提交会触发render再次渲染
    在form表单中的button按钮，默认是有提交(submit)功能，并且会触发渲染以及渲染之后的componentDidMount，因此在写页面的时候就出现了页面跳转不过去的bug，问题原因就是自己指定了click事件进行ajax提交数据，然后form表单再次提交，页面再次渲染，再次的componentDidMount(),而这导致了页面重新链接回了登录页面，而没有跳转到登录完成之后的home页面。
#### 关于 React.PureComponent与react-addons-pure-render-mixin  
>首先，两者有一样的功能，都是自动比对新旧的state和props，如果新旧state和props一致，则并不会触发页面或者组件的渲染。如此一来，就会很大程度上节省了性能。
>其次，React.PureComponent是react本身就有的，另外一个是一个组件，需要引入并且配置使用。
````
// 首先需要引入
import PureRenderMixin from 'react-addons-pure-render-mixin'

class IndexHome extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        // 在此地址引用
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        
        this.state = {
            checking: true
        }
    }
    //... 其他代码
}    
````