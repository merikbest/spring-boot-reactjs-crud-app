import React, {Component} from 'react';
import EmployeeService from "../../services/employee-service";

class UpdateEmployee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id, // получить id из <Route path="/employees/update/:id"
            firstName: "",
            lastName: "",
            email: ""
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id)
            .then((response) => {
                let employee = response.data;
                this.setState({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    email: employee.email
                });
            });
    }

    changeFirstNameHandler(event) {
        this.setState({firstName: event.target.value})
    }

    changeLastNameHandler(event) {
        this.setState({lastName: event.target.value})
    }

    changeEmailHandler(event) {
        this.setState({email: event.target.value})
    }

    updateEmployee = (event) => {
        event.preventDefault();

        let employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        };

        EmployeeService.updateEmployee(this.state.id, employee)
            .then((response) => {
                this.props.history.push("/employees")
            });
    }

    cancel() {
        this.props.history.push("/employees");
    }

    // onChange = (event) => {
    //     const {name, value} = event.target;
    //
    //     this.setState({
    //         [name]: value
    //     })
    // }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Employee</h3>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input placeholder="first name"
                                               name="firstName"
                                               className="form-control"
                                               value={this.state.firstName}
                                               onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input placeholder="last name"
                                               name="lastName"
                                               className="form-control"
                                               value={this.state.lastName}
                                               onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input placeholder="email"
                                               name="email"
                                               className="form-control"
                                               value={this.state.email}
                                               onChange={this.changeEmailHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateEmployee}>Update</button>
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

export default UpdateEmployee;