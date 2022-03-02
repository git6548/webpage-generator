const fs = require('fs');
const Engineer = require('../lib/Engineer')


describe('Engineer', () => {

it('should create a class with a name, id, email, and github', () => {
    const engineer = new Engineer ('Someone', 7, 'someone@something.com', 'gitsomething');
    expect(engineer.github).toEqual('gitsomething');
});
});