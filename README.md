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
     