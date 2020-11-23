import React, { Component } from 'react';
import EmployeesTable from "../EmployeesTable/EmployeesTable";
import SearchBar from "../SearchBar/SearchBar";
import Footer from "../Footer/Footer"
import api  from "../../utils/api";
import {util} from "../../utils/util";
// Material-ui Imports
import Grid from "@material-ui/core/Grid";



class Employees extends Component {
    state= {
        employees: [],
        loadedEmoloyees: [],
        search: "",
        orderBy:"",
        order: "asc"
    }
    
    // api calls in this function (life cycle method)
    componentDidMount() {
        api.getEmployees().then((response) => {
            let employeeData = response.data.results.map(employee => {
                return {
                    id: employee.id.value,
                    image: employee.picture.medium,
                    firstName: employee.name.first,
                    lastName: employee.name.last,
                    email: employee.email,
                    phone: employee.phone
                }
            })
            this.setState({
                employees: employeeData,
                loadedEmoloyees: employeeData
            })
        })
        .catch(err => console.log(err));
      }

   // Function to allow user to search the employee directory
    // Cited: https://reactjs.org/docs/forms.html
    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        // Set the state to that of the input
        this.setState({
            [name]: value
        }, () => {
            // Filter employee list
            if (this.state.search) {
                let queriedEmployees = util.searchEmployees(this.state.search, this.state.loadedEmployees);
                this.setState({
                    employees: queriedEmployees,
                    orderBy: ""
                })
            } else {
                this.setState({
                    employees: this.state.loadedEmployees,
                    orderBy: ""
                })
            }
        });
    };

    // Function to allow user to sort directory by each column
    handleSort = (col, order) => {
        let sortedList = [...this.state.employees].sort(util.compareValues(col, order));
        let newList = order === "asc" ? "desc" : "asc"
        this.setState({
            employees: sortedList,
            order: newList,
            orderBy: col
        });
    }

    // Render the content
    render() {
        return (
            <div>
                <Grid className="search-style" container justify="center">
                    <SearchBar employees={this.state.employees} handleInputChange={this.handleInputChange} />
                </Grid>
                <EmployeesTable employees={this.state.employees} handleSort={this.handleSort} orderBy={this.state.orderBy} order={this.state.order} />
                <Footer />
            </div>
        )
    }
}



export default Employees;