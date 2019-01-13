const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', () => {
    // create a spy for the method that we want to track its call
    var db = {
        saveUser: expect.createSpy()
    }

    // replace the corresponding 'real' method inside the "rewired" module 
    // with the created spy
    app.__set__('db', db);

    // test spy
    it('should call saveUser with user object', () => {
        var email = 'test@test.com';
        var password = '123abc';

        app.handleSignup(email, password);
        // expect the spy to have been called...
        expect(db.saveUser).toHaveBeenCalledWith({
            email,
            password
        });
    })


    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Thuy', 25);
        expect(spy).toHaveBeenCalledWith('Thuy', 25);
    })
})