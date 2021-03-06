var webpack = require('webpack');


//console.log(webpack.optimize.UglifyJsPlugin);



module.exports = {
    //entry 入口
    //用来设置你要编译的入口文件
    // 我们现在就把one.js当做我们的入口文件
    entry: './js/one.js',
    // entry: {
    //     app: './js/one.js',
    //     app2: './js/two.js'
    // }

    //输出   用来设置编译后的文件到底要存放到哪里去，以及编译后的文件叫什么名字
    output: {
        //用来设置路径
        //虽然现在没有dist文件夹，它会自动生成

        // __dirname  表示当前文件的目录
        // 绝对路径
        path: __dirname + '/dist',

        // 用来设置文件名
        filename: 'app.js'
    },

    module: {
        loaders: [{
                //是一个正则表达式，用来设置要处理文件的类型的，一般都是匹配后缀名
                test: /\.css$/,

                // 它的值就是处理样式文件所要用到的加载器的名字
                loader: 'style-loader!css-loader'
            }, {
                //用来处理图片的
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader'
            }

        ]
    },

    plugins: [
        //用来做js压缩的
        new webpack.optimize.UglifyJsPlugin()
    ]

};