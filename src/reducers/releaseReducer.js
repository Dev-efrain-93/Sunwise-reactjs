/**
 * Reducer para los lanzamientos de la semana
 * 
 */
const defaultState = {
    newReleases: []
}

const releaseReducer = (state = defaultState, action) => {

    switch(action.type){
        case "FETCH_RELEASES":
            return {
                newReleases: action.payload
            }
        default:
            return state;
    }
}

export default releaseReducer;