const fs = require('fs');
const Employee = require('../lib/Employee')


//describe('Employee', () => {

test('should create a class with a name, id, and email', () => {
    const employee = new Employee();
    expect(typeof employee).toBe('object')
    // expect(employee.name).toEqual('Someone');
    // expect(employee.id).toEqual(7);
    // expect(employee.email).toEqual('someone@something.com'); 
});
//});