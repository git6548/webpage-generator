const fs = require('fs');
const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');



test('should create a class with a name, id, email, and a school', () => {
    const intern = new Intern ('Someone', 7, 'someone@something.com', 'coolschool');
    expect(intern.school).toEqual('coolschool');
});
