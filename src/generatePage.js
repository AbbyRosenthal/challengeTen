const Employee = require("../lib/Employee")

const generateTeam = (team) => {
    const generateManager = manager => {
        //make a card in HTML for each
return `${manager.getName()}`
    }
    const generateIntern = intern => {
        return `${intern.getName()}`
    }

    const generateEngineer = engineer => {
return `${engineer.getName()}`
    }
    
    const html = [];
    html.push(team
        .filter(employee => employee.getRole()=== "Manager")
        .map(manager => generateManager(manager)))
        
        html.push(team
            .filter(employee => employee.getRole()=== "Intern")
            .map(intern => generateIntern(intern)))
            .join("")
            
            html.push(team
                .filter(employee => employee.getRole()=== "Engineer")
                .map(engineer => generateEngineer(engineer)))
                .join("")
               return html.join("") 
                
            }

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};