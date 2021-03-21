// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    // ES6中键值相同可以省略 router:router
    router,
    components: { App },
    template: '<App/>'
})

// 路由就是根据网址的不同，返回的页面不同
