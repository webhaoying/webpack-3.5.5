# webpack-3.5.5
# master 分支是一个完整的webpack配置文件结构   dev分支是一个可以根据项目不停改变的分支
## webpack的安装使用  
 ### 内容借鉴了[简书-webpack配置详解](http://www.jianshu.com/p/42e11515c10f)
 * 1、建议全局、本地仓库均安装webpack
      > 后缀的解释：
      >> -g   全局安装
      
      >> --save   安装的时候并且将组件名以及版本号添加到package.json中的Dependencies
      >
      >> --save-dev   安装的时候并且将组件名以及版本号添加到package.json中的devDependencies
```` 
    npm install webpack -g          // 全局安装webpack
    npm install webpack --save-dev  // 本地安装webpack
    npm install  // 默认会安装两种依赖
    npm install --production  //只安装dependencies而不安装devDependencies。
````
* 2、如果不在全局安装只在本地安装的话，命令会比较繁琐。比如

   想要将根目录下的'/app/app.js'  编译后输出到'/build/login.js'.
  
```` 
  node_modules/.bin/webpack app/login.js public/bundle.js   //未全局安装webpack
  webpack app/login.js public/bundle.js   //全局安装webpack
````
* 3、鉴于2、中的两种运行方式都比较麻烦，npm命令本身可以引导任务执行，基本玩法就是结合 package.json 文件中的 scripts 对象进行相关配置即可，其中package.json这个文件就是npm的标准的说明文件，包括当前项目的依赖模块，自定义的脚本任务等。
  
```` 
 {
   "name": "webpack-sample-project",
   "version": "1.0.0",
   "description": "Sample webpack project",
   "scripts": {
     "start": "webpack" // 修改的是这里，JSON文件不支持注释，引用时请清除
   },
   "author": "zhang",
   "license": "ISC",
   "devDependencies": {
     "webpack": "^1.12.9"
   }
 }
 
````
````
注：package.json中的script会安装一定顺序寻找命令对应位置，本地的node_modules/.bin路径就在这个寻找清单中，所以无论是全局还是局部安装的Webpack，你都不需要写前面那指明详细的路径了。
npm的start命令是一个特殊的脚本名称，其特殊性表现在，在命令行中使用npm start就可以执行其对于的命令，如果对应的此脚本名称不是start，想要在命令行中运行时，需要这样用npm run {script name}如npm run build，所以简单粗暴的用法就是，我们都统一使用带有run的命令就好了
````
 * 4、使用webpack-dev-server搭建一个基于node.js的服务器
       其中在运行 webpack-dev-server --open 命令，就可以让服务器跑起来 ，后边的--open后缀，可以自动打开localhost地址
 ````
 npm install --save-dev webpack-dev-server
 ````
  * 5、webpack的模块化处理
  > Babel其实是几个模块化的包，其核心功能位于称为babel-core的npm包中，webpack可以把其不同的包整合在一起使用，对于每一个你需要的功能或拓展，你都需要安装单独的包（用得最多的是解析Es6的babel-preset-es2015包和解析JSX的babel-preset-react包）。
 ````
 npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
 ````
 #### css
   > css-loader 使你能够使用类似@import 和 url(...)的方法实现 require()或者import的功能
   
   > style-loader  将所有的计算后的样式加入页面中
````
npm install --save-dev style-loader css-loader
````
 > postcss-loader 为CSS代码自动添加适应不同浏览器的CSS前缀。
   
   > autoprefixer  为CSS代码自动添加适应不同浏览器的CSS前缀。
   
   > 然后要在根目录添加一个一个postcss.config.js。
````
npm install --save-dev postcss-loader autoprefixer
````
  * 6、webpack的配置文件的处理
  >默认的配置文件，就是当前目录下的webpack.config.js文件，如果需要指定另外的配置文件，可以执行webpack --config webpack.custom.config.js(名字随意命名)
  >> webpack --display-error-details 显示错误的详情
  > webpack的使用和browserify有些类似，下面列举几个常用命令：
  `````
  webpack 最基本的启动webpack命令
  webpack -w 提供watch方法，实时进行打包更新
  webpack -p 对打包后的文件进行压缩
  webpack -d 提供SourceMaps，方便调试  就是将错误定位到具体的js组件 而不是值提示bundle.js出问题了
  webpack --colors 输出结果带彩色，比如：会用红色显示耗时较长的步骤
  webpack --profile 输出性能数据，可以看到每一步的耗时
  webpack --display-modules 默认情况下 node_modules 下的模块会被隐藏，加上这个参数可以显示这些被隐藏的模块
  webpack --display-error-details 显示错误的详情
  `````
  * 7、webpack关于开发配置和产品环境
  ````
  "scripts": {
  "start": "NODE_ENV=dev webpack-dev-server --progress --colors",
  "build": "rm -rf ./build && NODE_ENV=production webpack --config ./webpack.production.config.js --progress --colors"
  },
  ````
  >这两个命令主要有以下区别：
   
   - 前者中默认使用 webpack.config.js 作为配置文件，而后者中强制使用 webpack.production.config.js 作为配置文件
   - 前者 `NODE_ENV=dev` 而后者 `NODE_ENV=production` ，标识不同的环境。而这个 `"dev" "production"` 可以在代码中通过 `process.env.NODE_ENV` 获取。
    - 前者中默认使用 webpack.config.js 作为配置文件，而后者中强制使用 webpack.production.config.js 作为配置文件
   * 8、webpack中关于本地搭建的服务器的配置
````
devServer: {
        proxy: {
            // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
            // koa 代码在 ./mock 目录中，启动命令为 npm run mock
            /*
            * 这里是在配置针对koa这个模块来配置自己搭建的3000端口的服务器
            * 自己运行的本地服务器是8000端口，但是api却是3000端口，这里的跨域访问正是通过webpack内部执行的一个代理，将8000端口的请求，转向到了3000端口
            * */
            '/api': {
                target: 'http://localhost:3000',
                secure: false
            }
        },
        contentBase: "./app", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
    },
````
* 9、关于webpack的配置文件

 >1、webpack的配置文件可以在package.json中指定,默认的是使用webpack.config.js
 指定自定义的配置文件的话 使用 --config '接上配置文件的相对package.json的路径'  打包本地文件的时候可以指定自定义配置文件 运行本地服务的时候也可以指定自定义配置文件
 ````
 "build": " NODE_ENV='这里定义为产品环境' webpack --config ./webpack.prod.js  --progress --colors ",
     "server": "NODE_ENV='这里定义NODE_ENV这个nodeJs的全局变量成dev，即开发版本'  webpack-dev-server --open",
     "serverCssModules": "NODE_ENV='这里定义NODE_ENV这个nodeJs的全局变量成dev，即开发版本'  webpack-dev-server --config ./webpack.config.CssModules.js --open",
 ````
 * 10、关于本地搭建服务器然后模仿后台甩接口的过程
 
  >1、我们利用的是koa以及koa-router这个组件  需要修改package.json文件，来运行该服务器（一个独立的terminal）
  来实现后台数据的模仿  后台部分的代码在mock文件夹下
  >2、需要更改webpack的配置文件中的devServer 设置代理 详见8中的配置
  ````
  
  ````
  * 11、文件中使用的fetch  原生支持promise的ajax的替代方法
  
    >1、在代码中的fetch文件夹下，封装了get和post请求  详细阅读即可很清楚的了解封装和使用
    >2、fetch方法首先返回的是promise对象，需要json()或者text()方法处理之后获得我们想要的数据
````
    
````
 * 12、css Modules的使用中技巧
  
    >1、参考阅读网址为：https://zhuanlan.zhihu.com/p/20495964
    >2、大体上cssModules使用中，css文件中只能使用普通的类选择器才定义样式，如果涉及到样式类名的复用，composes来实现，composes可以引用该css文件中的类选择器来复用，也可以引入其他css文件（通常为通用的样式文件）中的类
    
````
        /* settings.css */
        .primary-color {
          color: #f40;
        }
        
        /* components/Button.css */
        .base { /* 所有通用的样式 */ }
        
        .primary {
          composes: base;
          composes: primary-color from './settings.css';
          /* primary 其它样式 */
        }
````
   >3、个人感觉这个cssModules的使用，目前（20171026）使用起来还是感觉很别扭，style.className的使用模式也是比较拗手，因此基本确定项目中的css目前采用非模块化开发
    >4、如果一个标签想要引用多个样式，在使用非模块css的时候直接添加即可，如果使用模块化开发的时候，也是可以拼接来使用多个css类的样式，如下所示
````
// 非模块化的css开发 多个类的引用
<div className='className1 className2'></div> 
````

````
// 模块化的css开发 多个类的引用

//组件中引入css文件 在写css文件的时候不用导出，
//就跟普通css或者less文件一样的书写
import style from 'xx.css' 
// 注意{style.aaa}+' '+{style.bbb} 引号中是有一个空格的是  实际上变量{style.aaa}和{style.bbb}都会被解析成字符串的  所以在使用多个class类名的时候就是在做字符串的拼接
<div className={style.aaa}+' '+{style.bbb}></div> 
````

     