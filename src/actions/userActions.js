//tipos de acciones
const GET_USER_INFO = 'FETCH_USER_INFO';

//acciones
const getUserInfo = (user) => ({ type: GET_USER_INFO, payload: user });

/**
 * Obtiene la metainfo del usuario
 * 
 */
export const fetchUserInfo = () => dispatch => {
    fetch(`https://api.spotify.com/v1/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(data => {        
        dispatch(getUserInfo(data))
    })
}
