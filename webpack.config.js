/**
 * Created by roboterra_rd on 2017/9/29.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports ={
    // 整个配置文件的解读，建议浏览 http://www.jianshu.com/p/42e11515c10f
    // devtool 这个是为了便于调试的时候及时发现错误，如果没有这个设置，错误只提示你bundle.js出错，但不能定位具体是哪个js文件
    // 本质就是在打包bundle的时候，生成一个资源树，这个树就辅助了错误定位。
    devtool: 'eval-source-map',
    // __dirname 会获取当前文件的目录，不包括当前文件，但是 __filename 也是路径，包括文件本身，二者均是node自带的全局变量
    // 有了这两个全局变量的路径，后边添加的路径要使用绝对路径，因为他是按照据对路径的解析方式拼接
    entry:__dirname + '/app/main.js',// 唯一的入口文件
    output:{
        path:__dirname + '/dev',// 打包后的文件存放的地方
        filename: 'bundle.js'// 打包后输出文件的文件名
    },
    // 这里是用来扩展，就是可以回头引入的时候省略后缀之类的
    resolve:{
        extensions:[' ','.js','.jsx']
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        // inline: true//实时刷新
    },
    // 这里是针对文件模块化的设置
    module: {
        rules: [// rules里边就是针对不同的文件类型的处理的配置
            {
                //正则删选出jsx  js文件
                test: /(\.jsx|\.js)$/,
                // 针对每一个文件类型  webpack都需要一个特定的loader来处理，需要安装对应的组件，并且在此配置并使用
                // 在此位置，利用babel的时候   需要本地安装四个组件
                //babel-core  babel的核心功能哦快
                // babel-loader  loader本身
                // babel-preset-es2015  负责ES6--> ES5的编译
                // babel-preset-react  负责react的JSX语法--->html+es5的编译
                use: {
                    loader: "babel-loader",
                    //此处的options选项可以删除，把他的值复制到根目录下的.babelrc文件下，也可以写在这里，只是
                    //由于配置文件太大的话   不易于阅读
                    // options: {
                    //     presets: [
                    //         "es2015", "react"
                    //     ]
                    // }
                },
                // exclude 与include是指定包括或者不包括的文件   即正则判断的文件类型的时候，范围的控制
                exclude: /node_modules/
            },


            {
                test: /\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:  "style-loader",//将所有的计算后的样式加入页面中
                    use:[// 这里的use  参数值可以是数组也可以是字符串也可以是对象   可以根据文档轻松获得使用方法
                        //https://webpack.js.org/plugins/extract-text-webpack-plugin/
                            {
                                loader: "css-loader" , //使你能够使用类似@import 和 url(...)的方法实现 require()或者import的功能
                                options:{ // 这个配置项就是将css模块化 只作用于当前模块 而不会全局污染
                                    /*
                                     * 有了这个属性，就决定了虽然是相同的属性名 只要是来源于不同的css文件的属性
                                     *  无论是哪个js组件引用，样式都不会互相污染，因为webpack会将css属性名做一个hash处理
                                     *  简单来讲，webpack让每一个引入进来的className 都处理成了唯一的值
                                     例如 我在Greeter.js引入了两个相同的classnaName的属性，是互不干扰的
                                     */
                                    modules:true

                                }
                            },
                            {
                                loader:"postcss-loader"
                            }
                        ]
                    }

                )


            },
            {
                test: /\.less$/,
                use:ExtractTextPlugin.extract({
                        fallback:  "style-loader",//将所有的计算后的样式加入页面中
                        use:[// 这里的use  参数值可以是数组也可以是字符串也可以是对象   可以根据文档轻松获得使用方法
                            //https://webpack.js.org/plugins/extract-text-webpack-plugin/
                            {
                                loader: "css-loader" , //使你能够使用类似@import 和 url(...)的方法实现 require()或者import的功能
                                options:{ // 这个配置项就是将css模块化 只作用于当前模块 而不会全局污染
                                    /*
                                     * 有了这个属性，就决定了虽然是相同的属性名 只要是来源于不同的css文件的属性
                                     *  无论是哪个js组件引用，样式都不会互相污染，因为webpack会将css属性名做一个hash处理
                                     *  简单来讲，webpack让每一个引入进来的className 都处理成了唯一的值
                                     例如 我在Greeter.js引入了两个相同的classnaName的属性，是互不干扰的
                                     */
                                    modules:true

                                }
                            },
                            {
                                loader:"postcss-loader"
                            },

                            {
                                loader:"less-loader"
                            }
                        ]
                    }

                )


            }

        ]
    },
    plugins:[
        //Adds a banner to the top of each generated chunk.
        new webpack.BannerPlugin('版权所有，翻版必究,zhanghao hehe'),// 用来在打包出来的文件头部添加上自己想要的文字注释描述
        new webpack.optimize.UglifyJsPlugin(),// 用来给js文件压缩
        new HtmlWebpackPlugin({
            template:__dirname + "/app/index.tmp.html" //new 一个这个插件的实例，并传入相关的参数 如果入口的index.html每次引用不同的js文件，那么这个插件的使用就会在导出目录中自动生成一个index.html 并且引用着正确的js文件（js有哈希的后缀名）
        }),
        new ExtractTextPlugin('[name].[chunkhash:8].css'),//将css文件从js文件中分离出来  一般的产品环境需要
        //这里是为了定义是开发环境还是产品环境
        new webpack.DefinePlugin({
            'process.env': {
                // NODE_ENV: '"dev"',
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
                //  因为在package.json中已经在服务器启用的时候，已经定义了全局变量NODE_ENV 这里只是定义一个前端的全局变量，目的就是为了能够拿到项目状态是开发还是产品
            }
        }),

    ],
    // watch:true,

}