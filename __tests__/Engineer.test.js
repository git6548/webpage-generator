const Engineer = require('../lib/Engineer');


test('should create a class with a name, id, email, and github', () => {
    const engineer = new Engineer('Someone', 7, 'someone@something.com', 'someonesgithub');
    expect(engineer.github).toEqual('someonesgithub');
});
