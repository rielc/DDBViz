var fs = require('fs');


var files = [];
var persons = {};
var relationships = {};


// parse all the files
fs.readdirSync('./data1/').forEach(
	function(file, index) {
		if (file != '.DS_Store') {

			files[index] = require('./data1/'+file);

			/*
			fs.readFile('./data/'+file, 'utf8', 
				function (err, data) {
					if (err) {
						console.log('Error: ' + err);
						return;
					}
					files[index] = JSON.parse(data);
				}
			);
			*/
		}
	}
);



// go through names and extract all persons
files.forEach( function(file) {
	file.facet.forEach(function(facet) {
		if (facet['@name'] == 'affiliate_fct') {
			if (typeof facet['value'] == 'object') {
				facet['value'].forEach(function(name) {
					if (persons[name] == undefined) {
						persons[name] = {
							count : 1
						};
					} else {
						persons[name].count++;
					}
				});
			}
			if (typeof facet['value'] == 'string') {
				if (persons[ facet['value'] ] == undefined) {
					persons[ facet['value'] ] = {
						count : 1
					};
				} else {
					persons[ facet['value'] ].count++;
				}
			}
		}
	});
});



// go through names and extract all persons
files.forEach( function(file) {
	file.facet.forEach(function(facet) {
		if (facet['@name'] == 'affiliate_fct') {
			if (typeof facet['value'] == 'object') {
				facet['value'].forEach(function(name) {
					if (relationships[name] == undefined) {
						relationships[name] = {};
						facet['value'].forEach(function(name) {
					} else {
						persons[name].count++;
					}
				});
			}
		}
	});
});


var outputFilename = './persons.json';


fs.writeFile(outputFilename, JSON.stringify(persons, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + outputFilename);
    }
}); 

var Node = { name: 'Person' };