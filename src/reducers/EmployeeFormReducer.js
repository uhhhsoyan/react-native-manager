import {
    EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            // recall, our action.payload === { prop: 'name', value: 'jane' }
            return { ...state, [action.payload.prop]: action.payload.value };
            // ^^ square brackets are NOT an array, this is a key interpreter
        default:
            return state;
    }
};
