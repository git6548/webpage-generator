const fs = require('fs');
const Manager = require('../lib/Manager')


describe('Manager', () => {

it('should create a class with a name, id, email, and an office number ', () => {
    const manager = new Manager ('Someone', 7, 'someone@something.com', 7);
    expect(manager.officeNumber).toEqual(7);
});
});