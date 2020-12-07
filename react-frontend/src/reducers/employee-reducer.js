import {GET_EMPLOYEES, DELETE_EMPLOYEE, GET_EMPLOYEE_BY_ID} from "../actions/types";

const initialState = {
    employees: [],
    employee: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EMPLOYEES:
            return {
                ...state,
                employees: action.payload
            };
        case DELETE_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.filter((employee) => employee.id !== action.payload)
            };
        case GET_EMPLOYEE_BY_ID:
            return {
                ...state,
                employee: action.payload
            };
        default:
            return state;
    }
}
