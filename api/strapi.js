import axios from "axios"
const origin = "http://localhost:1337"

export default {
    async getEducation(data){
        return await axios.get(`${origin}/educations`,{params:data.params})
    },
    async getExperience(data){
        return await axios.get(`${origin}/experiences`,{params:data.params})
    }
}