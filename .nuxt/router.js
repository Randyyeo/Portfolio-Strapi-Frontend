import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< HEAD
const _79d548e2 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _794a7d52 = () => interopDefault(import('../pages/education.vue' /* webpackChunkName: "pages/education" */))
const _30a3f10e = () => interopDefault(import('../pages/experience/index.vue' /* webpackChunkName: "pages/experience/index" */))
const _e1d1f7ca = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _099d912a = () => interopDefault(import('../pages/thanks.vue' /* webpackChunkName: "pages/thanks" */))
const _3a124214 = () => interopDefault(import('../pages/experience/_id.vue' /* webpackChunkName: "pages/experience/_id" */))
const _4e010101 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
=======
const _072b9981 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _5ad94ac9 = () => interopDefault(import('../pages/education.vue' /* webpackChunkName: "pages/education" */))
const _daa17948 = () => interopDefault(import('../pages/experience/index.vue' /* webpackChunkName: "pages/experience/index" */))
const _646ef72e = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _f0a26610 = () => interopDefault(import('../pages/thanks.vue' /* webpackChunkName: "pages/thanks" */))
const _56a32678 = () => interopDefault(import('../pages/experience/_id.vue' /* webpackChunkName: "pages/experience/_id" */))
const _52121373 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
>>>>>>> 6bf79260ff5ff70ae27947117fa078ee9430753b

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
<<<<<<< HEAD
    component: _79d548e2,
    name: "contact"
  }, {
    path: "/education",
    component: _794a7d52,
    name: "education"
  }, {
    path: "/experience",
    component: _30a3f10e,
    name: "experience"
  }, {
    path: "/projects",
    component: _e1d1f7ca,
    name: "projects"
  }, {
    path: "/thanks",
    component: _099d912a,
    name: "thanks"
  }, {
    path: "/experience/:id",
    component: _3a124214,
    name: "experience-id"
  }, {
    path: "/",
    component: _4e010101,
=======
    component: _072b9981,
    name: "contact"
  }, {
    path: "/education",
    component: _5ad94ac9,
    name: "education"
  }, {
    path: "/experience",
    component: _daa17948,
    name: "experience"
  }, {
    path: "/projects",
    component: _646ef72e,
    name: "projects"
  }, {
    path: "/thanks",
    component: _f0a26610,
    name: "thanks"
  }, {
    path: "/experience/:id",
    component: _56a32678,
    name: "experience-id"
  }, {
    path: "/",
    component: _52121373,
>>>>>>> 6bf79260ff5ff70ae27947117fa078ee9430753b
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
