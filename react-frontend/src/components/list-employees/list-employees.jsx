import React, {Component} from 'react';
import EmployeeService from "../../services/employee-service";

class ListEmployees extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        EmployeeService.getEmployees()
            .then((response) => {
                this.setState({employees: response.data})
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
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
                        {
                            this.state.employees.map(
                                employee =>
                                    <tr key = {employee.id}>
                                        <td> {employee.firstName} </td>
                                        <td> {employee.lastName}</td>
                                        <td> {employee.email}</td>
                                    </tr>
                            )
                        }
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployees;