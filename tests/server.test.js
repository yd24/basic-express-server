'use strict';
const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing the express server', () => {
    test('If query string has name, should return JSON data with name', async() => {
        let resp = await request.get('/person?name=John');
        let expectedObj = {name: 'John'};
        expect(resp.body).toEqual(expectedObj);
    });

    test('Should return 404 on a bad route', async() => {
        let resp = await request.get('/someone');
        expect(resp.status).toEqual(404);
    });

    test('Should return 404 on a bad method', async() => {
        let resp = await request.get('/someone');
        expect(resp.status).toEqual(404);
    });

    test('Should return 500 if there is no name in query string', async() => {
        let resp = await request.get('/person');
        expect(resp.status).toEqual(500);
    });
});
