// esto fue instalado con la dependecia de Mocha
const assert = require('assert');
const User = require('../src/user');

describe('creating records', () => {
    // Mocha va a ver la funcion it y la va a reconocer
    //it's going to say, the developer is trying  to run some type of test inside of this function

    it('saves a user', ( done ) => {
        const joe = new User({ name: 'Joe' });

        joe.save()
           .then(() => {
                // has joe been saved successfully?
                assert(!joe.isNew);
                done();
           });
    });

});