import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {createEmployee} from "../../actions/employee-actions";
import InputForm from "../parts/input-form";

class EmployeeAddComponent extends Component {
    state = {
        firstName: "",
        lastName: "",
        city: "",
        address: "",
        telephone: "",
        errors: {}
    };

    // static getDerivedStateFromProps(nextProps)
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };

    createEmployee = (event) => {
        event.preventDefault();

        const {firstName, lastName, city, address, telephone} = this.state;
        const employee = {firstName, lastName, city, address, telephone};

        this.props.createEmployee(employee, this.props.history);
    };

    render() {
        return (
            <div>
                <InputForm
                    title={"Add Employee"}
                    employee={this.state}
                    errors={this.state.errors}
                    onSubmitForm={this.createEmployee}
                    handleInputChange={this.handleInputChange}/>
            </div>
        );
    }
}

EmployeeAddComponent.propTypes = {
    createEmployee: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    errors: state.errors,
});

export default connect(mapStateToProps, {createEmployee})(EmployeeAddComponent);