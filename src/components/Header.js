import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";

class Header extends React.PureComponent {
    render() {
        return (
            <header className="header-container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/users">Users</Link>
                </nav>
            </header>
        );
    }
}

export default Header;
