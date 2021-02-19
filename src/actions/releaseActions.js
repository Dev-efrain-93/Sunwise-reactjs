//tipos de acciones
const GET_RELEASES = 'FETCH_RELEASES';

//acciones
const getReleases = (releases) => ({ type: GET_RELEASES, payload: releases });

/**
 * Obtiene los ultimos lanzamientos semanales
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