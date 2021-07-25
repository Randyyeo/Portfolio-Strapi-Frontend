import { wrapFunctional } from './utils'

export { default as ExperienceDesc } from '../../components/ExperienceDesc.vue'
export { default as ExperienceDetails } from '../../components/ExperienceDetails.vue'
export { default as MyProjects } from '../../components/MyProjects.vue'
export { default as Project } from '../../components/Project.vue'
export { default as EducationDetails } from '../../components/educationDetails.vue'
export { default as LoginDetails } from '../../components/loginDetails.vue'

export const LazyExperienceDesc = import('../../components/ExperienceDesc.vue' /* webpackChunkName: "components/experience-desc" */).then(c => wrapFunctional(c.default || c))
export const LazyExperienceDetails = import('../../components/ExperienceDetails.vue' /* webpackChunkName: "components/experience-details" */).then(c => wrapFunctional(c.default || c))
export const LazyMyProjects = import('../../components/MyProjects.vue' /* webpackChunkName: "components/my-projects" */).then(c => wrapFunctional(c.default || c))
export const LazyProject = import('../../components/Project.vue' /* webpackChunkName: "components/project" */).then(c => wrapFunctional(c.default || c))
export const LazyEducationDetails = import('../../components/educationDetails.vue' /* webpackChunkName: "components/education-details" */).then(c => wrapFunctional(c.default || c))
export const LazyLoginDetails = import('../../components/loginDetails.vue' /* webpackChunkName: "components/login-details" */).then(c => wrapFunctional(c.default || c))
