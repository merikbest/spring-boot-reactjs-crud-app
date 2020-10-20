import React, {Component} from 'react';
import ListEmployeesComponent from "../employees-components/list-employees-component.jsx";
import "./app.css"
import Header from "../parts/header";
import Footer from "../parts/footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import EmployeeComponent from "../employees-components/employee-component";
import ViewEmployeeComponent from "../employees-components/view-employee-component";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header/>
                    <div className="container">
                        <Switch>
                            <Route path="/" component={ListEmployeesComponent} exact />
                            <Route path="/employees" component={ListEmployeesComponent} exact/>
                            <Route path="/employees/:id" component={EmployeeComponent} exact/>
                            <Route path="/employees/view/:id" component={ViewEmployeeComponent} exact/>
                        </Switch>
                    </div>
                    <Footer/>
                </Router>
            </div>
        );
    }
}

export default App;