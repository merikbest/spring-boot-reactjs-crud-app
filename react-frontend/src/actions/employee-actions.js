import axios from "axios";
import {GET_ERRORS, GET_EMPLOYEES, DELETE_EMPLOYEE, GET_EMPLOYEE_BY_ID} from "./types";

// const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";
const EMPLOYEE_API_BASE_URL = "http://ec2-3-120-15-67.eu-central-1.compute.amazonaws.com:8080/api/v1/employees";

export const createEmployee = (employee, history) => async dispatch => {
    try {
        await axios.post(EMPLOYEE_API_BASE_URL, employee);
        history.push("/");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
};

export const updateEmployee = (employeeId, employee, history) => async dispatch => {
    try {
        await axios.put(EMPLOYEE_API_BASE_URL + "/" + employeeId, employee);
        history.push("/");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
};

export const getEmployees = () => async dispatch => {
    const response = await axios.get(EMPLOYEE_API_BASE_URL);
    dispatch({
        type: GET_EMPLOYEES,
        payload: response.data
    })
};

export const deleteEmployee = (employeeId) => async dispatch => {
    await axios.delete(EMPLOYEE_API_BASE_URL + "/" + employeeId);
    dispatch({
        type: DELETE_EMPLOYEE,
        payload: employeeId
    })
};

export const getEmployeeById = (employeeId) => async dispatch => {
    const response = await axios.get(EMPLOYEE_API_BASE_URL + "/" + employeeId);
    dispatch({
        type: GET_EMPLOYEE_BY_ID,
        payload: response.data
    })
};