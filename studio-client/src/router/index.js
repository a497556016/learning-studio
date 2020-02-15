import Vue from 'vue'
import VueRouter from 'vue-router'

import store from "../store"

import Login from "../views/Login";
import Index from "../views/Index";
import Home from '../views/Home.vue'
import BlogDetails from "../views/Document/Details";
import BlogEdit from "../views/Document/Edit";
import Oauth from "../views/Oauth";

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: '登录',
        component: Login
    },
    {
        path: '/oauth',
        name: '权限验证',
        component: Oauth
    },
    {
        path: '/',
        name: "主页",
        component: Index,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: '主页',
                component: Home
            },
            {
                path: '/about',
                name: 'about',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
            },

            {
                path: '/blog/details/:id',
                name: '详情',
                component: BlogDetails
            },
            {
                path: '/blog/edit/:id',
                name: '编辑',
                component: BlogEdit
            }
        ]
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
   console.log(from, to);
   if(to.path !== '/oauth') {
       //check login
        const loginUser = store.getters['app/getLoginUser'];
        if(!loginUser) {
            next("/oauth");
        }
   }
   next();
});

export default router
