# project_vue
### 结构

基于 Vue 框架，通过 Vue-cli 脚手架搭建，使用 Vue 单文件组件进行开发，CSS 使用 stylus 框架，webpack 进行配置打包，使用 git 进行版本管理 

### 主要功能

开发去哪儿网的首页、城市列表页面、详情页面，实现包括轮播图、搜索城市、字母表布局、 公用画廊、渐隐渐显效果等功能 ；使用 axios 获取接口数据，使用 Better-scroll 滚动插件，应用递归组件，通过 Vuex 实现多个页面间的数据共享，localStorage 实现本地存储， keep-alive 优化网页性能，封装画廊动画效果

### 首页

header、轮播图（vue-awesome-swiper库）、小图标区域、推荐模块

![home](E:\Develop\js\travel\images\home.png)

![U$IO12T@19F2$0ZHGPTG$V1](E:\Develop\js\travel\images\U$IO12T@19F2$0ZHGPTG$V1.png)

### 选择城市页面

输入城市自动匹配、拖动右边字母表显示某个字母开头的城市列表、选择城市后自动跳转回首页

![city](E:\Develop\js\travel\images\city.png)

### 细节页面

实现画廊区域、递归组件显示联票、header的渐隐渐显

![detail](E:\Develop\js\travel\images\detail.png)

![画廊](E:\Develop\js\travel\images\画廊.png)![渐隐渐显](E:\Develop\js\travel\images\渐隐渐显.png)