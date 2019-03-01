import { Route } from 'react-router-dom'
import React, { Component } from "react"
import StoreList from './store/StoreList'
import CandyList from './candy/CandyList'
import EmployeeList from './employee/EmployeeList'
import CandyManager from '../modules/CandyManager'
import CandyTypeManager from '../modules/CandyTypeManager'
import EmployeeManager from '../modules/EmployeeManager'
import LocationManager from '../modules/LocationManager'


class ApplicationViews extends Component {

    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
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
                    return <StoreList stores={this.state.stores} />
                }} />
                <Route exact path="/candies" render={() => {
                    return <CandyList candies={this.state.candies} candyTypes={this.state.candyTypes} deleteCandy={this.deleteCandy} />
                }} />
                <Route exact path="/employees" render={() => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
            </div>
        )
    }
}

export default ApplicationViews