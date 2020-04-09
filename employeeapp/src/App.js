import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Table from "./components/table/table"
import Header from "./components/header/header"
// import Nav from "./components/navbar/navbar"
import EmployeesList from "./components/Employees/EmployeesList"
import EmployeesInput from "./components/Employees/EmployeesInput"

export default function App() {
  return (
    <div className= "container">
      <Header/>
      <EmployeesInput/>
      <EmployeesList/> 

      
    </div>
  );
}

