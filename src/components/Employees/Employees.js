import React, { Component, useState } from 'react';
// import axios from "axios";
import {api}  from "../../utils/api";

class Employees extends Component {
    constructor() {
      super();
      this.state = { employees: [] };
    }
    // api calls in this function (life cycle method)
    componentDidMount() {
        api.getEmployees().then((response) => {
          this.setState({ employees: response.data.results });
        });
      }

    render() {
      return (
        <div className="App">
          {console.log(this.state.employees)}
          <table>
            <tr>
              <th>Profile Image</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
            {this.state.employees.map((employee) => {
              return (
                <tr>
                  <td><img src={employee.picture.thumbnail}></img></td>
                  <td>{employee.name.first}</td>
                  <td>{employee.name.last}</td>
                  <td>{employee.email}</td>
                  <td>{employee.cell}</td>
                </tr>
              )
            })}
          </table>
        </div>
      )
    }
  }
  
  
  export default Employees;