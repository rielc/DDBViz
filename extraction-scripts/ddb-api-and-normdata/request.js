var request = require('request');

var options = {
    url: 'http://lobid.org/person?name=Johann+Sebastian+Bach&format=full',
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);