const {prompt} = require('inquirer');
const {
    getAllDepartments,
    getAllRoles,
    getAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole,
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

const addEmployeeOption = async () => {
    
    const roles = (await getAllRoles()).map(role => ({
        name: role.title,
        value: role.id,
    }));

    const managers = (await getAllEmployees()).map(employee => ({
        name: employee.first_name + ' ' + employee.last_name,
        value: employee.id,
    }));

    const {
        roleOption,
        manager,
        firstName,
        lastName,
    } = await prompt([
        {
            name: 'firstName',
            message: "Enter the employee's first name:",
        },
        {
            name: 'lastName',
            message: "Enter the employee's last name:",
        },
        {
            type: 'list',
            name: 'roleOption',
            message: 'Enter employee role:',
            choices: roles
        },
        {
            type: 'list',
            name: 'manager',
            message: 'Select a manager for the employee:',
            choices: managers
        }
    ]);

    await addEmployee([firstName, lastName, roleOption, manager]);
    await viewEmployees();
};

module.exports = {
    viewDepartments,
    viewEmployees,
    viewRoles,
    addDepartmentOption,
    addRoleOption,
    addEmployeeOption,
}