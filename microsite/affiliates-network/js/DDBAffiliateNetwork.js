radius = function() {


};

DDBAffiliateNetwork = function()
{

  this.svgWidth = $(window).width();

  this.timeFcts = ['time_10000', 'time_12000', 'time_13000', 'time_14000', 'time_15000', 'time_16000', 'time_17000', 'time_18000', 'time_30000', 'time_60000', 'time_33000', 'time_34000', 'time_35000', 'time_36000', 'time_37000', 'time_38000', 'time_39000', 'time_36100', 'time_36200', 'time_36300', 'time_36400', 'time_36500', 'time_36700', 'time_36800', 'time_36900', 'time_36950', 'time_37100', 'time_37200', 'time_37300', 'time_37400', 'time_37500', 'time_37600', 'time_37700', 'time_37800', 'time_37900', 'time_37950', 'time_38100', 'time_38200', 'time_38300', 'time_38400', 'time_38500', 'time_38600', 'time_38700', 'time_38800', 'time_38900', 'time_38950', 'time_39100', 'time_39200', 'time_39300', 'time_39400', 'time_39500', 'time_39600', 'time_39700', 'time_39800', 'time_39900', 'time_39950', 'time_60100', 'time_60200', 'time_60300', 'time_60400', 'time_60500', 'time_60600', 'time_60700', 'time_60800', 'time_60900', 'time_61000', 'time_61105', 'time_61145', 'time_61205', 'time_61245', 'time_61305', 'time_61345', 'time_61405', 'time_61445', 'time_61505', 'time_61545', 'time_61605', 'time_61645', 'time_61705', 'time_61745', 'time_61807', 'time_61825', 'time_61847', 'time_61875', 'time_61907', 'time_61925', 'time_61947', 'time_61975', 'time_62010', 'time_62020', 'time_62030', 'time_62040', 'time_62050', 'time_62060', 'time_62070', 'time_62080', 'time_62090', 'time_62095', 'time_62110', 'time_62120'];
  this.timeNames = ['Geologische Zeiträume', 'Präkambrium', 'Paläozoikum', 'Trias', 'Jura', 'Kreide', 'Tertiär', 'Quartär', 'Urgeschichtliche Zeiträume (vor Christus)', 'Historische Zeiträume', '7. Jahrtausend vor Christus', '6. Jahrtausend vor Christus', '5. Jahrtausend vor Christus', '4. Jahrtausend vor Christus', '3. Jahrtausend vor Christus', '2. Jahrtausend vor Christus', '1. Jahrtausend vor Christus', '40. Jahrhundert vor Christus', '39. Jahrhundert vor Christus', '38. Jahrhundert vor Christus', '37. Jahrhundert vor Christus', '36. Jahrhundert vor Christus', '34. Jahrhundert vor Christus', '33. Jahrhundert vor Christus', '32. Jahrhundert vor Christus', '31. Jahrhundert vor Christus', '30. Jahrhundert vor Christus', '29. Jahrhundert vor Christus', '28. Jahrhundert vor Christus', '27. Jahrhundert vor Christus', '26. Jahrhundert vor Christus', '25. Jahrhundert vor Christus', '24. Jahrhundert vor Christus', '23. Jahrhundert vor Christus', '22. Jahrhundert vor Christus', '21. Jahrhundert vor Christus', '20. Jahrhundert vor Christus', '19. Jahrhundert vor Christus', '18. Jahrhundert vor Christus', '17. Jahrhundert vor Christus', '16. Jahrhundert vor Christus', '15. Jahrhundert vor Christus', '14. Jahrhundert vor Christus', '13. Jahrhundert vor Christus', '12. Jahrhundert vor Christus', '11. Jahrhundert vor Christus', '10. Jahrhundert vor Christus', '9. Jahrhundert vor Christus', '8. Jahrhundert vor Christus', '7. Jahrhundert vor Christus', '6. Jahrhundert vor Christus', '5. Jahrhundert vor Christus', '4. Jahrhundert vor Christus', '3. Jahrhundert vor Christus', '2. Jahrhundert vor Christus', '1. Jahrhundert vor Christus', '1. Jahrhundert', '2. Jahrhundert', '3. Jahrhundert', '4. Jahrhundert', '5. Jahrhundert', '6. Jahrhundert', '7. Jahrhundert', '8. Jahrhundert', '9. Jahrhundert', '10. Jahrhundert', '1001 bis 1050', '1051 bis 1100', '1101 bis 1150', '1151 bis 1200', '1201 bis 1250', '1251 bis 1300', '1301 bis 1350', '1351 bis 1400', '1401 bis 1450', '1451 bis 1500', '1501 bis 1550', '1551 bis 1600', '1601 bis 1650', '1651 bis 1700', '1701 bis 1725', '1726 bis 1750', '1751 bis 1775', '1776 bis 1800', '1801 bis 1825', '1826 bis 1850', '1851 bis 1875', '1876 bis 1900', '1901 bis 1910', '1911 bis 1920', '1921 bis 1930', '1931 bis 1940', '1941 bis 1950', '1951 bis 1960', '1961 bis 1970', '1971 bis 1980', '1981 bis 1990', '1991 bis 2000', '2001 bis 2010', '2011 bis 2020'];
  this.parameters = { timeFct : "", affiliateMinOccurrence : 40 };

  this.nodePositioning = "network";
  this.minOccurrence = 40;

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


        if (this.timelineIDs[0] < e0) {
          this.timelineDirection = "future";
        } else {
          this.timelineDirection = "past";
        }

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


        // calculate the sum of all occurrences
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
          var nodes = this.data[keys[i]].nodes; // .filter(function (n) { return self.nodeValues.get(n.affiliate_fct_id).affiliate_fct_occurrence_sum > self.minOccurrence;});
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


        // remove and add nodes to the current graph

        var keysToRemove = _.difference(this.currentNodes.keys(), newNodes.keys());
        var keysToAdd = _.difference(newNodes.keys(), this.currentNodes.keys());

        keysToRemove.forEach(function (k) {
          self.currentNodes.remove(k);
        });

        keysToAdd.forEach(function (k) {
          self.currentNodes.set(k, self.allNodes.get(k));
        });


        // generate current links
        this.currentLinks = d3.map();
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
          .links( this.currentLinks.values() );
        this.force.start();

        var maxOccurence = d3.max(this.nodeValues.values(), function (nv) {
          return nv.affiliate_fct_occurrence_sum;
        });

        var minOccurence = d3.min(this.nodeValues.values(), function (nv) {
          return nv.affiliate_fct_occurrence_sum;
        });

        this.horizontalScale = d3.scale.log(2).domain([minOccurence, maxOccurence]).range([200, this.networkWidth-200]);


        this.load();

      } else {
      }
    };


  this.initTimeline = function () {

    this.timelineWidth = 820;
    var brushScale = d3.scale.linear()
      .domain([0,this.timeFcts.length-1])
      .range([0, this.timelineWidth]);

    this.brushEvent = function () {
      var extent0 = self.brush.extent(),
          extent1;

      // if dragging, preserve the width of the extent
      //var d0 = Math.round(extent0[0]), d1 = Math.round(extent0[1]);


      d0 = Math.round(brushScale.invert(d3.mouse(this)[0]));
      d1=d0+1;

      // console.log('d0: '+d0);
      // console.log('d1: '+d1);

      //   //d1 = d0+1;
      // console.log('nd0: '+d0);
      // console.log('nd1: '+d1);

      if (d1>d0) {
        d0 = d1-1;
      } else {
        if (d1<d0) {
          d1 = d0+1;
        }
      }


      if (d0 > self.timeFcts.length-1) {
        d0 = self.timeFcts.length-2;
        d1 = self.timeFcts.length-1;
      }

      if (d0 < 1) {
        d0 = 0;
        d1 = 1;
      }

      d3.select(this).call(self.brush.extent([d0, d1]));
      self.collectNewNodes(d0, d1);
    };


    var yScale = d3.scale.linear()
      .domain([0, 300])
      .range([0, 40]);

    this.timeline = d3.select("#timeline")
      .attr("width", this.timelineWidth)
      .attr("height", 40);

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
      .attr("height", 40)
      .attr('transform', 'translate(0,0)')
      .attr('fill-opacity', 0.2);


    this.timeFacetTip = d3.tip().attr('class', 'd3-tip').html( function (i) { return '<h3>'+self.timeNames[i]+'</h3>'; } );
    //this.timeFacetTip.show();
    this.timeline.call(this.timeFacetTip);


    this.ticks
      .enter()
      .append('rect')
      .attr('x', function (d, i) { return brushScale(i); } )
      .attr('y', 0 )
      .attr('width', function (d, i) { return brushScale(1)-1; })
      .attr('height', 0 )
      .attr('fill', '#a40539')
      .attr('fill-opacity', 1)
      .on('mouseover', this.timeFacetTip.show)
      .transition()
      .duration(500)
      .delay( function (d, i) { return i*3; } )
      .attr('height', function (d, i) { if (self.data[d] != undefined) { return yScale(self.data[d].nodes.length); } else { return 0; }} )
      .attr('y', function (d, i) { if (self.data[d] != undefined) { return 40-yScale(self.data[d].nodes.length); } else { return 0; }} );

    /*
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
      .style('fill-opacity', 0)
      .transition()
      .duration(500)
      .delay( function (d, i) { return i*3; } )
      .style('fill-opacity', 1); */

  };

  this.switchNodepositioning = function (mode) {

    switch(mode) {
      case "network" :

        this.nodePositioning = "network";

        this.affiliates
          .call(function (d,i) { d.fixed=false; if(i==0){ self.force.stop();} })
          .transition()
          .duration(1000)
          .attr("cx", function (d) { return d.x;} )
          .attr("cy", function (d) { return d.y;} )
          .call(function (d,i) { if(i==d.length-1){ self.force.start();} });

          //this.updateNodes();

      break;
      case "sortByOccurrence" :

        this.nodePositioning = "sortByOccurrence";
        this.links.remove();
        this.updateNodes();
      break;

    }
  };


  this.updateNodes = function () {

    switch(this.nodePositioning) {

      case "network" :
        this.affiliates
          .style("fill", '#cecece')
          .style("fill-opacity", 1.0)
          .transition()
          .duration(1000)
          .attr("r", function (d) { return Math.sqrt( (self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence_sum) / Math.PI); });
      break;

      case "sortByOccurrence" :

        this.affiliates
          .call( function (d,i) { d.fixed = true;})
          .transition()
          .duration(500)
          .style("fill", '#cecece')
          .style("fill-opacity", 0.5)
          .attr("r", function (d) { return Math.sqrt( (self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence_sum) / Math.PI); })
          .attr("cx", function (d,i) { return self.horizontalScale(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence_sum); })
          .attr("cy", function (d,i) { return self.networkHeight/2 } );
      break;

    }

  };


  this.enterNodes = function () {


    switch(this.nodePositioning) {

      case "network" :

    // enter new affiliates
        this.affiliates
          .enter()
          .append("circle")
          .on("mouseover", function (d,i) { self.focus("node", d); self.tip.show(d);} )
          .on("mouseout", function (d,i) { self.defocus(); self.tip.hide();} )
          //.attr("filter", "url(#dropshadow)")
          //.on('click', function (d) { self.focusAffiliate(d) })
          .attr("id", function (d) { return "affiliate_fct_id-" + d.affiliate_fct_id } )
          .attr("class", "affiliate")
          .attr("r", function (d) { return 0; })
          //.attr("fill" ,"url(#hatch00);")
          .on("click", function (d) { self.openDDB("node", d.affiliate_fct); })
          .style("stroke", "#222")
          .style("stroke-width", "2")
          .style("stroke-location", "inside")
          .style("fill", '#cecece')
          .transition()
          .delay(1500)
          .duration(500)
          .delay(function(d, i) {return i*3;})
          .attr("r", function (d) { return Math.sqrt( (self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence_sum) / Math.PI); })
          .style("fill-opacity", 1.0);


      break;

      case "sortByOccurrence" :

        this.affiliates
          .enter()
          .append("circle")
          .attr("r", function (d) { return 0; })
          .attr("id", function (d) { return "affiliate_fct_id-" + d.affiliate_fct_id } )
          .on("mouseover", function (d,i) { self.focus("node", d); self.tip.show(d);} )
          .on("mouseout", function (d,i) { self.defocus(); self.tip.hide();} )
          .on('click', function (d) { self.focusAffiliate(d) })
          .attr("class", "affiliate")
          .style("fill", '#cecece')
          .attr("cx", function (d,i) { return self.horizontalScale(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence_sum); })
          .attr("cy", function (d,i) { return self.networkHeight/2 } )
          .on("click", function (d) { self.loadNormdata(d.affiliate_fct_id); })
          .transition()
          .duration(500)
          .delay(function(d, i) {return i*10;})
          .attr("r", function (d) { return Math.sqrt( (self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence_sum) / Math.PI); })
          .style("fill-opacity", 0.3);

      break;


    }

  };



  this.loadNormdata = function (affiliateFacetID) {

      jQuery.getJSON("http://api.lobid.org/person?name="+this.allNodes.get(affiliateFacetID).affiliate_fct+"&format=full" , function (result) {
        console.log(result);
      });
  };


  this.openDDB = function (mode, data) {

    switch(mode) {
      case "node":
      console.log(data);
        window.open("https://www.deutsche-digitale-bibliothek.de/searchresults?query=&facetValues%5B%5D=affiliate_fct_role%3D"+encodeURIComponent(data)+"&offset=0&viewType=grid")
      break;

      case "link":
      var query = 'affiliate\:\('+encodeURI(data.source.affiliate_fct)+') AND affiliate\:\('+encodeURI(data.target.affiliate_fct)+'\)&viewType=grid';
        window.open('https://www.deutsche-digitale-bibliothek.de/searchresults?query='+query);
      break;
    }
  };

  this.defocus = function () {
    this.links.attr("opacity", 1.0);
    this.affiliates.attr("opacity", 1.0);
  };


  this.focus = function (mode, data) {

    this.links.attr("opacity", 0.1);
    this.affiliates.attr("opacity", 0.3);

    switch(mode) {
      case "node":
        d3.select("#affiliate_fct_id-" + data.affiliate_fct_id).attr("opacity", 1.0);
      break;

      case "link":
        d3.select("#link-"+data.source.affiliate_fct_id+'_'+data.target.affiliate_fct_id).attr("opacity", 1.0);
        d3.select("#affiliate_fct_id-" + data.source.affiliate_fct_id).attr("opacity", 1.0);
        d3.select("#affiliate_fct_id-" + data.target.affiliate_fct_id).attr("opacity", 1.0);
      break;
    }

  };


  this.init = function() {

    self = this;

    this.data = {};
    this.version = 'version-4';

    this.timelineIDs = [];
    this.timelineSum = [];


    // create the force-directed-graph
    this.force = d3.layout.force()
      .charge(function (d) { return Math.sqrt(Math.sqrt(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence_sum))*-20 - 40; })
      .friction(0.85)
      .linkDistance(function (d) { return Math.sqrt( (self.nodeValues.get(d.source.affiliate_fct_id).affiliate_fct_occurrence_sum) / Math.PI ) + 10 + Math.sqrt( (self.nodeValues.get(d.target.affiliate_fct_id).affiliate_fct_occurrence_sum) / Math.PI )})
      .size([  this.networkWidth, this.networkHeight]);

    this.allNodes = d3.map();
    this.currentNodes = d3.map();
    this.nodeValues = d3.map();
    this.currentLinks = d3.map();

    /* Initialize tooltip */
    this.tip = d3.tip().attr('class', 'd3-tip').html( function (d) { return '<h3>'+d.affiliate_fct+'</h3><p>'+self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence_sum+' Einträge)</p>'; } );

    this.svg.call(this.tip);     /* Invoke the tip in the context of your visualization */

    this.parameters.timeFct = this.timeFcts[0];

    jQuery.getJSON( "./data/detail-20.json", function (result) {

      self.data = result;
      self.initTimeline();
      //self.brushEvent();
      self.collectAllNodes();
    });


    this.force.on("tick", function (e) {

      self.nodeValues.keys().forEach(function (id) {
        self.nodeValues.get(id).networkPosition = {
          x : self.currentNodes.get(id).x,
          y : self.currentNodes.get(id).y
        };
      });

      function collide (node) {

        var nr = Math.sqrt( (self.nodeValues.get(node.affiliate_fct_id).affiliate_fct_occurrence_sum) / Math.PI );
        var nx1 = node.x - nr;
        var nx2 = node.x + nr;
        var ny1 = node.y - nr;
        var ny2 = node.y + nr;

        return function(quad, qxy, qy1, qx2, qy2) {

        if ( quad && (quad !== node) && quad.point != undefined ) {


          // console.log(node);
          // console.log(quad);

          var x = node.x - quad.point.x;
          var y = node.y - quad.point.y;
          var distance = Math.sqrt( x * x + y * y );
          var distanceOfCombinedRadius = Math.sqrt( (self.nodeValues.get(node.affiliate_fct_id).affiliate_fct_occurrence_sum) / Math.PI) + Math.sqrt( (self.nodeValues.get(quad.point.affiliate_fct_id).affiliate_fct_occurrence_sum) / Math.PI);
            if ( distance < distanceOfCombinedRadius ) {
              distance = (distance - distanceOfCombinedRadius) / distance * .5;
              node.x -= (x *= distance);
              node.y -= (y *= distance);
              quad.x += x;
              quad.y += y;
            }
          }
          return qxy > nx2 
              || qx2 < nx1
              || qy1 > ny2 
              || qy2 < ny1;
        };
      }

        // var q = d3.geom.quadtree(self.force.nodes());

        // for (var i=0; i<self.force.nodes().length; ++i) {
        //   q.visit( collide(self.force.nodes()[i]) );
        // }


      switch(self.nodePositioning) {
        case "network" :
          self.affiliates
            .attr("cx", function (d) { if (!d.fixed) {return d.x;}} )
            //.attr("cx", function (d,i) { return self.horizontalScale(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence_sum); })
            .attr("cy", function (d) { if (!d.fixed) {return d.y;}} );
          self.links
            .attr("x1", function (d) { return d.source.x; })
            .attr("x2", function (d) { return d.target.x; })
            //.attr("x1", function (d,i) { return self.horizontalScale(self.nodeValues.get(d.source.affiliate_fct_id).affiliate_fct_occurrence_sum); })
            //.attr("x2", function (d,i) { return self.horizontalScale(self.nodeValues.get(d.target.affiliate_fct_id).affiliate_fct_occurrence_sum); })
            .attr("y1", function (d) { return d.source.y; })
            .attr("y2", function (d) { return d.target.y; });
        break;
        case "sortByOccurrence" :
          // copies the network-positions

        break;
        }
      });
  };




    // add nodes to force


  /*

  this.defs = this.svg.append("defs");

  this.filter = this.defs
      .append("filter")
      .attr("id", "dropshadow");

  this.filter
      .append("feGaussianBlur")
      .attr("in", "SourceAlpha")
      .attr("stdDeviation", 2)
      .attr("result", "blur");

  this.filter
      .append("feOffset")
      .attr("in", "blur")
      .attr("dx", 0)
      .attr("dy", 0)
      .attr("result", "offsetBlur");

  this.feMerge = this.filter.append("feMerge");

  this.feMerge.append("feMergeNode")
      .attr("in", "offsetBlur");

  this.feMerge.append("feMergeNode")
      .attr("in", "SourceGraphic");

  };

  */






  this.load = function () {

    this.links = this.svg
      .select("g#links")
      .selectAll(".link")
      .data( this.force.links(), function (d) { return (d.source.affiliate_fct_id+'_'+d.target.affiliate_fct_id);} );
      // ,  }

    this.links
      .attr("stroke-opacity", 0.0)
      .transition()
      .duration(500)
      .delay(1000)
      .style("stroke-opacity", 0.5);

    this.links
      .enter()
      .append("line")
      .on("mouseover", function (d,i) { self.focus("link", d);} )
      .on("mouseout", function (d,i) { self.defocus();} )
      .attr("class", "link")
      .attr("id", function (d) { return "link-"+d.source.affiliate_fct_id+'_'+d.target.affiliate_fct_id; })
      .attr("stroke-opacity", 0.0)
      .on("click", function (d) { self.openDDB("link", d); })
      .style("stroke", '#a40539')
      .style("stroke-width", 6)
      .transition()
      .duration(500)
      .delay(1000)
      .style("stroke-opacity", 0.5);

    this.links
      .exit()
      .transition()
      .duration(100)
      .style("stroke-opacity", 0.0)
      .remove();

    // selection
    this.affiliates = this.svg
      .select("g#nodes")
      .selectAll(".affiliate")
      .data(this.force.nodes() , function (d) { return "affiliate_fct_id-" + d.affiliate_fct_id; } );


      this.updateNodes();
      this.enterNodes();

    // remove affiliates
    this.affiliates
      .exit()
      .transition()
      .duration(300)
      .style("fill-opacity", 0.0)
      .style("fill", '#000')
      .transition()
      .duration(700)
      //.attr("cx", function (d,i) { var offset = 0; if( self.timelineDirection == "future" ) { offset = self.networkWidth*-1 } else { offset = self.networkWidth } return d.x + offset; })
      .remove();


    this.focusAffiliate = function (d) {
      d3.select(".fixed-affiliate")
        .style("fill", "#cecece")
        .call( function (d) {d.fixed = false; self.force.start();} );

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

  };


};


