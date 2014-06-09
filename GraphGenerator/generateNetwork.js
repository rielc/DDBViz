
fs = require('fs');
mysql = require('mysql');
d3 = require('d3');


epochsAndPersons = [];
nextQuery = false;
fileIndex = 0;
personIndex = 0;
dir = '/Volumes/Data/Users/rielc/Coding/DDBViz/GraphGenerator/data-extract/related-persons-in-epoch/';
saveDir = '/Volumes/Data/Users/rielc/Coding/DDBViz/GraphGenerator/data-extract/networks-per-epoch/';
minOccurrence = 80;

epochs = {};

analyze = function() {

    // parse all the files
    fs.readdirSync( dir ).forEach( function(epochFolder, index) {
        if (epochFolder != '.DS_Store') {
            fs.readdirSync(dir+epochFolder).forEach( function(personFile, index) {
                if (personFile != '.DS_Store') {

                    data = require(dir+epochFolder+'/'+personFile);

                    // generate the epoch 
                    if ( epochs[data.time_fct] == undefined ) {
                        console.log('Added Epoch: ' + data.time_fct);
                        epochs[data.time_fct] = {};
                        epochs[data.time_fct].links = [];
                        epochs[data.time_fct].nodes = [];
                    }

                    // new Person 1
                    if( epochs[data.time_fct].nodes.map(function(n) { return n.facet_id; }).indexOf(data.affiliate_facet_id) == -1 ) {
                        epochs[data.time_fct].nodes.push( 
                            {
                                facet_id: data.from_affiliate_facet_id,
                                occurrence: data.occurrence,
                                value: data.from_affiliate_facet
                            });
                        //console.log('Added Node: ' + data.from_affiliate_facet + ' in ' + data.time_fct);
                    }

                    sourceFacetID = data.affiliates.from_affiliate_facet_id;

                    data.affiliates.forEach(
                        function(affiliate) {
                            // new Person 2
                            if (affiliate.occurrence > minOccurrence) {
                                if ( epochs[data.time_fct].nodes.map(function(n) { return n.facet_id; }).indexOf(affiliate.facet_id) == -1) {
                                    epochs[data.time_fct].nodes.push(affiliate);
                                    //console.log('Added Node: ' + affiliate.value + ' in ' + data.time_fct);
                                }
                                var link = {
                                    target : epochs[data.time_fct].nodes.map(function(n) { return n.facet_id; }).indexOf(data.from_affiliate_facet_id), 
                                    source : epochs[data.time_fct].nodes.map(function(n) { return n.facet_id; }).indexOf(affiliate.facet_id), 
                                    value : affiliate.occurrence
                                };
                                epochs[data.time_fct].links.push(link);
                                //console.log(epochs[data.time_fct]);
                                console.log('Added Link: ' + epochs[data.time_fct].nodes[link.source].value + ' > ' + epochs[data.time_fct].nodes[link.target].value);
                            }

                        }
                    );

                }
                }
            );
            }
        }
    );
    saveJSON(saveDir, 'network_'+ minOccurrence +'.json', epochs);
};



saveJSON = function(path, fileName, object) {

    fs.writeFile(path+fileName, JSON.stringify(object, null, 4), {flags: 'w'},
        function(error) {
            if(error) {
            console.log(error);
            } else {
                console.log("JSON saved: " + path+fileName);
            }
        }
    );

};



analyze();

// asdf = function() {
//     console.log(epochs);
// };
//setInterval(asdf,1000);
