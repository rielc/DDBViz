DDBAffiliateNetwork = function()
{

  this.svgWidth = $(window).width();

  this.timeFcts = ['time_61900', 'time_61947', 'time_61975', 'time_62000', 'time_62010', 'time_62020', 'time_62050', 'time_62100', 'time_62120', 'time_61925', 'time_62070', 'time_61800', 'time_61875', 'time_62110', 'time_62060', 'time_62080', 'time_62090', 'time_62095', 'time_61700', 'time_61705', 'time_61500', 'time_61545', 'time_61825', 'time_61600', 'time_61645', 'time_61847', 'time_62040', 'time_61745', 'time_62030', 'time_61907', 'time_61605', 'time_61807', 'time_61145', 'time_61100', 'time_61300', 'time_61305', 'time_61505', 'time_60500', 'time_60600', 'time_60700', 'time_60800', 'time_60900', 'time_61000', 'time_61105', 'time_61200', 'time_61205', 'time_61245', 'time_61345', 'time_61400', 'time_61405', 'time_61445', 'time_39600', 'time_39000', 'time_39700', 'time_60100', 'time_60200', 'time_60300', 'time_60400', 'time_39500', 'time_38900', 'time_38800', 'time_38000', 'time_39400', 'time_39300', 'time_38500', 'time_39800', 'time_38300', 'time_38100', 'time_39900', 'time_38400', 'time_38950', 'time_39200', 'time_37000', 'time_37700', 'time_38600', 'time_14000', 'time_39950', 'time_37400', 'time_36950', 'time_37500', 'time_37600', 'time_37900', 'time_37950', 'time_36000', 'time_38700', 'time_37800', 'time_38200', 'time_35000', 'time_36900', 'time_37100', 'time_17000', 'time_37200', 'time_39100', 'time_37300', 'time_34000', 'time_33000', 'time_15000', 'time_36800', 'time_36500', 'time_13000', 'time_36300', 'time_12000', 'time_18000', 'time_16000', 'time_30000', 'time_36200', 'time_36600', 'time_36700', 'time_36400', 'time_10000', 'time_60000', 'time_36100'];
  this.timeNames = ['19. Jahrhundert', '1851 bis 1875', '1876 bis 1900', '20. Jahrhundert', '1901 bis 1910', '1911 bis 1920', '1941 bis 1950', '21. Jahrhundert', '2011 bis 2020', '1826 bis 1850', '1961 bis 1970', '18. Jahrhundert', '1776 bis 1800', '2001 bis 2010', '1951 bis 1960', '1971 bis 1980', '1981 bis 1990', '1991 bis 2000', '17. Jahrhundert', '1601 bis 1650', '15. Jahrhundert', '1451 bis 1500', '1726 bis 1750', '16. Jahrhundert', '1551 bis 1600', '1751 bis 1775', '1931 bis 1940', '1651 bis 1700', '1921 bis 1930', '1801 bis 1825', '1501 bis 1550', '1701 bis 1725', '1051 bis 1100', '11. Jahrhundert', '13. Jahrhundert', '1201 bis 1250', '1401 bis 1450', '5. Jahrhundert', '6. Jahrhundert', '7. Jahrhundert', '8. Jahrhundert', '9. Jahrhundert', '10. Jahrhundert', '1001 bis 1050', '12. Jahrhundert', '1101 bis 1150', '1151 bis 1200', '1251 bis 1300', '14. Jahrhundert', '1301 bis 1350', '1351 bis 1400', '5. Jahrhundert vor Christus', '1. Jahrtausend vor Christus', '4. Jahrhundert vor Christus', '1. Jahrhundert', '2. Jahrhundert', '3. Jahrhundert', '4. Jahrhundert', '6. Jahrhundert vor Christus', '12. Jahrhundert vor Christus', '13. Jahrhundert vor Christus', '2. Jahrtausend vor Christus', '7. Jahrhundert vor Christus', '8. Jahrhundert vor Christus', '16. Jahrhundert vor Christus', '3. Jahrhundert vor Christus', '18. Jahrhundert vor Christus', '20. Jahrhundert vor Christus', '2. Jahrhundert vor Christus', '17. Jahrhundert vor Christus', '11. Jahrhundert vor Christus', '9. Jahrhundert vor Christus', '3. Jahrtausend vor Christus', '24. Jahrhundert vor Christus', '15. Jahrhundert vor Christus', 'Trias', '1. Jahrhundert vor Christus', '27. Jahrhundert vor Christus', '31. Jahrhundert vor Christus', '26. Jahrhundert vor Christus', '25. Jahrhundert vor Christus', '22. Jahrhundert vor Christus', '21. Jahrhundert vor Christus', '4. Jahrtausend vor Christus', '14. Jahrhundert vor Christus', '23. Jahrhundert vor Christus', '19. Jahrhundert vor Christus', '5. Jahrtausend vor Christus', '32. Jahrhundert vor Christus', '30. Jahrhundert vor Christus', 'Tertiär', '29. Jahrhundert vor Christus', '10. Jahrhundert vor Christus', '28. Jahrhundert vor Christus', '6. Jahrtausend vor Christus', '7. Jahrtausend vor Christus', 'Jura', '33. Jahrhundert vor Christus', '36. Jahrhundert vor Christus', 'Paläozoikum', '38. Jahrhundert vor Christus', 'Präkambrium', 'Quartär', 'Kreide', 'Urgeschichtliche Zeiträume (vor Christus)', '39. Jahrhundert vor Christus', '35. Jahrhundert vor Christus', '34. Jahrhundert vor Christus', '37. Jahrhundert vor Christus', 'Geologische Zeiträume', 'Historische Zeiträume', '40. Jahrhundert vor Christus'];
  this.parameters = { timeFct : "", affiliateMinOccurrence : 40 };


  this.networkWidth = $(window).width(), this.networkHeight = $(window).height();

  // append svg and resize
  this.svg = d3.select("#network")
    .attr("width", this.networkWidth)
    .attr("height", this.networkHeight);


    // collects all nodes in the beginning
    this.collectAllNodes = function () {
      var keys = d3.keys(this.data);
      for (var i=0; i<keys.length; i++) {
        var nodes = this.data[keys[i]].nodes;
        nodes.forEach(function(n) {
          if (self.allNodes.has(n.affiliate_fct_id) == false) {
            self.allNodes.set( n.affiliate_fct_id, {
                // id : n.affiliate_fct_id, 
                affiliate_fct_id : n.affiliate_fct_id, 
                affiliate_fct : n.affiliate_fct,
                affiliate_fct_occurrence : n.affiliate_fct_occurrence }
            );
          }
        });
      }
    };


    this.collectNewNodes = function (e0, e1) {
      if (this.timelineIDs[0] != e0 || this.timelineIDs[1] != e1) {

        this.timelineIDs[0] = e0;
        this.timelineIDs[1] = e1;

        var keys = [];
        var newNodes = d3.map();

        // sum the timeranges and put into paragraph
        this.timelineSums = [];
        for (var i=e0; i<e1; i++) {
          keys.push(this.timeFcts[i]);
          this.timelineSums.push(this.timeNames[i]);
          d3.select("#timeline-sums").text(this.timelineSums.join(', '));
        }

        // calculate the sum of all occurrences
        this.nodeValues = d3.map();
        for (var i=0; i<keys.length; i++) {
          var nodes = this.data[keys[i]].nodes;
          nodes.forEach(function (n) {
            if (self.nodeValues.has(n.affiliate_fct_id) == true) {
              self.nodeValues.get(n.affiliate_fct_id).affiliate_fct_occurrence_sum+=n.affiliate_fct_occurrence;
              self.nodeValues.get(n.affiliate_fct_id).affiliate_fct_occurrence_per_time_fct[n.affiliate_fct_id] = n.affiliate_fct_occurrence
            } else {
              self.nodeValues.set(n.affiliate_fct_id, {
                affiliate_fct_occurrence_sum : n.affiliate_fct_occurrence,
                affiliate_fct_occurrence_per_time_fct : {}
              });
            }
          });
        }


        // generate the new nodelist which will be compared
        for (var i=0; i<keys.length; i++) {
          var nodes = this.data[keys[i]].nodes;
          nodes.forEach(function(n) {
            if (newNodes.has(n.affiliate_fct_id) == false) {
              newNodes.set( n.affiliate_fct_id, {
                  affiliate_fct_id : n.affiliate_fct_id,
                  affiliate_fct : n.affiliate_fct }
              );
            } else {

            }
          });
        }

        var keysToRemove = _.difference(this.currentNodes.keys(), newNodes.keys());
        var keysToAdd = _.difference(newNodes.keys(), this.currentNodes.keys());

        //console.log(keysToAdd.length);

        keysToRemove.forEach(function (k) {
          self.currentNodes.remove(k);
        });

        keysToAdd.forEach(function (k) {
          self.currentNodes.set(k, self.allNodes.get(k));
        });


        for (var i=0; i<keys.length; i++) {
          var links = this.data[keys[i]].links;
          links.forEach(function (l) {
            var linkID = l.source_affiliate_fct_id+'_'+l.target_affiliate_fct_id;
            if (self.currentLinks.has(linkID) == false) 
              self.currentLinks.set(linkID, {
                source : self.currentNodes.get(l.source_affiliate_fct_id),
                target : self.currentNodes.get(l.target_affiliate_fct_id)
              });
          });
        }


        this.force
            .nodes( this.currentNodes.values() )
            .links( this.currentLinks.values() )
            .start();

        this.force.start();
        this.load();
        console.log('change');

        // calculate the sum of all occurrences
        this.currentLinks = d3.map();

      } else {
        console.log('no change');
      }
    };


/*

    this.updateData = function () {

      //console.log(this.data[this.parameters.timeFct].nodes.length);

      var addCount=0, existingCount=0, deleteCount=0;

/*
      for (var i=0; i < this.currentNodes.length; i++)
      {
        // delete nodes that arent in the new array
         if ( this.data[this.parameters.timeFct].nodes.map( function (n) { return n.affiliate_fct_id; }).indexOf(this.currentNodes[i].affiliate_fct_id) == -1 ) {
          //console.log( this.currentNodes[i] );
          this.currentNodes.splice(this.currentNodes.indexOf(i, 1);
          deleteCount++;
        } else {
          existingCount++;
        }
      }
      console.log('Deleted obsolete nodes: ' + deleteCount+' | Kept existing nodes: ' + existingCount);

      var addCount=0, existingCount=0;

    
      // console.log(this.currentNodes.length);
    
      // var t = _.intersection(this.currentNodes, this.data[this.parameters.timeFct].nodes);

      // t.forEach(function (n) {
      //   n.fixed = true;
      //   n.y = $(window).height()/2;
      // });

      // this.currentNodes = t;

      // console.log(this.currentNodes.length);

      this.currentNodes = this.force.nodes();
      var obsoleteNodes = _.difference(this.currentNodes, this.data[this.parameters.timeFct].nodes);

      //console.log(obsoleteNodes);

      self=this;

      if (obsoleteNodes.length > 0 && this.currentNodes.length > 0) {
        obsoleteNodes.forEach( function (el, i) {
          var index = self.currentNodes.map(function (n2) { return n2.affiliate_fct_id; }).indexOf(el.affiliate_fct_id);
          self.currentNodes.splice(index, 1 );
        });
      }


      for (var i=0; i<this.data[this.parameters.timeFct].nodes.length; i++)
      {
        if ( this.currentNodes.map( function (n) { return n.affiliate_fct_id; }).indexOf(this.data[this.parameters.timeFct].nodes[i].affiliate_fct_id) == -1 ) {
          this.currentNodes.push(this.data[this.parameters.timeFct].nodes[i]);
          addCount++;
        } else {
          existingCount++;
        }
      }

      console.log('Added new nodes: '+addCount+' | Skipped existing nodes: ' + existingCount);


    // self.force
    //     .nodes( this.currentNodes )
    //     .links( this.currentLinks );


    };

    */


  this.initTimeline = function () {

    this.timelineWidth = 940;


    var brushScale = d3.scale.linear()
      .domain([0,this.timeFcts.length-1])
      .range([0, this.timelineWidth]);

    this.brushEvent = function () {
      var extent0 = self.brush.extent(),
          extent1;

      // if dragging, preserve the width of the extent
      var d0 = Math.round(extent0[0]), d1 = Math.round(extent0[1]);
      d3.select(this).call(self.brush.extent([d0, d1]));
      self.collectNewNodes(d0, d1);
    };


    var yScale = d3.scale.linear()
      .domain([0, 300])
      .range([0, 100]);

    this.timeline = d3.select("#timeline")
      .attr("width", this.timelineWidth)
      .attr("class", "sixteen columns")
      .attr("height", 250);

    this.brush = d3.svg.brush()
      .x(brushScale)
      .extent([0, 1])
      .on("brush", this.brushEvent);

    this.ticks = this.timeline.append('g')
      .attr('id', 'ticks')
      // .attr("transform", 'translate(0,500)')
      .selectAll('rect')
      .data(this.timeFcts);


    this.gBrush = this.timeline.append("g")
        .attr("class", "brush")
        .attr("fill", "#fff")
        .call(this.brush);


    this.gBrush.selectAll("rect")
      .attr("height", 100)
      .attr('transform', 'translate(0,0)')
      .attr('fill-opacity', 0.2);

    this.ticks
      .enter()
      .append('rect')
      .attr('x', function (d, i) { return brushScale(i); } )
      .attr('y', 0 )
      .attr('width', function (d, i) { return brushScale(1); })
      .attr('height', 0 )
      .attr('fill', '#a40539')
      .attr('fill-opacity', 1)
      .transition()
      .duration(500)
      .delay( function (d, i) { return i*3; } )
      .attr('height', function (d, i) { if (self.data[d] != undefined) { return yScale(self.data[d].nodes.length); } else { return 0; }} )
      .attr('y', function (d, i) { if (self.data[d] != undefined) { return 100-yScale(self.data[d].nodes.length); } else { return 0; }} );

    this.labels = this.timeline.append('g')
      .attr("id", "labels")
      .selectAll('text')
      .data(this.timeNames)
      .enter()
      .append('text')
      .text(function (d) { return d; })
      .attr("transform", function (d,i) { return "translate("+brushScale(i)+",110)rotate(90)"})
      .attr("font-size", 8)
      .attr("stroke", "none")
      .attr("font-family", "Lato")
      .attr("font-weight", 200)
      .attr("fill", "#fff")
      .attr('fill-opacity', 0)
      .transition()
      .duration(500)
      .delay( function (d, i) { return i*3; } )
      .attr('fill-opacity', 1);
;


  };




  this.init = function() {

    self = this;

    this.data = {};
    this.version = 'version-4';

    this.timelineIDs = [];
    this.timelineSum = [];


    // create the force-directed-graph
    this.force = d3.layout.force()
      .charge(-20)
      .size([  this.networkWidth, this.networkHeight]);

    this.allNodes = d3.map();
    this.currentNodes = d3.map();
    this.nodeValues = d3.map();
    this.currentLinks = d3.map();

    /* Initialize tooltip */
    this.tip = d3.tip().attr('class', 'd3-tip').html( function (d) { return '<strong>'+d.affiliate_fct+'</strong> ('+d.affiliate_fct_occurrence+' Einträge)'; } );
    this.svg.call(this.tip);     /* Invoke the tip in the context of your visualization */

    this.parameters.timeFct = this.timeFcts[0];

    jQuery.getJSON( "./data/affiliates.json", function (result) {

      self.data = result;
      self.initTimeline();
      //self.brushEvent();
      self.collectAllNodes();
    });


  };




    // add nodes to force


  /*


  this.createtimelineBrush = function() { 

  this.timelineX = d3.time.scale()
    .domain([new Date(2013, 2, 1), new Date(2013, 2, 15) - 1])
    .range([0, width]);

  this.timelineBrush = d3.svg.brush()
      .x(x)
      .extent([new Date(2013, 2, 2), new Date(2013, 2, 3)])
      .on("brush", brushed);

  this.timelineGroup = this.svg.append("rect")
      .attr("class", "grid-background")
      .attr("width", width)
      .attr("height", height);


  this.svg.append("g")
      .attr("class", "x grid")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.svg.axis()
          .scale(x)
          .orient("bottom")
          .ticks(d3.time.hours, 12)
          .tickSize(-height)
          .tickFormat(""))
    .selectAll(".tick")
    .classed("minor", function(d) { return d.getHours(); });

  this.svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .ticks(d3.time.days)
        .tickPadding(0))
    .selectAll("text")
      .attr("x", 6)
      .style("text-anchor", null);

  };

  */






  this.load = function () {


    this.links = this.svg
      .selectAll(".link")
      .data( this.force.links() );
      // , function(d) { return (d.source+'-'+d.target); }

    this.links
      .enter()
      .append("line")
      .attr("class", "link")
      .style("stroke-opacity", 0.0)
      .style("stroke", '#a40539')
      .style("stroke-width", 2)
      .transition()
      .duration(500)
      .style("stroke-opacity", 1.0);

    this.links
      .exit()
      .transition()
      .duration(500)
      .style("stroke-opacity", 0.0)
      .remove();

    // selection
    this.affiliates = this.svg
      .selectAll(".affiliate")
      .data( this.force.nodes(), function (d) { return "affiliate_fct_id-" + d.affiliate_fct_id; } );


    // update existing
    this.affiliates
      .transition()
      .duration(1000)
      .attr("r", function (d) { return Math.sqrt( (self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence_sum) / Math.PI); });
      //.style("fill", '#000');

    // enter new affiliates
    this.affiliates
      .enter()
      .append("circle")
      .attr("r", function (d) { return 0; })
      .attr("id", function (d) { return "affiliate_fct_id-" + d.affiliate_fct_id } )
      .on('mouseover', this.tip.show)
      .on('mouseout', this.tip.hide)
      .on('click', function (d) { self.focusAffiliate(d) })
      .attr("class", "affiliate")
      .style("fill", '#cecece')
      .call( this.force.drag )
      .transition()
      .duration(500)
      //.delay( function (d, i) { return i*3; } )
      .attr("r", function (d) { return Math.sqrt( (self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence_sum) / Math.PI); })
      //.attr("r", 10)
      .style("fill-opacity", 0.3);

    // removed
    this.affiliates
      .exit()
      .transition()
      .duration(300)
      .attr("r", 0)
      .remove();


    this.focusAffiliate = function (d) {
      // d3.select(".fixed-affiliate")
      //   .style("fill", "#cecece")
      //   .call( function (d) {d.fixed = false; self.force.start();} );

      d3.select("#affiliate_fct_id-" + d.affiliate_fct_id)
        .call( function (d) {d.fixed = true; if (i==0) {this.force.stop();} })
        .attr("class", "fixed-affiliate")
        .transition()
        .duration(500)
        .style("fill", "#a40539")
        .attr("cx", function (d) { return 300 })
        .attr("cy", function (d) {   return self.networkHeight/2 } );
        //console.log(d);

    }

    this.visualizeNetwork = function () {
      this.affiliates
          .transition()
          .duration(1000)
          .delay( function (d, i) { return i*3; } )
          .call( function (d, i) { d.fixed = false; if (i==d.length-1) {self.force.start();} } )
          .attr("cx", function (d) { return d.px; })
          .attr("cy", function (d) { return d.py; });
    }


    this.sortByOccurence = function () {
      // d3.select(".fixed-affiliate")
      //   .style("fill", "#cecece")
      //   .call( function (d) {d.fixed = false; self.force.start();} );

      var maxOccurence = d3.max(this.nodeValues.values(), function (nv) {
        return nv.affiliate_fct_occurrence_sum;
      });

      var minOccurence = d3.min(this.nodeValues.values(), function (nv) {
        return nv.affiliate_fct_occurrence_sum;
      });

      var sortScale = d3.scale.log(2).domain([minOccurence, maxOccurence]).range([200, this.networkWidth-200]);

      this.affiliates
        .call( function (d,i) {if(i==0){self.force.stop(); d.fixed = true;}})
        .transition()
        .duration(500)
        .attr("cx", function (d,i) { return sortScale(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence_sum); })
        .attr("cy", function (d,i) { return i.networkHeight/2 } );
        //console.log(d);

    }



    this.force.on("tick", function (e) {

      var q = d3.geom.quadtree( self.affiliates[0] );

      for (var i=0; i<self.affiliates[0].length; i++) {
        q.visit( self.collide( self.affiliates[0][i] ) );
      }

      self.affiliates
        .attr("cx", function (d) { return d.x; })
        .attr("cy", function (d) { return d.y; });
        
      self.links
        .attr("x1", function (d) { return d.source.x; })
        .attr("y1", function (d) { return d.source.y; })
        .attr("x2", function (d) { return d.target.x; })
        .attr("y2", function (d) { return d.target.y; });
    });


  };


  this.collide = function ( node ) {

    var r = Math.sqrt( (node.__data__.affiliate_fct_occurrence) / Math.PI );
    var nx1 = node.__data__.x - r;
    var nx2 = node.__data__.x + r;
    var ny1 = node.__data__.y - r;
    var ny2 = node.__data__.y + r;

    return function (quad, x1, y1, x2, y2) {

      if ( quad.point && (quad.point !== node) ) {

        var x = node.__data__.x - quad.point.__data__.x;
        var y = node.__data__.y - quad.point.__data__.y;
        var l = Math.sqrt( x * x + y * y );
        var r = Math.sqrt( (node.__data__.affiliate_fct_occurrence) / Math.PI) + Math.sqrt( (quad.point.__data__.affiliate_fct_occurrence) / Math.PI);

        if ( l < r ) {
          l = (l - r) / l * .5;
          node.__data__.x -= x *= l;
          node.__data__.y -= y *= l;
          quad.point.__data__.x += x;
          quad.point.__data__.y += y;
        }

      }
      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
    };

  };


};


