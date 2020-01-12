import Vue from 'vue'
import Router from 'vue-router'
import AuthRequired from './utils/AuthRequired'

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "app" */ './views/app'),
    redirect: '/app/loockee',
    beforeEnter: AuthRequired,
    children: [
      {
        path: 'app/loockee',
        component: () => import(/* webpackChunkName: "loockee" */ './views/app/loockee'),
        redirect: '/app/loockee/home',
        children: [
          { path: 'home', component: () => import(/* webpackChunkName: "loockee" */ './views/app/loockee/Home') }
        ]
      },
      {
        path: 'app/konnekt',
        component: () => import(/* webpackChunkName: "konnekt" */ './views/app/konnekt'),
        redirect: '/app/konnekt/home',
        children: [
          { path: 'home', component: () => import(/* webpackChunkName: "konnekt" */ './views/app/konnekt/Home') },
          { path: 'profile/:id', component: () => import(/* webpackChunkName: "konnekt" */ './views/app/konnekt/Profile') }
        ]
      },
      {
        path: 'app/second-menu',
        component: () => import(/* webpackChunkName: "second-menu" */ './views/app/secondMenu'),
        redirect: '/app/second-menu/second',
        children: [
          { path: 'second', component: () => import(/* webpackChunkName: "second-menu" */ './views/app/secondMenu/Second') }
        ]
      },
      {
        path: 'app/single',
        component: () => import(/* webpackChunkName: "single" */ './views/app/single')
      }
    ]
  },
  { path: '/error', component: () => import(/* webpackChunkName: "error" */ './views/Error') },
  {
    path: '/user',
    component: () => import(/* webpackChunkName: "user" */ './views/user'),
    redirect: '/user/login',
    children: [
      { path: 'login', component: () => import(/* webpackChunkName: "user" */ './views/user/Login') },
      { path: 'register', component: () => import(/* webpackChunkName: "user" */ './views/user/Register') },
      { path: 'forgot-password', component: () => import(/* webpackChunkName: "user" */ './views/user/ForgotPassword') }
    ]
  },
  { path: '*', component: () => import(/* webpackChunkName: "error" */ './views/Error') }
]

const router = new Router({
  linkActiveClass: 'active',
  routes,
  mode: 'history'
})

export default router
