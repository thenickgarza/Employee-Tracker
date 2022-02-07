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

viewEmployees = () => {
    const sql = 'SELECT * FROM employee';

    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        mainScreen();
    })
};

viewRoles = () => {
    const sql = 'SELECT * FROM role';

    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table (rows);
        mainScreen();
    })
};

addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: 'What is the name of the deparment you would like to add?'
        }
    ]).then(function (answer) {
        db.query(
            `INSERT INTO department SET ?`,
            {
                name: answer.department
            });
            const sql = `SELECT * FROM department`;
            db.query(sql, (err, rows) => {
                if (err) throw err;
                console.table(rows);
                mainScreen();
            })
})
};
addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeFirstName',
            message: 'Please enter the first name of the employee you would like to add',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeLastName',
            message: 'Please enter the last name of the employee',
            validate: input => {
                if(input) {
                    return true;
                } else {
                    console.log('Please enter the last name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'roleId',
            message: `Please enter 1 for Driver, 2 for Dispatch, 3 for Assistant Manager, 4 for Manager, 5 for Human Resources, 6 for Owner`,
            validate: input => {
                if(input) {
                    return true;
                } else {
                    console.log('Plese enter a number to continue');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: `Please enter the manager id or continue with out entering if not a manager`
        }
    ]).then(function (answer) {
        db.query(
            `INSERT INTO employee SET ?`,
            {
                first_name: answer.employeeFirstName,
                last_name: answer.employeeLastName,
                role_id: answer.roleId,
                manager_id: answer.managerId
            });
            const sql = `SELECT * FROM employee`;
            db.query(sql, (err, rows) => {
                if (err) throw err;
                console.table(rows);
                mainScreen();
            })
    })
};

addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'roleTitle',
            message: 'Please enter the title of the role',
            validate: input => {
                if(input) {
                    return true;
                } else {
                    console.log('Plese enter a the title of the role');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'roleSalary',
            message: 'Please enter the salary for the new role',
            validate: input => {
                if(input) {
                    return true;
                } else {
                    console.log('Please enter a salary');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'roleDepartmentId',
            message: 'Plese enter 1 for Logistics, 2 for Corporate, 3 for Management',
            validate: input => {
                if(input) {
                    return true;
                } else {
                    console.log('Please enter a id to continue');
                    return false;
                }
            }
        }
    ]).then(function (answer) {
        db.query(
            `INSERT INTO role SET ?`,
            {
                title: answer.roleTitle,
                salary: answer.roleSalary,
                department_id: answer.roleDepartmentId
            });
            const sql = `SELECT * FROM role`;
            db.query(sql, (err, rows) => {
                if (err) throw err;
                console.table(rows);
                mainScreen();
            })
    })
};

updateRole = () => {}

deleteEmployee = () => {}

exit = () => {
    connection.end();
}
 
mainScreen();