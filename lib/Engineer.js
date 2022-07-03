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
        console.log("running")
    }
    getId() {

    }
    getEmail() {

    }
    getRole() {
        return console.log('Engineer')

    }
    getGithub() {

    }
 
}



module.exports = Engineer;