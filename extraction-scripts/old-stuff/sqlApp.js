
var fs = require('fs');
var mysql = require('mysql');
var d3 = require('d3');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root'
});

connection.connect();


var timeFacets = d3.set();


/* walk through the whole database */

var window = 100;
var entries = 7747776;

for( var offset=0; offset+window<entries; offset+=window ) {
    extract = connection.query( 'SELECT id, items.time_fct FROM DDB_dump_1.items LIMIT ' + window + ' OFFSET ' + offset);
        query.on( 'result' , function(row) {
            if (row.time_fct != null) {
                newFacets = row.time_fct.split(";");
                newFacets.forEach( function() {
                    insert = connection.query( 
                        'INSERT INTO 
                            DDB_dump_1.item_time_fct (item_id, time_facet_id) 
                        VALUES
                            ('+row.time_fct.id', '+time_facet_id')'
                    );
                });
            }
        });
}



/* find all distinct time_fcts and generate a map */


var query = connection
    .query( 'SELECT DISTINCT items.time_fct FROM DDB_dump_1.items');


        function( err, rows, fields) {
            if (err) throw err;
            rows.forEach( function(row) {
                console.log(row);
                if (row.time_fct != null) {
                    newFacets = row.time_fct.split(";");
                    newFacets.forEach(function(facet) {
                        ts.add(facet);
                        // if (timeFacets[facet] == undefined) {
                        //     timeFacets[facet] = {
                        //         count : 1
                        //     };
                        // }
                    });
                }
            });
            console.log(ts.values());
            connection.end();
        });

query.on('result', function(row) {
                    newFacets = row.time_fct.split(";");
                    newFacets.forEach(function(facet) {
                        ts.add(facet);
                        console.log(ts);
                        // if (timeFacets[facet] == undefined) {
                        //     timeFacets[facet] = {
                        //         count : 1
                        //     };
                        // }
                    });
});
