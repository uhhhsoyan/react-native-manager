import { EMAIL_CHANGED, PASSWORD_CHANGED } from './index';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
    // note: action is plain js object, with type prop (str)
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};
