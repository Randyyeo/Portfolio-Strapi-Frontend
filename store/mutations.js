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
        state.education = data
    },
    SET_EXPERIENCE(state, data){
        state.experience = data
    },
    SET_ID(state, data){
        state.id = data
    }
}