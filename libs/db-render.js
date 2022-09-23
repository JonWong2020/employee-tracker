const {prompt} = require('inquirer');
const {
    getAllDepartments,
    getAllRoles,
    getAllEmployees,
    addDepartment,
    addRole
} = require('./db-query');

const viewDepartments = async () =>
    console.table(await getAllDepartments());

const viewEmployees = async () =>
    console.table(await getAllEmployees());

const viewRoles = async () =>
    console.table(await getAllRoles());

const addDepartmentOption = async () => {
    const {department} = await prompt({
        name: 'department',
        message: 'Enter your department name:'
    });

    await addDepartment(department);
    console.log('Department added');
    await viewDepartments();
}

const addRoleOption = async () => {
    const departments = (await getAllDepartments()).map(department => ({
        name: department.name,
        value: department.id,
    }));

    const {
        roleName,
        roleSalary,
        roleDepartment,
    } = await prompt([
        {
            name: 'roleName',
            message: 'Enter the name of your role:',
        },
        {
            name: 'roleSalary',
            message: 'Enter the salary for your role:',
        },
        {
            type: 'list',
            name: 'roleDepartment',
            message: 'Enter the department for your role:',
            choices: departments,
        },
    ]);

    await addRole([roleName, roleSalary, roleDepartment]);
    await viewRoles();
};

module.exports = {
    viewDepartments,
    viewEmployees,
    viewRoles,
    addDepartmentOption,
    addRoleOption,
}