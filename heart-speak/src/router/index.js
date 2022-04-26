import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/Login'
import '../assets/css/global.css'
import '../components/Home'
import Home from "@/components/Home"

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
// const originalPush = Router.prototype.push
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)}


Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/login'},
    {path: '/login', component: login},
    {path: '/home', component: Home }
]

const router = new VueRouter({
    routes,

})

// router.beforeEach((to, from, next) => {
//     //to 将要访问的网页
//     //from 代表从哪个路径跳转过来
//     //next 是一个函数，表示放行
//     //      next()  next('/login') 强制跳转
//     if (to.path === '/login') return next();
//
//     const tokenStr = window.sessionStorage.getItem('token')
//     if (!tokenStr) return next('/login')
//     next()
//
// })

export default router
