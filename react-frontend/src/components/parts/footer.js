import React, {Component} from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <footer className = "footer bg-dark">
                    <a className="mt-3" style={{textDecoration: "none", color: "white"}}
                             href="https://github.com/merikbest">merikbest 2020</a>
                </footer>
            </div>
        );
    }
}

export default Footer;