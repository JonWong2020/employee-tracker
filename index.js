const inquirer = require('inquirer');
const connection = require('./config/connection');

const getOptionsInfo = async () => {
    return prompt ({
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: [
            {
                name: "View all Departments.",
                value: "viewDepartments"
            },
            {
                name: "View all Roles.",
                value: "viewRoles"
            },
            {
                name: "View all Employees",
                value: "viewEmployees"
            },
            {
                name: "Add a Department",
                value: "addDepartment"
            },
            {
                name: "Add a Role",
                value: "addRole"
            },
            {
                name: "Add an Employee",
                value: "addEmployee"
            },
            {
                name: "Update Employee Role",
                value: "updateEmployeeRole"
            },
            {
                name: "Exit",
                value: "exit"
            }
        ]
    });
};