const console_log = require('console.table');
const db = require('./db/connection');
const inquirer = require('inquirer');

mainScreen = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'userOptions',
            message: 'Hello!, Plese choose how you would like to continue',
            choices: [
                'View all departments',
                'View all employees',
                'View all roles',
                'Add a department',
                'Add a employee',
                'Add a role',
                'Update employee role',
                'Delete an employee',
                'Exit'
            ]
        }
    ]).then(function (answer) {
        switch (answer.userOptions) {
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a employee':
                addEmployee();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Update employee role':
                updateRole();
                break;
            case 'Delete an employee':
                deleteEployee();
                break;
            case 'Exit':
                exit();
                break;
        }
    })
};

viewDepartments = () => {
    const sql = 'SELECT * FROM department';

    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        mainScreen();
    })
};

mainScreen();