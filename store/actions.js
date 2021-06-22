import STRAPI from "../api/strapi"

export default {
    getEducation({ commit }, data){
        return new Promise((resolve, reject) => {
            STRAPI.getEducation({params: data.params}).then(response => {
                commit("SET_EDUCATION", response.data)
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
                commit("SET_EXPERIENCE", response.data)
                resolve(response)
            }).catch(error => {
                console.log(error)
                return reject(error)
            })
            
        })
    }
}

