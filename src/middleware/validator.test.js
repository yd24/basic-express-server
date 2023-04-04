'use strict';

const validator= require('./validator.js');

describe('Testing validator', () => {
    test('If query string has name, validator should pass off request to next middleware.', () => {
        const request = {
            query: {
                name: 'Jacob',
            },
        };
        const response = {};
        const next = jest.fn();

        validator(request, response, next);
        expect(next).toHaveBeenCalled();
    });

    test('Should have an error when query string does not have name.', () => {
        const request = {
            query: {
                dog: 'Jacob',
            },
        };
        const response = {};
        const next = jest.fn();

        validator(request, response, next);
        expect(next).toHaveBeenCalledWith('No name was found.');
    });
});