/**
 * Reducer para las categorias de exploracion
 * 
 */
const defaultState = {
    categories: []
}

const categoriesReducer = (state = defaultState, action) => {

    switch(action.type){        
        case "FETCH_CATEGORIES":
            return {
                categories: action.payload
            }
        default:
            return state;
    }
}

export default categoriesReducer;