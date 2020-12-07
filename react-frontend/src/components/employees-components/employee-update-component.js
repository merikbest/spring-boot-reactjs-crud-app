import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {updateEmployee, getEmployeeById} from "../../actions/employee-actions";
import InputForm from "../parts/input-form";

class EmployeeUpdateComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            city: "",
            address: "",
            telephone: "",
            errors: {}
        };

        this.updateEmployee = this.updateEmployee.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        this.props.getEmployeeById(this.props.match.params.id);
    }

    // static getDerivedStateFromProps(nextProps)
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }

        const {firstName, lastName, city, address, telephone} = nextProps.employee;

        this.setState({
            firstName,
            lastName,
            city,
            address,
            telephone
        });
    }

    handleInputChange(event) {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };

    updateEmployee(event) {
        event.preventDefault();

        const {firstName, lastName, city, address, telephone} = this.state;

        const employee = {
            firstName,
            lastName,
            city,
            address,
            telephone
        };

        this.props.updateEmployee(this.props.match.params.id, employee, this.props.history);
    };

    render() {
        return (
            <div>
                <InputForm
                    title={"Update Employee"}
                    employee={this.state}
                    errors={this.state.errors}
                    onSubmitForm={this.updateEmployee}
                    handleInputChange={this.handleInputChange}
                />
            </div>
        );
    }
}

EmployeeUpdateComponent.propTypes = {
    updateEmployee: PropTypes.func.isRequired,
    getEmployeeById: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    employee: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    errors: state.errors,
    employee: state.employees.employee
});

export default connect(mapStateToProps, {updateEmployee, getEmployeeById})(EmployeeUpdateComponent);