//constructor
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        console.log("running")
    }
    getId() {

    }
    getEmail() {

    }
    getRole() {
        return console.log('employee')

    }
 
}

//creates unique employee
const employee1 = new Employee ('Bob', 'idBOB', 'bob@workemail.com');

module.exports = Employee;