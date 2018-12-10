# bilibili仿站vue

目前B站也是用的vue框架，自己试试用vue搭建B站，巩固一下学习的vue知识
> 更新 接口替换为[Easy Mock](https://github.com/easy-mock/easy-mock)代理真实数据接口

## 如何安装与使用


```
git clone https://github.com/zlyyyy/zly-vue-project.git  //下载项目

cd zly-vue-project //进入zly-vue-projec目录

npm install //安装依赖

npm run dev //服务端运行

npm run build  //项目打包
```
## 技术栈

- Vue-Cli（Vue 脚手架工具）
- Vue（核心框架）
- Vue-Router（页面路由）
- Vuex（状态管理）
- ES 6 / 7 （JavaScript 语言的下一代标准）
- Sass（CSS预处理器）
- Axios（网络请求）

## 部分截图


<img src="https://github.com/zlyyyy/zly-vue-project/blob/master/screenshots/home.png" width="898" />

#### 文件架构

```
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── screenshots                                 // 项目截图
├── src                                         // 源码目录
│   ├── api                                     
│   │   └──  index.js                           // 接口配置
│   ├── assets                                  // 图片文件
│   ├── components                              // 组件
│   │   │   ├── ad                 
│   │   │   │   └── adSlide.vue                 // 广告位轮播组件
│   │   │   ├── dropdown                 
│   │   │   │   └── dropdown.vue                // 下拉选择组件
│   │   │   ├── foot
│   │   │   │   └── footer.vue                  // 底部公共组件
│   │   │   ├── head
│   │   │   │   └── header.vue                  // 头部公共组件
│   │   │   ├── loginIn
│   │   │   │   └── loginIn.vue                 // 登录注册组件
│   │   │   ├── navMenu
│   │   │   │   └── navMenu.vue                 // 头部公用菜单组件
│   │   │   ├── popularize
│   │   │   │   └── popularize.vue              // 首页推广模块组件
│   │   │   ├── ranking
│   │   │   │   └── allList.vue                 // 排行榜页面排行组件
│   │   │   ├── recommend
│   │   │   │   └── recommend.vue               // 首页推荐内容组件
│   │   │   ├── search
│   │   │   │   └── searchList.vue              // 搜索页面搜索结果组件
│   │   │   ├── slide
│   │   │   │   └── slide.vue                   // 首页轮播图组件
│   │   │   ├── storeyBox
│   │   │   │   └── storeyBox.vue               // 新动态、新投稿组件
│   │   │   ├── timingBox
│   │   │   │   └── timingBox.vue               // 首页更新时间表组件
│   │   │   ├── zoneModule
│   │   │   │   └── zoneModule.vue              // 首页分类模块组件
│   │   │   ├── zoneRank
│   │   │       └── zoneRank.vue                // 首页分类模块内部排行组件
│   ├── pages                                  
│   │   ├── home
│   │   │   └── index.vue                       // 首页
│   │   ├── notFound
│   │   │   └── 404.vue                         // 404
│   │   ├── ranking
│   │   │   └── ranking.vue                     // 排行榜页面
│   │   ├── search
│   │   │   └── search.vue                      // 搜索页面
│   │   ├── video
│   │       └── video.vue                       // 播放视频页面
│   ├── router                                  
│   │   └── index.js                            // 路由配置页面
│   ├── store                                   // vuex的状态管理
│   │   ├── modules                             // store模块
│   │   │   ├── 404.js                          // 404模块
│   │   │   ├── bangumi.js                      // 番剧模块
│   │   │   ├── donghua.js                      // 动画模块
│   │   │   ├── guochuang.js                    // 国创模块
│   │   │   ├── header.js                       // 公用头部模块
│   │   │   ├── index.js                        // 首页模块
│   │   │   ├── login.js                        // 登录注册模块
│   │   │   ├── ranking.js                      // 排行榜页面模块
│   │   │   ├── search.js                       // 搜索页面模块
│   │       └── video.js                        // 视频播放模块
│   │   ├── action.js                           // 配置actions
│   │   ├── getters.js                          // 配置getters
│   │   ├── index.js                            // 引用vuex，组装各个配置
│   │   ├── mutation-types.js                   // 定义常量muations名
│   │   ├── mutation.js                         // 配置mutations
│   │   └── state.js                            // 配置store
│   ├── style
│   │   ├── common.scss                         // 公共样式文件
│   │   └── mixin.scss                          // 样式配置文件
│   └── utils
│   │   ├── http.js                             // axios二次封装
│       └── utils.js                            // 公共方法配置
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── static                                      // 静态资源文件目录 
├── index.html                                  // 入口html文件
.

```