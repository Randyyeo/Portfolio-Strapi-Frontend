import axios from "axios"
const origin = process.env.origin
const setHeader = ()=>{
    return {
      headers:{
                'Content-Type': 'application/json',
                
              }
    }
}

export default {
    async getEducation(data) {
        
        return await axios.get(`${origin}/educations`, { params: data.params }, setHeader())
        
    },
    async getExperience(data){
        return await axios.get(`${origin}/experiences`,{params:data.params}, setHeader())
    },
    async getProjects(){
        return await axios.get(`${origin}/projects`, setHeader())
    },
    async getLanguage(){
        return await axios.get(`${origin}/languages`, setHeader())
    }
}