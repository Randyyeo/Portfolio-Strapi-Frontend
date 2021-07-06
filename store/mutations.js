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
        data.forEach(element => {
            element.dialog = false
        });
        state.education = data
        console.log(data)
    },
    SET_EXPERIENCE(state, data){
        state.experience = data
    },
    SET_ID(state, data){
        state.id = data
    },
    SET_DIALOG(state, data){
        console.log(data)
        let education = state.education
        console.log(education)
        education[data].dialog == !education[data].dialog
        state.education = education
    }
}