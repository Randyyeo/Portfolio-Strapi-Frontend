import STRAPI from "../api/strapi"

export default {
    getEducation({ commit }, data){
        return new Promise((resolve, reject) => {
            STRAPI.getEducation({params: data.params}).then(response => {
                commit("SET_EDUCATION", response.data.reverse())
                resolve(response)
            }).catch(error => {
                console.log(error)
                return reject(error)
            })
            
        })
            
        
        
    },
    getExperience({ commit }, data){
        return new Promise((resolve, reject) => {
            STRAPI.getExperience({params: data.params}).then(response => {
                commit("SET_EXPERIENCE", response.data.reverse())
                resolve(response)
            }).catch(error => {
                console.log(error)
                return reject(error)
            })
            
        })
    },
    getProjects({ commit }){
        return new Promise((resolve, reject) => {
            STRAPI.getProjects().then(response=>{
                /* commit("SET_PROJECTS", response.data) */
                resolve(response)
            }).catch(error => {
                console.log(error)
                return reject(error)
            })
        })
    },
    getLanguages({ commit }){
        return new Promise((resolve, reject) => {
            STRAPI.getLanguage().then(response=>{
                /* commit("SET_PROJECTS", response.data) */
                resolve(response)
            }).catch(error => {
                console.log(error)
                return reject(error)
            })
        })
    }
}

