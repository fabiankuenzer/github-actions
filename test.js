const assert = require('assert');
const getHelloWorld = require('./index.js');

describe('getHelloWorld', function() {
    it('should return "Hello World"', function() {
        assert.strictEqual(getHelloWorld(), 'Hello World');
    });
});
