// Reducer responsible for all things authentication
// Handles email/password entered, whether currently error, should we show spinner

// Cannot return undefined, so need initial state (before state)
import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = { 
    email: '', 
    password: '' 
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        default:
            return state;
    }
};
