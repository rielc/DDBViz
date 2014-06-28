var request = require('request');

var options = {
    url: 'https://api.deutsche-digitale-bibliothek.de/search?facet=affiliate_fct&facet=place_fct&facet=affiliate_fct_normdata&rows=1&affiliate_fct=Borchert, Christian (Fotograf)',
    headers: {
        'Accept': 'application/json',
        'Authorization':'OAuth oauth_consumer_key="vdiFptc5jO0P9DULDOZZ9R4le2UVcbSTNlEzuZ9YhZaCBMbukJv1403823224319"',
        'Host':'api.deutsche-digitale-bibliothek.de'
    }
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);