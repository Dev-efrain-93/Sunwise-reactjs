import releaseReducer from './releaseReducer';
import featuredPlaylistsReducer from './featuredPlaylistsReducer';
import categoriesReducer from './categoriesReducer';
import { combineReducers } from 'redux';

const rootReducer =  combineReducers({
    releaseReducer,
    featuredPlaylistsReducer,
    categoriesReducer
    //aqui agregare los demas reductores que podria crear en la app
});

export default rootReducer;