import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../../store";

import EmployeesListComponent from "../employees-components/employees-list-component";
import EmployeeAddComponent from "../employees-components/employee-add-component";
import EmployeeUpdateComponent from "../employees-components/employee-update-component";
import EmployeeViewComponent from "../employees-components/employee-view-component";
import Header from "../parts/header";
import Footer from "../parts/footer";

import "./app.css"

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Header/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={EmployeesListComponent}/>
                        <Route exact path="/employees/add" component={EmployeeAddComponent}/>
                        <Route exact path="/employees/:id" component={EmployeeUpdateComponent}/>
                        <Route exact path="/employees/view/:id" component={EmployeeViewComponent}/>
                    </Switch>
                </div>
                <Footer/>
            </Router>
        </Provider>
    );
};

export default App;