//must have
//name, id, email, school, getSchool(), getName(), getID(), getEmail(), getRole() -> returns "intern"

class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
    getName() {
        console.log("running")
    }
    getId() {

    }
    getEmail() {

    }
    getRole() {
        return console.log('Intern')

    }
    getSchool() {

    }
 
}

module.exports = Intern;