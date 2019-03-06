import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import StoreList from './store/StoreList'
import CandyList from './candy/CandyList'
import EmployeeList from './employee/EmployeeList'
import CandyManager from '../modules/CandyManager'
import CandyTypeManager from '../modules/CandyTypeManager'
import EmployeeManager from '../modules/EmployeeManager'
import LocationManager from '../modules/LocationManager'
import EmployeeForm from './employee/EmployeeForm';
import Login from './authentication/Login'


class ApplicationViews extends Component {

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null

    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    addEmployee = employee => {
        return EmployeeManager.post(employee)
            .then(() => EmployeeManager.getAll())
            .then(employees =>
                this.setState({
                    employees: employees
                })
            );
    }

    deleteCandy = (id) => {
        CandyManager.removeAndList(id)
            .then(candies => this.setState({
                candies: candies
            })
            )
    }

    componentDidMount() {
        const newState = {}

        EmployeeManager.getAll()
            .then(employees => newState.employees = employees)
            .then(() => LocationManager.getAll())
            .then(stores => newState.stores = stores)
            .then(() => CandyTypeManager.getAll())
            .then(candyTypes => newState.candyTypes = candyTypes)
            .then(() => CandyManager.getAll())
            .then(candies => newState.candies = candies)
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <div id="kandyKorner">
                <Route exact path="/" render={() => {
                    if (this.isAuthenticated()) {
                        return <StoreList stores={this.state.stores} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/candies" render={() => {
                    if (this.isAuthenticated()) {
                        return <CandyList candies={this.state.candies} candyTypes={this.state.candyTypes} deleteCandy={this.deleteCandy} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/employees" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList {...props} employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/employees/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeForm {...props}
                            addEmployee={this.addEmployee}
                            employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/login" component={Login} />
            </div>
        )
    }
}

export default ApplicationViews