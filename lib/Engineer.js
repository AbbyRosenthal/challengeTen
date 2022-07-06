//must have
//name, id, email, github, getGithub(), getName(), getID(), getEmail(), getRole() -> returns "engineer"
class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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
        return "Engineer"

    }
    getGithub() {
return this.github;
    }
 
}



module.exports = Engineer;