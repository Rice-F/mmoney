// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 移动端300ms点击优化
import fastClick from 'fastclick'
// 轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'
// 解决2、3倍屏的1px边框问题
import 'styles/border.css'
// 解决不支持promise的手机会出现白屏的问题
import 'babel-polyfill'
// 无限加载
import VueScroller from 'vue-scroller'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(VueScroller)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
