const Manager = require('../lib/Manager')

test('creates a Manager object', () => {
    const manager = new Manager("", 10, "", "");

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});
