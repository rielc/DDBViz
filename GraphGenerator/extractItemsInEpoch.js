
fs = require('fs');
mysql = require('mysql');
d3 = require('d3');



extractor = {};
extractor.itemsInEpoch = {};
extractor.itemsInEpoch.epochAndOccurrence = require('./data-extract/time-and-occurrence.json');
extractor.itemsInEpoch.nextQuery == false;
extractor.itemsInEpoch.epochIndex = extractor.itemsInEpoch.epochAndOccurrence.length-1;
extractor.itemsInEpoch.result = {};

    //extractor.itemsInEpoch.connection.query( 'SELECT affiliate_fct.id AS affiliate_fct_id, affiliate_fct.value AS affiliate_fct, COUNT(DISTINCT affiliate_fct_items.item_id) AS occurrence FROM affiliate_fct_items INNER JOIN affiliate_fct ON affiliate_fct_items.facet_id = affiliate_fct.id INNER JOIN time_fct_items ON time_fct_items.item_id = affiliate_fct_items.item_id WHERE time_fct_items.facet_id = '+ epochID +' GROUP BY affiliate_fct.id ORDER BY occurrence DESC LIMIT ' + limit, 


extractor.itemsInEpoch.launchQuery = function() {

    extractor.itemsInEpoch.connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'root',
      database : 'ddb_normalized'
    });

    extractor.itemsInEpoch.connection.connect();

    var limit = 100;
    console.log
    var epochID = extractor.itemsInEpoch.epochAndOccurrence[extractor.itemsInEpoch.epochIndex].time_id;
    extractor.itemsInEpoch.nextQuery = false;

    console.log('Launching query with epochIndex:' + extractor.itemsInEpoch.epochIndex);
    console.log('SELECT DISTINCT time_fct_items.item_id AS item_id FROM time_fct_items WHERE time_fct_items.facet_id = ' + epochID);

        extractor.itemsInEpoch.connection.query( 'SELECT DISTINCT time_fct_items.item_id AS item_id FROM time_fct_items WHERE time_fct_items.facet_id = ' + epochID, 
        function( error, rows ) {
            if (rows != undefined) {

                items = {};
                items.epochID = extractor.itemsInEpoch.epochAndOccurrence[extractor.itemsInEpoch.epochIndex].time_id;
                items.epoch = extractor.itemsInEpoch.epochAndOccurrence[extractor.itemsInEpoch.epochIndex].time;
                items.count = rows.length;
                items.items = rows;

                var outputFilename = './data-extract/items-in-epoch/'+extractor.itemsInEpoch.epochAndOccurrence[extractor.itemsInEpoch.epochIndex].time+'.json';

                fs.writeFile(outputFilename, JSON.stringify(items, null, 4),
                    function(error) {
                    if(error) {
                        console.log(error);
                    } else {
                      console.log("JSON saved to " + outputFilename);
                    }
                });

                extractor.itemsInEpoch.nextQuery = true;

            }
            extractor.itemsInEpoch.connection.end();
        }
    );
}

extractor.itemsInEpoch.update = function() {

    if (extractor.itemsInEpoch.nextQuery == true) {
        if (extractor.itemsInEpoch.epochIndex > 0) {
            extractor.itemsInEpoch.epochIndex--;
            extractor.itemsInEpoch.launchQuery();
        } else {
            extractor.itemsInEpoch.finish();
        }
    } else {
        console.log('...');
    }
}

extractor.itemsInEpoch.finish = function() {


}

extractor.itemsInEpoch.launchQuery();
setInterval(extractor.itemsInEpoch.update, 1000 );