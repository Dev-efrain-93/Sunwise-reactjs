//tipos de acciones
const GET_USER_INFO = 'FETCH_USER_INFO';
const USER_ERROR = 'USER_ERROR';

//acciones
const getUserInfo = (user) => ({ type: GET_USER_INFO, payload: user });
const userError = (error) => ({ type: USER_ERROR, payload: error});

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
        if(!data.error) dispatch(getUserInfo(data))
        else dispatch(userError(data.error));
    })
}
