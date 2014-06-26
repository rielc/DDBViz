
fs = require('fs');
mysql = require('mysql');
d3 = require('d3');


epochsAndPersons = [];
nextQuery = false;
fileIndex = 0;
personIndex = 0;
version = 'version-4';
file = '../../extracted-data/networks-in-time_fct/version-5/network_40.json';
saveDir = '../../extracted-data/affiliate-details/version-5/';


analyze = function(minOccurrence) {


    data = require(file);
    
    var min = minOccurrence;
    fs.readdirSync(dir+epochFolder).forEach( function(personFile, index) {

        if (personFile != '.DS_Store') {
            data = require(dir+epochFolder+'/'+personFile);

            // generate the epoch 

            if ( time_fcts[data.time_fct] == undefined ) {
                console.log('Added Epoch: ' + data.time_fct);
                time_fcts[data.time_fct] = {};
                time_fcts[data.time_fct].links = [];
                time_fcts[data.time_fct].nodes = [];
            }
            
            if (data.affiliate_fct_occurrence >= minOccurrence) {
                // new Person 1
                if( time_fcts[data.time_fct].nodes.map(function(n) { return n.facet_id; }).indexOf(data.affiliate_fct_id) == -1 ) {
                    time_fcts[data.time_fct].nodes.push(
                        {
                            affiliate_fct_id: data.affiliate_fct_id,
                            affiliate_fct: data.affiliate_fct,
                            affiliate_fct_occurrence: data.affiliate_fct_occurrence
                        });
                    console.log('Added Node: ' + data.affiliate_fct + ' in ' + data.time_fct);
                }


            sourceFacetID = data.affiliates.affiliate_fct_id;
            data.affiliates.forEach(
                function(affiliate) {
                    // new Person 2
                    if (affiliate.affiliate_fct_occurrence >= min) {
                        //console.log(min);
                        if ( time_fcts[data.time_fct].nodes.map(function(n) { return n.affiliate_fct_id; }).indexOf(affiliate.affiliate_fct_id) == -1) {
                            time_fcts[data.time_fct].nodes.push(affiliate);
                            //console.log('Added Node: ' + affiliate.value + ' in ' + data.time_fct);
                        }
                        var link = {
                            target_affiliate_fct_id : data.affiliate_fct_id, 
                            source_affiliate_fct_id : affiliate.affiliate_fct_id, 
                            value : affiliate.occurrence
                        };
                        time_fcts[data.time_fct].links.push(link);
                        //console.log(time_fcts[data.time_fct]);
                        //console.log('Added Link: ' + time_fcts[data.time_fct].nodes[link.source].affiliate_fct + ' > ' + time_fcts[data.time_fct].nodes[link.target].affiliate_fct);
                    }

                }
            );
        }

        }
        }
    );
    );
    saveJSON(saveDir, 'detail-'+ minOccurrence +'.json', time_fcts);
};



saveJSON = function(path, fileName, object) {

    if ( fs.existsSync(path) == false ) {
        fs.mkdirSync(path);
        console.log("Created directory: " + path);
    }

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


for(var i=5; i<81; i*=2) {
    analyze(i);
}



// asdf = function() {
//     console.log(epochs);
// };
//setInterval(asdf,1000);
