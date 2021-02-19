import releaseReducer from './releaseReducer';
import { combineReducers } from 'redux';

const rootReducer =  combineReducers({
    releaseReducer,
    //aqui agregare los demas reductores que podria crear en la app
});

export default rootReducer;