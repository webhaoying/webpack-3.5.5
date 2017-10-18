###路由配置 
    
     //  首先react-router  截止到20171016  有2.x 和4.x版本   两者用法差别较大，此project使用2.x版本
            //常见的坑：
            // 因为route的执行是从上到下匹配执行的，路由如果传值的话，需要尽量放在下边。
            //  路由可以嵌套，每级嵌套的时候，都可以设置一个IndexRoute，来匹配默认的路由指向  该标签没有path属性
            //  传值的获取  路由冒号传值：this.props.params.paramName
            // URL的查询字符串/foo?bar=baz，可以用this.props.location.query.bar获取。
      // 如果是命名的index.js  则可以省略书写
        import List from '../containers/List'
      // 如果链接到根路由/，不要使用Link组件，而要使用IndexLink组件。