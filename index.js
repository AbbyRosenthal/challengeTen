const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Employee = require('./lib/Employee.js');
const inquirer = require('inquirer')
const fs = require('fs');

const addManager = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the name of the team manager?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the id number for this manager?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email address for this manager?"
        }
    ])
};

const addEngineer = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the name of the engineer?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the id number for this engineer?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email address for this engineer?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the GitHub for this engineer?"
        }
    ])
}

const addIntern = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the name of the intern?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the id number for this intern?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email address for this intern?"
        },
        {
            type: "input",
            name: "school",
            message: "Where did this intern go to school?"
        }
    ])
}