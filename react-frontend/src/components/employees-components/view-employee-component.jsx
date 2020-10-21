import React, {Component} from 'react';
import EmployeeService from "../../services/employee-service";

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            employee: {},
            error: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id)
            .then((response) => {
                this.setState({employee: response.data});
            })
            .catch((error) => {
                this.setState({error: error.response.data});
            });
    }

    render() {
        const {firstName, lastName, city, address, telephone} = this.state.employee;
        const {message} = this.state.error;

        return (
            <div>
                <br/>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Employee Details</h3>
                    <div className="card-body">
                        <h4 style={{color: "red"}} className="text-center">{message}</h4>
                        <div className="row">
                            <div className="mr-2">First Name:</div>
                            <div>{firstName}</div>
                        </div>
                        <div className="row">
                            <div className="mr-2">Last Name:</div>
                            <div>{lastName}</div>
                        </div>
                        <div className="row">
                            <div className="mr-2">City:</div>
                            <div>{city}</div>
                        </div>
                        <div className="row">
                            <div className="mr-2">Address:</div>
                            <div>{address}</div>
                        </div>
                        <div className="row">
                            <div className="mr-2">Telephone:</div>
                            <div>{telephone}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;