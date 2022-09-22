const dbQuery = require('./db-query');

const viewDepartments = async () =>
    console.table(await dbQuery.getAllDepartments());

const viewEmployees = async () =>
    console.table(await dbQuery.getAllEmployees());

const viewRoles = async () =>
    console.table(await dbQuery.getAllRoles());

module.exports = {
    viewDepartments,
    viewEmployees,
    viewRoles,
}