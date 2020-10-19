import React, {Component} from 'react';
import EmployeeService from "../../services/employee-service";

class ListEmployees extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployees()
            .then((response) => {
                this.setState({employees: response.data})
            });
    }

    addEmployee() {
        this.props.history.push("/employees/add")
    }

    editEmployee(id) {
        this.props.history.push(`/employees/update/${id}`)
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th> Employee First Name</th>
                            <th> Employee Last Name</th>
                            <th> Employee Email Id</th>
                            <th> Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.employees.map((employee) =>
                            <tr key={employee.id}>
                                <td> {employee.firstName} </td>
                                <td> {employee.lastName}</td>
                                <td> {employee.email}</td>
                                <td>
                                    <button onClick={() => this.editEmployee(employee.id)}
                                            className="btn btn-primary">Update
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

export default ListEmployees;