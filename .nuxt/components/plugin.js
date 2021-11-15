import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  ExperienceDesc: () => import('../../components/ExperienceDesc.vue' /* webpackChunkName: "components/experience-desc" */).then(c => wrapFunctional(c.default || c)),
  ExperienceDetails: () => import('../../components/ExperienceDetails.vue' /* webpackChunkName: "components/experience-details" */).then(c => wrapFunctional(c.default || c)),
  MyProjects: () => import('../../components/MyProjects.vue' /* webpackChunkName: "components/my-projects" */).then(c => wrapFunctional(c.default || c)),
  Project: () => import('../../components/Project.vue' /* webpackChunkName: "components/project" */).then(c => wrapFunctional(c.default || c)),
  EducationDetails: () => import('../../components/educationDetails.vue' /* webpackChunkName: "components/education-details" */).then(c => wrapFunctional(c.default || c)),
  Homepage: () => import('../../components/homepage.vue' /* webpackChunkName: "components/homepage" */).then(c => wrapFunctional(c.default || c)),
  LoginDetails: () => import('../../components/loginDetails.vue' /* webpackChunkName: "components/login-details" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
