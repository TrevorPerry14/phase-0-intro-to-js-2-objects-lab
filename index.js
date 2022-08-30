// Write your solution in this file!

const employee = {name: "Sam",
streetAddress: "none"}

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  })

function updateEmployeeWithKeyAndValue(employee) {
    return employee = {name: "Sam",
streetAddress: "11 Broadway"}
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee) {
    employee.streetAddress = "12 Broadway"
    return employee = {name: "Sam",
streetAddress: "12 Broadway"}
}
    
    
function deleteFromEmployeeByKey(employee) {
    const newEmployee = {...employee}
    delete newEmployee.name
    return newEmployee
    
}

function destructivelyDeleteFromEmployeeByKey(employee) {
    delete employee.name 
    return employee
}
