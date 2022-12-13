let functions = require('./functions.js');

test('return two test', () => {
    expect(functions.returnTwo()).toBe(2)
});

test('greeting test', () => {
    expect(functions.greeting('Chris P. Bacon')).toBe('Hello, Chris P. Bacon.')
});

test('add test', () => {
    expect(functions.add(6, 11)).toBe(17)
});

describe('Math functions', () => {
    test('add test', () => {
        expect(functions.add(6, 11)).toBe(17)
    })
    
    test('subtract test', () => {
        expect(functions.subtract(43, 24)).toBe(19)
    })
    
    test('multiply test', () => {
        expect(functions.multiply(8, 11)).toBe(88)
    })
    
    test('divide test', () => {
        expect(functions.divide(21, 3)).toBe(7)
    })
})
