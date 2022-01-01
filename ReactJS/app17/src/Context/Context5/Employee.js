import React from "react";
const Employees=React.createContext()
const EmployeeProvider=Employees.Provider
const EmployeeConsumer=Employees.Consumer
export{EmployeeConsumer,EmployeeProvider}