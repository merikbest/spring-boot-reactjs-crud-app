import React, {Component} from 'react';
import EmployeeService from "../../services/employee-service";

const initialState = {
    firstName: "",
    lastName: "",
    city: "",
    address: "",
    telephone: "",
    firstNameError: "",
    lastNameError: "",
    cityError: "",
    addressError: "",
    telephoneError: ""
}

class EmployeeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            initialState
        }

        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        if (this.state.id === "add") {
            return;
        } else {
            EmployeeService.getEmployeeById(this.state.id)
                .then((response) => {
                    let employee = response.data;
                    this.setState({
                        firstName: employee.firstName,
                        lastName: employee.lastName,
                        city: employee.city,
                        address: employee.address,
                        telephone: employee.telephone
                    });
                });
        }
    }

    handleInputChange(event) {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    saveOrUpdateEmployee = (event) => {
        event.preventDefault();

        const {firstName, lastName, city, address, telephone} = this.state;
        const isValid = this.validate();
        let employee = {
            firstName: firstName,
            lastName: lastName,
            city: city,
            address: address,
            telephone: telephone
        };

        if (!isValid) {
            //Clear form
            this.setState(initialState);

            if (this.state.id === "add") {
                EmployeeService.createEmployee(employee)
                    .then((response) => {
                        this.props.history.push("/employees")
                    });
            } else {
                EmployeeService.updateEmployee(this.state.id, employee)
                    .then((response) => {
                        this.props.history.push("/employees")
                    });
            }
        }
    }

    validate = () => {
        let isError = false;
        const errors = {
            firstNameError: "",
            lastNameError: "",
            cityError: "",
            addressError: "",
            telephoneError: ""
        }

        if (!this.state.firstName) {
            isError = true;
            errors.firstNameError = "Empty field!";
        }

        if (!this.state.lastName) {
            isError = true;
            errors.lastNameError = "Empty field!";
        }

        if (!this.state.city) {
            isError = true;
            errors.cityError = "Empty field!";
        }

        if (!this.state.address) {
            isError = true;
            errors.addressError = "Empty field!";
        }

        if (!this.state.telephone) {
            isError = true;
            errors.telephoneError = "Empty field!";
        }

        this.setState({
            ...this.state,
            ...errors
        });

        return isError;
    }

    cancel() {
        this.props.history.push("/employees");
    }

    getTitle() {
        if (this.state.id === "add") {
            return <h3 className="text-center mt-3">Add Employee</h3>;
        } else {
            return <h3 className="text-center mt-3">Edit Employee</h3>;
        }
    }

    render() {
        const {firstName, lastName, city, address, telephone} = this.state;

        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input name="firstName"
                                               className="form-control"
                                               value={firstName}
                                               onChange={this.handleInputChange}/>
                                        <div style={{color: "red"}}>{this.state.firstNameError}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input name="lastName"
                                               className="form-control"
                                               value={lastName}
                                               onChange={this.handleInputChange}/>
                                        <div style={{color: "red"}}>{this.state.lastNameError}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>City</label>
                                        <input name="city"
                                               className="form-control"
                                               value={city}
                                               onChange={this.handleInputChange}/>
                                        <div style={{color: "red"}}>{this.state.cityError}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input name="address"
                                               className="form-control"
                                               value={address}
                                               onChange={this.handleInputChange}/>
                                        <div style={{color: "red"}}>{this.state.addressError}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>Telephone</label>
                                        <input name="telephone"
                                               className="form-control"
                                               value={telephone}
                                               onChange={this.handleInputChange}/>
                                        <div style={{color: "red"}}>{this.state.telephoneError}</div>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save
                                    </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}
                                            style={{marginLeft: "10px"}}>Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeComponent;