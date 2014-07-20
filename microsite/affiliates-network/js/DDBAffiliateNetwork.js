DDBAffiliateNetwork = function()
{

  this.svgWidth = $(window).width();

  this.timeFcts = ['time_10000', 'time_12000', 'time_13000', 'time_14000', 'time_15000', 'time_16000', 'time_17000', 'time_18000', 'time_30000', 'time_60000', 'time_33000', 'time_34000', 'time_35000', 'time_36000', 'time_37000', 'time_38000', 'time_39000', 'time_36100', 'time_36200', 'time_36300', 'time_36400', 'time_36500', 'time_36700', 'time_36800', 'time_36900', 'time_36950', 'time_37100', 'time_37200', 'time_37300', 'time_37400', 'time_37500', 'time_37600', 'time_37700', 'time_37800', 'time_37900', 'time_37950', 'time_38100', 'time_38200', 'time_38300', 'time_38400', 'time_38500', 'time_38600', 'time_38700', 'time_38800', 'time_38900', 'time_38950', 'time_39100', 'time_39200', 'time_39300', 'time_39400', 'time_39500', 'time_39600', 'time_39700', 'time_39800', 'time_39900', 'time_39950', 'time_60100', 'time_60200', 'time_60300', 'time_60400', 'time_60500', 'time_60600', 'time_60700', 'time_60800', 'time_60900', 'time_61000', 'time_61105', 'time_61145', 'time_61205', 'time_61245', 'time_61305', 'time_61345', 'time_61405', 'time_61445', 'time_61505', 'time_61545', 'time_61605', 'time_61645', 'time_61705', 'time_61745', 'time_61807', 'time_61825', 'time_61847', 'time_61875', 'time_61907', 'time_61925', 'time_61947', 'time_61975', 'time_62010', 'time_62020', 'time_62030', 'time_62040', 'time_62050', 'time_62060', 'time_62070', 'time_62080', 'time_62090', 'time_62095', 'time_62110', 'time_62120'];
  this.timeNames = ['Geologische Zeiträume', 'Präkambrium', 'Paläozoikum', 'Trias', 'Jura', 'Kreide', 'Tertiär', 'Quartär', 'Urgeschichtliche Zeiträume (vor Christus)', 'Historische Zeiträume', '7. Jahrtausend vor Christus', '6. Jahrtausend vor Christus', '5. Jahrtausend vor Christus', '4. Jahrtausend vor Christus', '3. Jahrtausend vor Christus', '2. Jahrtausend vor Christus', '1. Jahrtausend vor Christus', '40. Jahrhundert vor Christus', '39. Jahrhundert vor Christus', '38. Jahrhundert vor Christus', '37. Jahrhundert vor Christus', '36. Jahrhundert vor Christus', '34. Jahrhundert vor Christus', '33. Jahrhundert vor Christus', '32. Jahrhundert vor Christus', '31. Jahrhundert vor Christus', '30. Jahrhundert vor Christus', '29. Jahrhundert vor Christus', '28. Jahrhundert vor Christus', '27. Jahrhundert vor Christus', '26. Jahrhundert vor Christus', '25. Jahrhundert vor Christus', '24. Jahrhundert vor Christus', '23. Jahrhundert vor Christus', '22. Jahrhundert vor Christus', '21. Jahrhundert vor Christus', '20. Jahrhundert vor Christus', '19. Jahrhundert vor Christus', '18. Jahrhundert vor Christus', '17. Jahrhundert vor Christus', '16. Jahrhundert vor Christus', '15. Jahrhundert vor Christus', '14. Jahrhundert vor Christus', '13. Jahrhundert vor Christus', '12. Jahrhundert vor Christus', '11. Jahrhundert vor Christus', '10. Jahrhundert vor Christus', '9. Jahrhundert vor Christus', '8. Jahrhundert vor Christus', '7. Jahrhundert vor Christus', '6. Jahrhundert vor Christus', '5. Jahrhundert vor Christus', '4. Jahrhundert vor Christus', '3. Jahrhundert vor Christus', '2. Jahrhundert vor Christus', '1. Jahrhundert vor Christus', '1. Jahrhundert', '2. Jahrhundert', '3. Jahrhundert', '4. Jahrhundert', '5. Jahrhundert', '6. Jahrhundert', '7. Jahrhundert', '8. Jahrhundert', '9. Jahrhundert', '10. Jahrhundert', '1001 bis 1050', '1051 bis 1100', '1101 bis 1150', '1151 bis 1200', '1201 bis 1250', '1251 bis 1300', '1301 bis 1350', '1351 bis 1400', '1401 bis 1450', '1451 bis 1500', '1501 bis 1550', '1551 bis 1600', '1601 bis 1650', '1651 bis 1700', '1701 bis 1725', '1726 bis 1750', '1751 bis 1775', '1776 bis 1800', '1801 bis 1825', '1826 bis 1850', '1851 bis 1875', '1876 bis 1900', '1901 bis 1910', '1911 bis 1920', '1921 bis 1930', '1931 bis 1940', '1941 bis 1950', '1951 bis 1960', '1961 bis 1970', '1971 bis 1980', '1981 bis 1990', '1991 bis 2000', '2001 bis 2010', '2011 bis 2020'];
  this.parameters = { timeFct : "", affiliateMinOccurrence : 40 };

  this.nodePositioning = "network";
  this.minOccurrence = 40;
  this.maxNodeCount =0;
  this.maxNodeCount =100;

  this.networkWidth = $(window).width(), 
  this.networkHeight = $(window).height()-$(".header").outerHeight(true)-$(".subheader").outerHeight(true);

  console.log(this.networkHeight)

  this.globalMaxOccurence = 0, this.globalMinOccurence = 1000;

  // append svg and resize
  this.svg = d3.select("#network")
    .attr("width", this.networkWidth)
    .attr("height", this.networkHeight); //this.networkHeight
    

    var x = d3.scale.linear()
        .domain([0, this.networkWidth])
        .range([0, this.networkWidth]);

    var y = d3.scale.linear()
        .domain([0, this.networkHeight])
        .range([this.networkHeight, 0]);


    function zoom(d) {

      if (self.force.alpha() == 0) {

        self.affiliates
          .attr("cx", transformX)
          .attr("cy", transformY);

        self.links
          .attr("x1", function(d) { return transformX(d.source); })
          .attr("x2", function(d) { return transformX(d.target); })
          .attr("y1", function(d) { return transformY(d.source); })
          .attr("y2", function(d) { return transformY(d.target); });

        self.clickableLinks
          .attr("x1", function(d) { return transformX(d.source); })
          .attr("x2", function(d) { return transformX(d.target); })
          .attr("y1", function(d) { return transformY(d.source); })
          .attr("y2", function(d) { return transformY(d.target); });
      }

    }
    function transformX(d) {
      return x(d.x);
    }

    function transformY(d) {
      return y(d.y);

    }

  this.svg
    .call(d3.behavior.zoom().x(x).y(y).scaleExtent([1, 8]).on("zoom", zoom));


    this.resizeWindow  = function () {
      // fetch the new sizes
      this.networkWidth = $(window).width(), 
      this.networkHeight = $(window).height()-$(".header").outerHeight(true)-$(".subheader").outerHeight(true);
      this.svg
        .attr("width", this.networkWidth)
        .attr("height", this.networkHeight);
      this.force.size([this.networkWidth, this.networkHeight]);
    }


    // collects all nodes in the beginning
    this.collectAllNodes = function () {
      var keys = d3.keys(this.data);
      var unused = _.difference(keys, this.timeFcts);

      // walk through all epochs
      for (var i=0; i<keys.length; i++) {
        var nodes = this.data[keys[i]].nodes;
        var links = this.data[keys[i]].links;

      // for every node in that epoch
        nodes.forEach(function(n) {
          if (self.allNodes.has(n.affiliate_fct_id) == false) {
            self.allNodes.set( n.affiliate_fct_id, {
                affiliate_fct_id : n.affiliate_fct_id, 
                affiliate_fct : n.affiliate_fct,
                affiliate_fct_occurrence : n.affiliate_fct_occurrence }
            );
          }
        });


        //console.log(unused);

        // make sure the ignored epochs are not counted
        if (unused.indexOf(keys[i]) == -1) {
          // update the minimum/maximum occurrences as reference for scales
          var currentMax = d3.max(nodes, function (nv) { return nv.affiliate_fct_occurrence; });
          var currentMin = d3.min(nodes, function (nv) { return nv.affiliate_fct_occurrence; });
          if (currentMin != undefined && currentMax != undefined) {
            if (this.globalMaxOccurence<currentMax) { this.globalMaxOccurence = currentMax; }
            if (this.globalMinOccurence>currentMin && currentMin !=0) { this.globalMinOccurence = currentMin; }
            // update the scale
          }

          // get min/max node count
          if (this.maxNodeCount<nodes.length) { this.maxNodeCount = nodes.length; }
          if (this.minNodeCount>nodes.length) { this.minNodeCount = nodes.length; }

        }
        this.radiusScale = d3.scale.log(100).domain([this.globalMinOccurence, this.globalMaxOccurence]).range([1, 40]);
      }

    };


    this.radius = function(value) {

      return this.radiusScale(value);
      //return Math.sqrt((value)/Math.PI);

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
          var preposition = " im ";
          if (i<10) {
            preposition = " während des ";
          }
          if (i>65) {
            preposition = " von ";
          }
          d3.select("#preposition").text(preposition);
          d3.select("#time-facet-name").text(this.timelineSums.join(', '));
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

        this.horizontalScale = d3.scale.log(2).domain([minOccurence, maxOccurence]).range([ , this.networkWidth-200]);


        this.load();

      } else {
      }
    };


  this.initTimeline = function () {

    this.timelineWidth = 1200,  this.timelineHeight = 120;

    var margin = 10;

    var brushScale = d3.scale.linear()
      .domain([0,this.timeFcts.length])
      .range([margin, this.timelineWidth-margin]);


    var brushWidth = (this.timelineWidth-margin*2)/this.timeNames.length;

    this.brushEvent = function () {
      var extent0 = self.brush.extent(),
          extent1;

      d0 = Math.round(brushScale.invert(d3.mouse(this)[0]));
      d1=d0+1;

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

      d3.selectAll(".time-facet-labels").style("fill", "#292929");
      d3.selectAll(".time-facet-ticks").style("fill", "#292929");
      d3.select(".time-facet-label-"+self.timeFcts[d0]).style("fill", "a40539");
      d3.select(".time-facet-tick-"+self.timeFcts[d0]).style("fill", "a40539");

      d3.select(".extent").attr("width", brushWidth-2);
    };


    var yScale = d3.scale.linear()
      .domain([0, this.maxNodeCount])
      .range([0, 30]);

    this.timeline = d3.select("#timeline")
      .attr("width", this.timelineWidth)
      .attr("height", this.timelineHeight);

    this.brush = d3.svg.brush()
      .x(brushScale)
      .extent([this.timeFcts.length-1, this.timeFcts.length])
      .on("brush", this.brushEvent);

    this.ticks = this.timeline.append('g')
      .attr('id', 'ticks')
      // .attr("transform", 'translate(0,500)')
      .selectAll('rect')
      .data(this.timeFcts);


    this.gBrush = this.timeline.append("g")
        .attr("class", "brush")
        .call(this.brush);


    this.gBrush.selectAll("rect")
      .attr("height", 30)
      .attr('transform', 'translate(0,0)')
      .style('fill-opacity', 1.0)
      .style("fill", "#a40539");


    this.timeFacetTip = d3.tip().attr('class', 'd3-tip').html( function (i) { return '<h3>'+self.timeNames[i]+'</h3>'; } );
    //this.timeFacetTip.show();
    this.timeline.call(this.timeFacetTip);


    var labelWhitelist = [17, 26, 36, 46, 51, 56, 60, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86];

    function simpleTimename(t) {

          timeName = t;

          if(timeName.indexOf("vor Christus") > -1){
            timeName = "-"+timeName.replace(" v. Chr.","");
          }

          if(timeName.indexOf("Jahrhundert") > -1){
            var s = timeName.split(". Jahrhundert");
            timeName = s[0]+"00";
          }

          if(timeName.indexOf("bis") > -1){
            var s = timeName.split(" bis ");
            timeName = s[0].toString()+" bis "+s[1].toString();
          }

          return timeName;

    }

    this.ticks
      .enter()
      .append('rect')
      .attr("class", function (d, i) { return "time-facet-ticks time-facet-tick-"+self.timeFcts[i]; })
      .attr('x', function (d, i) { return brushScale(i); } )
      .attr('y', 0 )
      .attr('width', function (d, i) { return brushWidth-2; })
      .attr('height', 0 )
      .attr('fill', '#363636')
      .attr('fill-opacity', 1)
      .attr('height', function (d, i) { if (self.data[d] != undefined) { return yScale(self.data[d].nodes.length); } else { return 0; }} )
      .attr('y', function (d, i) { if (self.data[d] != undefined) { return 40-yScale(self.data[d].nodes.length); } else { return 0; }} );

    this.labels = this.timeline.append('g')
      .selectAll('text')
      .data(this.timeNames)
      .enter()
      .append('text')
      .attr("class", function (d, i) { return "time-facet-labels time-facet-label-"+self.timeFcts[i]; })
      .text(function (d, i) { if (labelWhitelist.indexOf(i) != -1 || i >=88) {return simpleTimename(d); }})
      .attr("transform", function (d,i) { return "translate("+brushScale(i)+",50)rotate(90)"})
      .attr("font-family", "Helvetica, Arial, san-serif")
      .attr("font-size", 10)
      .attr("stroke", "none")
      .attr("font-weight", 200)
      .attr("fill", "#292929")
      .style('fill-opacity', 1);

      d3.select(".extent").style("fill-opacity", 0.3).attr("height", 40).style("cursor", "col-resize");
      d3.select(".background").style("cursor", "col-resize");
      d3.selectAll(".resize").style("cursor", "col-resize");




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


   this.enterNodes = function () {
    
    hist = d3.layout.histogram()
      .value(function (n) { return self.nodeValues.get(n.affiliate_fct_id)
      .affiliate_fct_occurrence_sum; })
      .range([0, 100000])
      .bins(10);

    vert = d3.scale.linear()
      .domain([0, 1])
      .range([0, 500]);

    this.hist = hist(this.force.nodes());


    switch(this.nodePositioning) {

      case "network" :

        // enter new affiliates
        this.affiliates
          .enter()
          .append("circle")
          .on("mouseover", function (d,i) { self.focus("node", d); self.tip.show(d);} )
          .on("mouseout", function (d,i) { self.defocus(); self.tip.hide();} )
          .on("click", function (d) { self.openDDB("node", d.affiliate_fct); })
          .attr("id", function (d) { return "affiliate_fct_id-" + d.affiliate_fct_id } )
          .attr("class", "affiliate")
          .style("stroke-width", "1")
          .style("stroke-location", "inside")
          .call(resetNode)
          .attr("r", function (d) { return 0; })
          .transition()
          .duration(500)
          .call(resetNode)
          .style("fill", "#fff");
      break;

      case "sortByOccurrence" :

        this.affiliates
          .enter()
          .append("circle")
          .on("mouseover", function (d,i) { self.focus("node", d); self.tip.show(d);} )
          .on("mouseout", function (d,i) { self.defocus(); self.tip.hide();} )
          .on("click", function (d) { self.openDDB("node", d.affiliate_fct); })
          .attr("id", function (d) { return "affiliate_fct_id-" + d.affiliate_fct_id } )
          .attr("class", "affiliate")
          .style("stroke-width", "1")
          .style("stroke-location", "inside")
          .call(resetNode)
          .attr("cx", function (d,i) { return self.horizontalScale(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence_sum); })
          .attr("cy", function (d,i) { return self.networkHeight/2 } )
          .transition()
          .duration(500)
          .call(resetNode);
      break;


    }

  };


  this.updateNodes = function () {

    switch(this.nodePositioning) {

      case "network" :
        this.affiliates
          .transition()
          .duration(1000)
          .style("fill", "#dbdbdb")
          .call(resetNode);
      break;

      case "sortByOccurrence" :

        this.affiliates
          .call( function (d,i) { d.fixed = true;})
          .transition()
          .duration(500)
          .style("fill", '#cecece')
          .style("fill-opacity", 0.5)
          .attr("r", function (d) { return self.radius(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence_sum); })
          .attr("cx", function (d,i) { return self.horizontalScale(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence_sum); })
          .attr("cy", function (d,i) { return self.networkHeight/2 } );
      break;

    }

  };

  function resetNode (selection) {
    selection
      .attr("r", function (d) { return self.radius(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence_sum); })
      .style("fill", "#dbdbdb")
      .style("stroke", "#fff")
      .style("fill-opacity", 1.0);
  }
  function highlightNode (selection) {
    selection
      .attr("r", function (d) { return self.radius(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence_sum); })
      .style("fill", "#a40539")
      .style("stroke", "#a40539")
      .style("fill-opacity", 1.0);
  }


  function highlightLink (selection) { selection.style("stroke", "#a40539").style("stroke-opacity",1.0); }
  function resetLink (selection) { selection.style("stroke", "#cecece").style("stroke-opacity",1.0); }


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
    this.links.call(resetLink);
    this.affiliates.call(resetNode);
  };


  this.focus = function (mode, data) {

    this.links.call(resetLink);
    this.affiliates.call(resetNode);

    switch(mode) {
      case "node":
        d3.select("#affiliate_fct_id-" + data.affiliate_fct_id).call(highlightNode);
        links = this.currentLinks.values().filter(function (n) { return (n.target.affiliate_fct_id == data.affiliate_fct_id ||  n.source.affiliate_facet_id == data.affiliate_fct_id); });
        for(var i=0; i<links.length; i++) {
          d3.select("#link-"+links[i].source.affiliate_fct_id+'_'+links[i].target.affiliate_fct_id).call(highlightLink);
          d3.select("#link-"+links[i].target.affiliate_fct_id+'_'+links[i].source.affiliate_fct_id).call(highlightLink);
          d3.select("#affiliate_fct_id-" + links[i].source.affiliate_fct_id).call(highlightLink);
          d3.select("#affiliate_fct_id-" + links[i].target.affiliate_fct_id).call(highlightLink);
        }
      break;

      case "link":
        d3.select("#link-"+data.source.affiliate_fct_id+'_'+data.target.affiliate_fct_id).call(highlightLink);
        d3.select("#affiliate_fct_id-" + data.source.affiliate_fct_id).call(highlightNode);
        d3.select("#affiliate_fct_id-" + data.target.affiliate_fct_id).call(highlightNode);
      break;
    }

  };


  this.init = function() {

    self = this;

    this.data = {};
    this.version = 'version-4';

    this.timelineIDs = [];
    this.timelineSum = [];

    this.radiusScale = d3.scale.log();

    // create the force-directed-graph

    this.force = d3.layout.force()
      .charge(function (d) { return self.radius(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence_sum)*self.radius(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence_sum)*-1; })
      .friction(0.7)
      .linkDistance(function (d) { return self.radius(self.nodeValues.get(d.source.affiliate_fct_id).affiliate_fct_occurrence_sum) + 20 + self.radius(self.nodeValues.get(d.target.affiliate_fct_id).affiliate_fct_occurrence_sum)})
      .size([  this.networkWidth, this.networkHeight]);

    this.allNodes = d3.map();
    this.currentNodes = d3.map();
    this.nodeValues = d3.map();
    this.currentLinks = d3.map();

    /* Initialize tooltip */
    this.tip = d3.tip().attr('class', 'd3-tip').html( function (d) { return '<h3>'+d.affiliate_fct+'</h3><p>'+self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence_sum+' Einträge</p>'; } );

    this.svg.call(this.tip);     /* Invoke the tip in the context of your visualization */

    this.parameters.timeFct = this.timeFcts[0];

    jQuery.getJSON( "./data/detail-20.json", function (result) {

      self.data = result;
      self.collectAllNodes();
      self.initTimeline();
      self.resizeWindow();
      //self.collectNewNodes(0, self.timeFcts.length-1);
      self.collectNewNodes(self.timeFcts.length-2, self.timeFcts.length-1);
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
        var distanceOfCombinedRadius = self.radius(self.nodeValues.get(node.affiliate_fct_id).affiliate_fct_occurrence_sum) + self.radius(self.nodeValues.get(quad.point.affiliate_fct_id).affiliate_fct_occurrence_sum);
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
            .attr("cx", function (d) { if (!d.fixed) {return transformX(d);}} )
            //.attr("cx", function (d,i) { return self.horizontalScale(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence_sum); })
            .attr("cy", function (d) { if (!d.fixed) {return transformY(d)}} );

          self.links
            .attr("x1", function (d) { return transformX(d.source); })
            .attr("x2", function (d) { return transformX(d.target); })
            //.attr("x1", function (d,i) { return self.horizontalScale(self.nodeValues.get(d.source.affiliate_fct_id).affiliate_fct_occurrence_sum); })
            //.attr("x2", function (d,i) { return self.horizontalScale(self.nodeValues.get(d.target.affiliate_fct_id).affiliate_fct_occurrence_sum); })
            .attr("y1", function (d) { return transformY(d.source); })
            .attr("y2", function (d) { return transformY(d.target); });

          // update the position of the clickable links
          self.clickableLinks
            .attr("x1", function (d) { return transformX(d.source); })
            .attr("x2", function (d) { return transformX(d.target); })
            //.attr("x1", function (d,i) { return self.horizontalScale(self.nodeValues.get(d.source.affiliate_fct_id).affiliate_fct_occurrence_sum); })
            //.attr("x2", function (d,i) { return self.horizontalScale(self.nodeValues.get(d.target.affiliate_fct_id).affiliate_fct_occurrence_sum); })
            .attr("y1", function (d) { return transformY(d.source); })
            .attr("y2", function (d) { return transformY(d.target); });
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
      .data( this.force.links(), function (d) { return ("link-"+d.source.affiliate_fct_id+'_'+d.target.affiliate_fct_id);} );

    this.clickableLinks = this.svg
      .select("g#links")
      .selectAll(".clickable-link")
      .data( this.force.links(), function (d) { return ("clickable-link-"+d.source.affiliate_fct_id+'_'+d.target.affiliate_fct_id);} );
      // ,  }

    this.links
      .transition()
      .duration(500)
      .delay(1000)
      .call(resetLink)
      .style("stroke-opacity", 1.0);

    this.links
      .enter()
      .append("line")
      .on("click", function (d) { self.openDDB("link", d); })
      .attr("class", "link")
      .attr("id", function (d) { return "link-"+d.source.affiliate_fct_id+'_'+d.target.affiliate_fct_id; })
      .call(resetLink)
      .style("stroke-opacity", 0.0)
      .transition()
      .duration(500)
      .delay(1000)
      .call(resetLink);

    this.clickableLinks
      .enter()
      .append("line")
      .on("mouseover", function (d,i) { self.focus("link", d);} )
      .on("mouseout", function (d,i) { self.defocus();} )
      .on("click", function (d) { self.openDDB("link", d); })
      .attr("class", "clickable-link")
      .attr("id", function (d) { return "clickable-link-"+d.source.affiliate_fct_id+'_'+d.target.affiliate_fct_id; })
      .style("stroke", "#000")
      .style("stroke-opacity", "0.0")
      .style("stroke-width", "10px");

    this.links
      .exit()
      .transition()
      .duration(100)
      .style("stroke-opacity", 0.0)
      .remove();

    this.clickableLinks
      .exit()
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
      .style("stroke-opacity", 0.0)
      .style("fill-opacity", 0.0)
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


