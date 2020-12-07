import {combineReducers} from "redux";
import errorsReducer from "./error-reducer";
import employeesReducer from "./employee-reducer";

export default combineReducers({
    errors: errorsReducer,
    employees: employeesReducer
});