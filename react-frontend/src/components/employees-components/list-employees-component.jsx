import React, {Component} from 'react';
import EmployeeService from "../../services/employee-service";
import "./employee.css";

class ListEmployeesComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployees()
            .then((response) => {
                this.setState({employees: response.data})
            });
    }

    addEmployee() {
        this.props.history.push("/employees/add");
    }

    editEmployee(id) {
        this.props.history.push(`/employees/${id}`);
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id)
            .then((response) => {
                this.setState({
                    employees: this.state.employees.filter((employee) => employee.id !== id)
                });
            });
    }

    viewEmployee(id) {
        this.props.history.push(`/employees/view/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center mt-4">Employees List</h2>
                <div className="row">
                    <button style={{marginBottom: "10px"}}
                            className="btn btn-success"
                            onClick={this.addEmployee}>Add Employee
                    </button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead className="bg-dark" style={{color: "white"}}>
                        <tr className="notbold">
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>City</th>
                            <th>Address</th>
                            <th>Telephone</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.employees.map((employee) =>
                            <tr key={employee.id}>
                                <td> {employee.firstName} </td>
                                <td> {employee.lastName}</td>
                                <td> {employee.city}</td>
                                <td> {employee.address}</td>
                                <td> {employee.telephone}</td>
                                <td>
                                    <button onClick={() => this.editEmployee(employee.id)}
                                            className="btn btn-dark">Edit
                                    </button>
                                    <button style={{marginLeft: "10px"}}
                                            onClick={() => this.viewEmployee(employee.id)}
                                            className="btn btn-dark">View
                                    </button>
                                    <button style={{marginLeft: "10px"}}
                                            onClick={() => this.deleteEmployee(employee.id)}
                                            className="btn btn-danger">Delete
                                    </button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeesComponent;