/**
 * Reducer para las listas de reproduccion destacadas
 * 
 */
const defaultState = {
    featuredPlaylists: []
}

const featuredPlaylistsReducer = (state = defaultState, action) => {

    switch(action.type){        
        case "FETCH_FEATURED_PLAYLISTS":
            return {
                featuredPlaylists: action.payload
            }
        default:
            return state;
    }
}

export default featuredPlaylistsReducer;