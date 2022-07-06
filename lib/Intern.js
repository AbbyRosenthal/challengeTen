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
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Intern"
    }
    getSchool() {
        return this.school;
    }
 
}

module.exports = Intern;