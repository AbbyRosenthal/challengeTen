//constructor
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee"

    }

}

//creates unique employee
const employee1 = new Employee('Bob', 'idBOB', 'bob@workemail.com');

module.exports = Employee;