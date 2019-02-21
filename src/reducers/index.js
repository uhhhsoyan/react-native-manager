import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
    auth: AuthReducer // The 'auth' piece of state is produced by the AuthReducer reducer
});
