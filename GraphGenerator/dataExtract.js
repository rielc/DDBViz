
fs = require('fs');
mysql = require('mysql');
d3 = require('d3');
dataExtract = {};



connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root'
});

connection.connect();


// this object holds all the data
dataExtract.yearRanges = [];
dataExtract.yearRanges = require('./data-extract/time-and-occurrence.json');
dataExtract.personsInEpoch = {};

// get the person per year


connections = [];

/*

for (var i=0; i<dataExtract.yearRanges.length-1;i++) {

    connections[i] = mysql.createConnection(
        {
            host     : 'localhost',
            user     : 'root',
            password : 'root'
        }
    );

    var limit = 100;

    connections[i].query( 'SELECT affiliate_fct.id AS affiliate_fct_id, affiliate_fct.value AS affiliate_fct, COUNT(DISTINCT affiliate_fct_items.item_id) AS occurrence FROM affiliate_fct_items INNER JOIN affiliate_fct ON affiliate_fct_items.facet_id = affiliate_fct.id INNER JOIN time_fct_items ON time_fct_items.item_id = affiliate_fct_items.item_id WHERE time_fct_items.facet_id = '+ dataExtract.yearRanges[i].time_id  +' GROUP BY affiliate_fct.id ORDER BY occurrence DESC LIMIT ' + limit, 
        function( error, rows ) {
            if (rows != undefined) {
                dataExtract.personsInEpoch[ dataExtract.yearRanges[i].time_id ] = rows;
                console.log('The query for persons in items with time_fct.id=' + dataExtract.yearRanges[i].time_id  + ' resulted in '+ rows.length + ' rows.');
            }
        }
    );

    connections[i].end();

}

connection.query( 
                'SELECT affiliate_fct.id AS affiliate_fct_id, affiliate_fct.value AS affiliate_fct, COUNT(DISTINCT affiliate_fct_items.item_id) AS occurrence FROM affiliate_fct_items INNER JOIN affiliate_fct ON affiliate_fct_items.facet_id = affiliate_fct.id INNER JOIN time_fct_items ON time_fct_items.item_id = affiliate_fct_items.item_id WHERE time_fct_items.facet_id = '+ 4 +' GROUP BY affiliate_fct.id ORDER BY occurrence DESC LIMIT ' + 100, 
                function( error, rows ) {
                    if (rows != undefined) {
                        dataExtract.personsInEpoch[yearRange.time_id] = rows;
                        console.log('The query for persons in items with time_fct.id=' + yearRange.time_id + ' resulted in '+ rows.length + ' rows.');
                    }
                }
            );


*/

limit = 100;


dataExtract
    .yearRanges
    .forEach(
        function(yearRange) {
            connection.query( 'SELECT affiliate_fct.id AS affiliate_fct_id, affiliate_fct.value AS affiliate_fct, COUNT(DISTINCT affiliate_fct_items.item_id) AS occurrence FROM affiliate_fct_items INNER JOIN affiliate_fct ON affiliate_fct_items.facet_id = affiliate_fct.id INNER JOIN time_fct_items ON time_fct_items.item_id = affiliate_fct_items.item_id WHERE time_fct_items.facet_id = '+ yearRange.time_id +' GROUP BY affiliate_fct.id ORDER BY occurrence DESC LIMIT ' + limit, 
                function( error, rows ) {
                    if (rows != undefined) {
                        dataExtract.personsInEpoch[yearRange.time_id] = rows;
                        console.log('The query for persons in items with time_fct.id=' + yearRange.time_id + ' resulted in '+ rows.length + ' rows.');

                            var outputFilename = './data-extract/persons-in-' + yearRange.time_id + '.json';

                            fs.writeFile(outputFilename, JSON.stringify(rows, null, 4),
                                function(error) {
                                if(error) {
                                    console.log(error);
                                } else {
                                  console.log("JSON saved to " + outputFilename);
                                }
                            });

                    }
                }
            );
        }
    );