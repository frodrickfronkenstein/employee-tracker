const db = require('./db/connection');
const inquirer = require('inquirer');
const mysql = require('mysql2');

function directoryMenu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update employee role']
        }
    ])
    .then(({ menu }) => {
        switch (menu) {
            case 'view all departments':
                viewAllDepartments();
                break;
            case 'view all roles':
                viewRoles();
                break;
            case 'view all employees':
                viewEmployees();
                break;
            case 'add a department':
                addDepartment();
                break;
            case 'add a role':
                addRole();
                break;
            case 'add an employee':
                addEmployee();
                break;
            case 'update employee role':
                updateEmployeeRole();
        }
    });
};

function viewAllDepartments() {
    db.promise().query('SELECT * FROM departments')
        .then(([response]) => {
            console.clear();
            console.table(response);
            directoryMenu();
        })
};

function viewRoles() {
    db.promise().query('SELECT * FROM roles')
        .then(([response]) => {
            console.clear();
            console.table(response);
            directoryMenu();
        })
};

function viewEmployees() {
    db.promise().query('SELECT * FROM employees')
        .then(([response]) => {
            console.clear();
            console.table(response);
            directoryMenu();
        })
};

function addDepartment() {};

function addRole() {};

function addEmployee() {};

function updateEmployeeRole() {};

directoryMenu();