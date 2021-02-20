import releaseReducer from './releaseReducer';
import featuredPlaylistsReducer from './featuredPlaylistsReducer';
import categoriesReducer from './categoriesReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

const rootReducer =  combineReducers({
    releaseReducer,
    featuredPlaylistsReducer,
    categoriesReducer,
    userReducer
    //aqui agregare los demas reductores que podria crear en la app
});

export default rootReducer;