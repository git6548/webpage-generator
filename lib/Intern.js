const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

//getName()
//getId()
//getEmail()
//getRole() // returns Intern
    
};

module.exports = Intern;