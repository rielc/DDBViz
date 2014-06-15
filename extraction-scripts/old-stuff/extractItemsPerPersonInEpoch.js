
fs = require('fs');
mysql = require('mysql');
d3 = require('d3');



extractor = {};
extractor.personsinEpoch = {};
extractor.personsinEpoch.epochAndOccurrence = require('./data-extract/time-and-occurrence.json');
extractor.personsinEpoch.nextQuery == false;
extractor.personsinEpoch.epochIndex = extractor.personsinEpoch.epochAndOccurrence.length-1;
extractor.personsinEpoch.result = {};

extractor.personsinEpoch.launchQuery = function() {

    extractor.personsinEpoch.connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'root',
      database : 'ddb_normalized'
    });

    extractor.personsinEpoch.connection.connect();

    var limit = 100;
    console.log
    var epochID = extractor.personsinEpoch.epochAndOccurrence[extractor.personsinEpoch.epochIndex].time_id;
    extractor.personsinEpoch.nextQuery = false;

    console.log('Launching query with epochIndex:' + extractor.personsinEpoch.epochIndex);
    console.log('SELECT affiliate_fct.id AS affiliate_facet_id, affiliate_fct.value AS affiliate_facet, COUNT(DISTINCT affiliate_fct_items.item_id) AS occurrence FROM affiliate_fct_items INNER JOIN affiliate_fct ON affiliate_fct_items.facet_id = affiliate_fct.id INNER JOIN time_fct_items ON time_fct_items.item_id = affiliate_fct_items.item_id WHERE time_fct_items.facet_id = ' + epochID +' GROUP BY affiliate_fct.id ORDER BY occurrence DESC LIMIT 500');

        extractor.personsinEpoch.connection.query( 'SELECT affiliate_fct.id AS affiliate_facet_id, affiliate_fct.value AS affiliate_facet, COUNT(DISTINCT affiliate_fct_items.item_id) AS occurrence FROM affiliate_fct_items INNER JOIN affiliate_fct ON affiliate_fct_items.facet_id = affiliate_fct.id INNER JOIN time_fct_items ON time_fct_items.item_id = affiliate_fct_items.item_id WHERE time_fct_items.facet_id = ' + epochID +' GROUP BY affiliate_fct.id ORDER BY occurrence DESC LIMIT 500', 
        function( error, rows ) {
            if (rows != undefined) {

                items = {};
                items.epochID = extractor.personsinEpoch.epochAndOccurrence[extractor.personsinEpoch.epochIndex].time_id;
                items.epoch = extractor.personsinEpoch.epochAndOccurrence[extractor.personsinEpoch.epochIndex].time;
                items.count = rows.length;
                items.items = rows;

                var outputFilename = './data-extract/persons-in-epoch/'+extractor.personsinEpoch.epochAndOccurrence[extractor.personsinEpoch.epochIndex].time+'.json';

                fs.writeFile(outputFilename, JSON.stringify(items, null, 4),
                    function(error) {
                    if(error) {
                        console.log(error);
                    } else {
                      console.log("JSON saved to " + outputFilename);
                    }
                });

                extractor.personsinEpoch.nextQuery = true;

            }
            extractor.personsinEpoch.connection.end();
        }
    );
}

extractor.personsinEpoch.update = function() {

    if (extractor.personsinEpoch.nextQuery == true) {
        if (extractor.personsinEpoch.epochIndex > 0) {
            extractor.personsinEpoch.epochIndex--;
            extractor.personsinEpoch.launchQuery();
        } else {
            extractor.personsinEpoch.finish();
        }
    } else {
        console.log('...');
    }
}

extractor.personsinEpoch.finish = function() {
        console.log('... FINISHED!');
        clearInterval(interval);
}

extractor.personsinEpoch.launchQuery();
interval = setInterval(extractor.personsinEpoch.update, 1000 );
