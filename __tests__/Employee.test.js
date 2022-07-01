const { exportAllDeclaration } = require('@babel/types');
const { default: test } = require('node:test')
const Employee = require('../lib/Employee')

test('creates an employee object'), () => {
    const employee = new Employee('Abby');

    expect(employee.name).toBe('Abby');
    expect(employee.id).toBe('');
    expect(employee.email).toBe("");
}