import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _284d4774 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _ac363d02 = () => interopDefault(import('../pages/education/index.vue' /* webpackChunkName: "pages/education/index" */))
const _ac52d26e = () => interopDefault(import('../pages/experience/index.vue' /* webpackChunkName: "pages/experience/index" */))
const _702990b2 = () => interopDefault(import('../pages/education/_id.vue' /* webpackChunkName: "pages/education/_id" */))
const _227db771 = () => interopDefault(import('../pages/experience/_id.vue' /* webpackChunkName: "pages/experience/_id" */))
const _a8c6bbb4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _284d4774,
    name: "contact"
  }, {
    path: "/education",
    component: _ac363d02,
    name: "education"
  }, {
    path: "/experience",
    component: _ac52d26e,
    name: "experience"
  }, {
    path: "/education/:id",
    component: _702990b2,
    name: "education-id"
  }, {
    path: "/experience/:id",
    component: _227db771,
    name: "experience-id"
  }, {
    path: "/",
    component: _a8c6bbb4,
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
