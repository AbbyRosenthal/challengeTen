const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Employee = require('./lib/Employee.js');
const inquirer = require('inquirer')
const fs = require('fs');
const path = require('path');
const DIST_DIR = path.resolve(__dirname, "dist");
const DIST_PATH = path.join(DIST_DIR, "team.html");
const render = require('./src/generatePage')

const teamMembers = [];

const init = () => {
    addManager();

    const addTeamMembers = () => {
        inquirer.prompt([
            {
                type: "list",
                name: "teamMemberChoice",
                message: "Which team member would you like to add?",
                choices: ["engineer", "intern", "Build My Team!"]
            }
        ])
            .then(data => {
                switch (data.teamMemberChoice) {
                    case "engineer":
                        addEngineer();
                        break;
                    case "intern":
                        addIntern();
                        break;
                    default:
                        buildTeam();
                }
            })
    }

    const addManager = () => {
        return inquirer.prompt([
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
            //add office number
        ])
            .then(data => {
                const manager = new Manager(data.name, data.id, data.email)
                teamMembers.push(manager)
                buildTeam();
            })
    }

    const addEngineer = () => {
        return inquirer.prompt([
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
            .then(data => {
                const engineer = new Engineer(data.name, data.id, data.email, data.github)
                teamMembers.push(engineer)
                addTeamMembers();
            })
    }

    const addIntern = () => {
        return inquirer.prompt([
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
            .then(data => {
                const intern = new Intern(data.name, data.id, data.email, data.school)
                teamMembers.push(intern)
                addTeamMembers();
            })
    }
    const buildTeam = () => {
if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR)
}
fs.writeFileSync(DIST_PATH, render(teamMembers), "utf-8")
    }
}

init();


module.exports = index; 