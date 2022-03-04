const fs = require('fs');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name);
        super(id);
        super(email);

        this.github = github;
    }

getName() {
    name = EmployeeData.name;
}
//getId()
//getEmail()
//getGithub()
//getRole() {
 //   return 'Engineer'
//};
    
};

module.exports = Engineer;