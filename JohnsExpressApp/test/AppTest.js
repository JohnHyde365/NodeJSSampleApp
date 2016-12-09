//simple async test for http 200 response code using super test
'use strict';

var request = require('supertest'), app = require('../app').app;

describe('GET /', function () {
    it('expects HTTP response 200', function (done) {
        request(app)
            .get('/')
            .expect(200, done);
    });
});

