import Home from '@/views/Home'
import Search from '@/views/Search'
import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '@/views/NotFound'
Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '*', component: NotFound },
    { name:'search',path: '/search/:words?', component: Search }
  ]
})

export default router