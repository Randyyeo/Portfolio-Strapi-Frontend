import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _70fd5a9c = () => interopDefault(import('../pages/education/index.vue' /* webpackChunkName: "pages/education/index" */))
const _3fc84bf6 = () => interopDefault(import('../pages/experience/index.vue' /* webpackChunkName: "pages/experience/index" */))
const _15ce71fa = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _ef6f4ccc = () => interopDefault(import('../pages/education/_id.vue' /* webpackChunkName: "pages/education/_id" */))
const _6dc4d3de = () => interopDefault(import('../pages/experience/_id.vue' /* webpackChunkName: "pages/experience/_id" */))
const _35ef31ce = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/education",
    component: _70fd5a9c,
    name: "education"
  }, {
    path: "/experience",
    component: _3fc84bf6,
    name: "experience"
  }, {
    path: "/projects",
    component: _15ce71fa,
    name: "projects"
  }, {
    path: "/education/:id",
    component: _ef6f4ccc,
    name: "education-id"
  }, {
    path: "/experience/:id",
    component: _6dc4d3de,
    name: "experience-id"
  }, {
    path: "/",
    component: _35ef31ce,
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
