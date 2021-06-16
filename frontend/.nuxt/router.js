import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0fc1ea67 = () => interopDefault(import('../pages/about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _490d8ab2 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _5460c32e = () => interopDefault(import('../pages/fracsol.vue' /* webpackChunkName: "pages/fracsol" */))
const _45481ba8 = () => interopDefault(import('../pages/fracsol/index.vue' /* webpackChunkName: "pages/fracsol/index" */))
const _0b6268c5 = () => interopDefault(import('../pages/fracsol/fdi.vue' /* webpackChunkName: "pages/fracsol/fdi" */))
const _de701f96 = () => interopDefault(import('../pages/fracsol/ml.vue' /* webpackChunkName: "pages/fracsol/ml" */))
const _081eefdf = () => interopDefault(import('../pages/fracsol/owm.vue' /* webpackChunkName: "pages/fracsol/owm" */))
const _109e1824 = () => interopDefault(import('../pages/fracsol/twm.vue' /* webpackChunkName: "pages/fracsol/twm" */))
const _6d0b00a8 = () => interopDefault(import('../pages/technology-and-solutions.vue' /* webpackChunkName: "pages/technology-and-solutions" */))
const _78fc73ce = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _0fc1ea67,
    name: "about-us"
  }, {
    path: "/contact",
    component: _490d8ab2,
    name: "contact"
  }, {
    path: "/fracsol",
    component: _5460c32e,
    children: [{
      path: "",
      component: _45481ba8,
      name: "fracsol"
    }, {
      path: "fdi",
      component: _0b6268c5,
      name: "fracsol-fdi"
    }, {
      path: "ml",
      component: _de701f96,
      name: "fracsol-ml"
    }, {
      path: "owm",
      component: _081eefdf,
      name: "fracsol-owm"
    }, {
      path: "twm",
      component: _109e1824,
      name: "fracsol-twm"
    }]
  }, {
    path: "/technology-and-solutions",
    component: _6d0b00a8,
    name: "technology-and-solutions"
  }, {
    path: "/",
    component: _78fc73ce,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
