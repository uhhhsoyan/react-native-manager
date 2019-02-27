import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
    auth: AuthReducer, // The 'auth' piece of state is produced by the AuthReducer reducer
    employeeForm: EmployeeFormReducer
});
