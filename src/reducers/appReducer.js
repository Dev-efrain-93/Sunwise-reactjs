/**
 * User reducer para control de tema
 * 
 */
const defaultState = {
    theme: 'light'
}

const appReducer = (state = defaultState, action) => {
    switch(action.type){
        case "TOGGLE_THEME":
            return {
                theme: action.payload
            }
        default:
            return state;
    }
}

export default appReducer;