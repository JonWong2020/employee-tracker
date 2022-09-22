const connection = require('./config/connection');

const promiseQuery = async queryStatement =>
    (await connection.promise().query(queryStatement))[0];

const getAllDepartments = () =>
    promiseQuery('SELECT * FROM department');

const getAllEmployees = () =>
    promiseQuery('SELECT * FROM employee');

const getAllRoles = () =>
    promiseQuery('SELECT * FROM role');

module.exports = {
    getAllDepartments,
    getAllEmployees,
    getAllRoles,
};