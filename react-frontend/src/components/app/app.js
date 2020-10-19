import React, {Component} from 'react';
import ListEmployees from "../employees-components/list-employees.jsx";
import "./app.css"
import Header from "../parts/header";
import Footer from "../parts/footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CreateEmployee from "../employees-components/create-employee";
import UpdateEmployee from "../employees-components/update-employee";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header/>
                    <div className="container">
                        <Switch>
                            <Route path="/"  component={ListEmployees} exact />
                            <Route path="/employees" component={ListEmployees} exact/>
                            <Route path="/employees/add" component={CreateEmployee} exact/>
                            <Route path="/employees/update/:id" component={UpdateEmployee} exact/>
                        </Switch>
                    </div>
                    <Footer/>
                </Router>
            </div>
        );
    }
}

export default App;