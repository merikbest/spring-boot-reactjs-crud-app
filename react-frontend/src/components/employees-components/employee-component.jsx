import React, {Component} from 'react';
import EmployeeService from "../../services/employee-service";

class EmployeeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            firstName: "",
            lastName: "",
            city: "",
            address: "",
            telephone: ""
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

        let employee = {
            firstName: firstName,
            lastName: lastName,
            city: city,
            address: address,
            telephone: telephone
        };

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
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input name="lastName"
                                               className="form-control"
                                               value={lastName}
                                               onChange={this.handleInputChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label>City</label>
                                        <input name="city"
                                               className="form-control"
                                               value={city}
                                               onChange={this.handleInputChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input name="address"
                                               className="form-control"
                                               value={address}
                                               onChange={this.handleInputChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Telephone</label>
                                        <input name="telephone"
                                               className="form-control"
                                               value={telephone}
                                               onChange={this.handleInputChange}/>
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