//must have
//name, id, email, office number, getName(), getID(), getEmail(), getRole() -> returns "manager",

class Manager {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = this.officeNumber;
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
        return "Manager";
    }
 
}




module.exports = Manager;