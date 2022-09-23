const connection = require('./config/connection');

const promiseQuery = async (queryStatement, ...args) =>
    (await connection.promise().execute(queryStatement, ...args))[0];

const getAllDepartments = () =>
    promiseQuery('SELECT * FROM department');

const getAllEmployees = () =>
    promiseQuery('SELECT * FROM employee');

const getAllRoles = () =>
    promiseQuery('SELECT * FROM role');

const addDepartment = name =>
    promiseQuery('INSERT INTO department (name) VALUES (?)', [name]);

const addRole = options =>
    promiseQuery('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', options);

const addEmployee = options =>
    promiseQuery('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', options);

const updateEmployeeRole = options => 
    promiseQuery('UPDATE employee SET role_id = ? WHERE id = ?', options);

module.exports = {
    getAllDepartments,
    getAllEmployees,
    getAllRoles,
    addDepartment,
    addRole, 
    addEmployee,
    updateEmployeeRole,
};