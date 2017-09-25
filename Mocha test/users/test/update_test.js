const assert = require('assert');
const User = require('../src/user');

describe('Updating records', () => {

    let joe;

    beforeEach(() => {
        joe = new User({ name: 'Joe'});
        joe.save()
           .then(() => done());
    });
    
    it('instance type using set n save', () => {
        console.log(joe);
    });
})