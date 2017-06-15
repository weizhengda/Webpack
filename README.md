# Webpack


##使用方法

   1. 下载安装webpack

        cnpm install -g webpack

        webpack -v (验证是否安装成功，安装成功会出现版本号)

   2. 做项目

        cnpm init

        在项目下安装 webpack

            cnpm install --save-dev webpack

        项目根目录下 创建一个 webpack.config.js (webpack 配置文件)

        去配置你的webpack.config.js 文件

        （ 需要用到很多的 loaders 加载器 ，要用什么加载器，就得去安装什么加载器 ）

        加载器的配置

        moudle: {
                          loaders: [                  // 配置加载器  是一个数组
                              {
                                  test: /\.js$/,       // 正则匹配 。匹配上你要做某个操作的文件
                                  loader: 'jsx-loader'
                              }
                          ]
                      }

        配置文件写好，并且代码也好了。要运行的时候，只需要在 cmd 里面运行 webpack 这个命令 这个命令 就会 按照你的 配置文件里面的规则去做模块化打包

ps: 在webpack 方式里面，要对 jsx 做翻译的过程 我们需要使用到一个加载器 jsx-loader

要使用 react 安装 react   react-dom

    现在是每次改动都需要手动的去 在 cmd 里面重新 webpack 命令 使用 webpack-dev-server 就能够使我们的代码自动打包 ，并且还会自动刷新浏览器

      3.  全局安装webpack-dev-server

        修改 webpack.config.js 文件 给 output 加上一个属性 publicPath: '/dist' dist是你的打包的目录文件夹

        在项目下 使用 webpack-dev-server 这个命令 去替代 webpack 命令

