//tipos de acciones
const GET_RELEASES = 'FETCH_RELEASES';
const GET_FEATURED_PLAYLISTS = 'FETCH_FEATURED_PLAYLISTS';
const GET_CATEGORIES = 'FETCH_CATEGORIES';

//acciones
const getReleases = (releases) => ({ type: GET_RELEASES, payload: releases });
const getFeaturedPlaylists = (featuredPlaylists) => ({ type: GET_FEATURED_PLAYLISTS, payload: featuredPlaylists });
const getCategories = (categories) => ({ type: GET_CATEGORIES, payload: categories});

/**
 * Obtiene las canciones lanzadas durante la semana actual
 * 
 */
export const fetchReleases = () => dispatch => {
    fetch(`https://api.spotify.com/v1/browse/new-releases`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(data => {        
        dispatch(getReleases(data.albums.items))
    })
}

/**
 * Obtiene las listas de reproduccion destacadas
 * 
 */
export const fetchFeaturedPlaylists = () => dispatch => {
    fetch(`https://api.spotify.com/v1/browse/featured-playlists`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(data => {        
        dispatch(getFeaturedPlaylists(data.playlists.items))
    })
}

/**
 * Obtiene listado de categorías de exploración
 * 
 */
export const fetchCategories = () => dispatch => {
    fetch(`https://api.spotify.com/v1/browse/categories`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(data => {        
        dispatch(getCategories(data.categories.items))
    })
}