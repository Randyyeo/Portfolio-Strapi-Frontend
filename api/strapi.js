import axios from "axios"
const origin = "https://portfolio-app-with-strapi.herokuapp.com"

export default {
    async getEducation(data){
        console.log(origin)
        return await axios.get(`${origin}/educations`,{params:data.params})
    },
    async getExperience(data){
        return await axios.get(`${origin}/experiences`,{params:data.params})
    }
}