const Engineer = require('../lib/Engineer');


test('should create a class with a name, id, email, and github', () => {
    const engineer = new Engineer();
    expect(typeof engineer).toBe('object');
});
