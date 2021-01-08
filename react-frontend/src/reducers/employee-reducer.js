import {GET_EMPLOYEES, DELETE_EMPLOYEE, GET_EMPLOYEE_BY_ID} from "../actions/types";

const initialState = {
    employees: [],
    employee: {}
};

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case GET_EMPLOYEES:
            return {...state, employees: payload};

        case DELETE_EMPLOYEE:
            return {...state, employees: state.employees.filter((employee) => employee.id !== payload)};

        case GET_EMPLOYEE_BY_ID:
            return {...state, employee: payload};

        default:
            return state;
    }
}
