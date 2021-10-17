//Refers to the 'Potion' file
const Potion = require('../lib/Potion');

/*test('creates a health potion object', () => {
    //Creates a new object called 'Potion' with a name of 'health;
    const potion = new Potion('health');

    //Expects name = 'health'
    expect(potion.name).toBe('health');
    //Expects value = any number
    expect(potion.value).toEqual(expect.any(Number));
});*/

test('creates a random potion object', () => {
    //Creates a new object called 'Potion' with no parameter
    const potion = new Potion();

    //Expects name to be a string and exist respectively
    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    //Expects the value to be equal to any number
    expect(potion.value).toEqual(expect.any(Number));
})