import React, {Component} from 'react';
import ListEmployees from "../list-employees/list-employees.jsx";
import "./app.css"
import Header from "../parts/header";
import Footer from "../parts/footer";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <ListEmployees/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;