import Vue from 'vue'
import App from './App.vue'
import router from './router'    //这里引入的是router目录，会默认识别里面的index.js文件（不能是其他名字）
// 引入并使用vue-resource网络请求模块
import VueResource from 'vue-resource'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/style/css.css'

Vue.use(VueResource);
Vue.use(Mint);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
  // 这里的render: h => h(App)是es6的写法
  // 转换过来就是：  暂且可理解为是渲染App组件
  // render:(function(h){
  //     return h(App);
  // });
})