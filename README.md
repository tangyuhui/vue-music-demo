# vue-music-demo

> A Vue.js project
##技术栈
+ vue全家桶（vue、vuex、vue-router）
+ axios (http请求)
+ scss（css预处理器语言）
+ es6
+ css3:css3动画及样式
+ webpack:自动化构建工具
+ api来源（感谢NeteaseCloudMusicApi项目提供的网易云接口的支持）
+ html5([audio标签](http://www.runoob.com/tags/ref-av-dom.html))
##功能介绍
>v.1.0

进入界面后先从缓存中拿播放列表，如果播放列表中存在歌曲，就跳到播放界面；
如若不存在播放列表，则直接跳到音乐榜单页供用户选择歌曲播放。

+ 音乐榜单页

 调用网易云接口查询榜单歌曲，点击加入播放列表，开始播放，并放入本地缓存（sessionStorage)
 
+ 歌曲播放页

 播放音乐，支持上一首、下一首、播放、暂停、调节音量、音乐资源报错时自动切换下一首歌，返回音乐榜单界面
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
