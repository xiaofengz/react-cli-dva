# react-cli
react脚手架，webpack/dva(react-router4)参考的ant design pro

## 文件结构 (File structure)

```
├── build                       webpack配置
├── src                         生产目录
    |—— assets                  静态资源
    |—— common                  路由按需加载，路由结构   
    |—— components              业务组件，公共组件
    |—— layouts                 不同布局入口组件
    |—— less                    公共less
    |—— models                  dva models   
    |—— routes                  不同路由组件
    |—— services                services层，接口请求
    |—— utils                   封装公共方法
       |———— utils.js           公共方法
       |———— xhr.js             dva/fetch 请求统一处理（可自选axios等）
    |——|—— index.html           html文件
    |——|—— index.js             入口js
    |——|—— router.js            dva-router
├── .babelrc                    项目build目录
├── gulpfile.js                 gulp打包(可不用)
├── package.json                项目配置文件

```
# 启动 Setup

    npm install

    npm run dev

