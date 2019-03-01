import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import "./NavBar.css"


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
            <div id="title">Kandy Korner!</div>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Stores</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/candies">Candies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Employees</Link>
                    </li>
                </ul>
                <button id="coolButton">Kool Mode</button>
            </nav>
        )
    }
}

export default NavBar