"use strict";

const supertest = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('server', () => {
    describe('GET /', () => {
        it('should response "page not found"', (done) => {
            supertest(app).
            get('/').
            expect(404).
            expect((res) => {
                expect(res.body).toInclude({
                    error: 'Page not found'
                });
            }).
            end(done);
        });
    })

    describe('GET /users', () => {
        it('should include you in the list', (done) => {
            supertest(app).get('/users')
                .expect(200)
                .expect((res) => {
                    const you = res.body.find((user) => {
                        return user.name === 'Thuy'
                    });
                    expect(you).toBeDefined;
                })
                .end(done);
        });
    })

})