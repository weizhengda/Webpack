
# webpack的使用优化

## 优化点一、区分开发及生产环境

1. 在package.json里面的script设置环境变量，注意mac与windows的设置方式不一样

```js
   "scripts": {
    "publish-mac": "export NODE_ENV=prod&&webpack -p --progress --colors",
    "publish-win":  "set NODE_ENV=prod&&webpack -p --progress --colors"
}
```

2. 在webpack.config.js使用process.env.NODE_ENV进行判断

## 优化点二、使用代码热替换
使用代码热替换在开发的时候无需刷新页面即可看到更新，而且，它将构建的内容放入内在中，能够获得更快的构建编译性能，因此是官方非常推荐的一种构建方式。

### 方法1
1. 将代码内联到js入口
2. 启动代码热替换的plugins

## 方法二：

直接实现一个server.js，启动服务器（需要启动热替换plugin)，下面是我在业务中用到的一个范例。具体的一些参数可以

```js
var webpack = require('webpack');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackDevServer = require('webpack-dev-server');
var config = require("./webpack.config.js");
 
config.entry.index.unshift("webpack-dev-server/client?http://localhost:9000");  // 将执替换js内联进去
config.entry.index.unshift("webpack/hot/only-dev-server");
var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
    hot: true,
    historyApiFallback: false,
    // noInfo: true,
    stats: { 
        colors: true  // 用颜色标识
    },
    proxy: {
        "*": "http://localhost:9000" // 用于转发api数据，但webpack自己提供的并不太好用
    },
});
server.listen(9000);
```

## 方法三：

直接在webpack.config.js上配置。这个办法最简单，当然灵活性没有自己实现一个服务器好。