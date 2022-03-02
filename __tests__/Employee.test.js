const fs = require('fs');
const Employee = require('../lib/Employee')


describe('Employee', () => {

it('should create a class with a name, id, and email', () => {
    const employee = new Employee ('Someone', 7, 'someone@something.com');
    expect(employee.name).toEqual('Someone');
    expect(employee.id).toEqual(7);
    expect(employee.email).toEqual('someone@something.com'); 
});
});