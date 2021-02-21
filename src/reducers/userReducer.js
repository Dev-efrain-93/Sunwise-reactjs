/**
 * User reducer para control de actions del usuario
 * 
 */
const defaultState = {
    logeado: false,
    user: {}
}

const userReducer = (state = defaultState, action) => {

    switch(action.type){
        case "FETCH_USER_INFO":
            return {
                logeado: true,
                user: action.payload
            }
        case "USER_ERROR":
            return {
                logeado: false
            }
        default:
            return state;
    }
}

export default userReducer;