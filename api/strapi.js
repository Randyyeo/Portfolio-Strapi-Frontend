import axios from "axios"
const origin = process.env.origin

export default {
    async getEducation(data) {
        console.log("HELLO")
        return await axios.get(`${origin}/educations`, { params: data.params })
        c
    },
    async getExperience(data){
        return await axios.get(`${origin}/experiences`,{params:data.params})
    },
    async getProjects(){
        return await axios.get(`${origin}/projects`)
    }
}