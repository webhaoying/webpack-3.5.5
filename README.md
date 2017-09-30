# webpack-3.5.5
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
````
* 2、如果不在全局安装只在本地安装的话，命令会比较繁琐。比如

   想要将根目录下的'/app/app.js'  编译后输出到'/build/main.js'.
  
```` 
  node_modules/.bin/webpack app/main.js public/bundle.js   //未全局安装webpack
  webpack app/main.js public/bundle.js   //全局安装webpack
````
* 3、鉴于2、中的两种运行方式都比较麻烦，npm命令本身可以引导任务执行，基本玩法就是结合 package.json 文件中的 scripts 对象进行相关配置即可
  
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