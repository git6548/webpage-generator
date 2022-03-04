const fs = require('fs');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name);
        super(id);
        super(email);
        this.officeNumber = officeNumber;
    }

//getName() {
//    name = ${data.manager-name};
//}
//getId()
//getEmail()
//getRole() // returns Manager
    
};

module.exports = Manager;