import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  ContactMail: () => import('../../components/ContactMail.vue' /* webpackChunkName: "components/contact-mail" */).then(c => wrapFunctional(c.default || c)),
  ExperienceDesc: () => import('../../components/ExperienceDesc.vue' /* webpackChunkName: "components/experience-desc" */).then(c => wrapFunctional(c.default || c)),
  ExperienceDetails: () => import('../../components/ExperienceDetails.vue' /* webpackChunkName: "components/experience-details" */).then(c => wrapFunctional(c.default || c)),
  EducationDetails: () => import('../../components/educationDetails.vue' /* webpackChunkName: "components/education-details" */).then(c => wrapFunctional(c.default || c)),
  LoginDetails: () => import('../../components/loginDetails.vue' /* webpackChunkName: "components/login-details" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
