export default {
    error({state}){
        state.error = "error"
    },
    setDetail(state, data){
        
        state.details = data
    },
    seeDesc(state){
        state.see = !state.see
    },
    SET_EDUCATION(state, data){
        
        
        
    },
    SET_EXPERIENCE(state, data){
        state.experience = data
    },
    SET_ID(state, data){
        state.id = data
    },
    SET_DIALOG(state, data){
        
        let education = state.education
        
        education[data].dialog == !education[data].dialog
        state.education = education
    },
    SET_PROJECTS(state, data){
        state.projects = data
    }
}