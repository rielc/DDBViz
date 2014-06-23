DDBAffiliateNetwork = function() {

  this.timeFcts = ['time_61900', 'time_61947', 'time_61975', 'time_62000', 'time_62010', 'time_62020', 'time_62050', 'time_62100', 'time_62120', 'time_61925', 'time_62070', 'time_61800', 'time_61875', 'time_62110', 'time_62060', 'time_62080', 'time_62090', 'time_62095', 'time_61700', 'time_61705', 'time_61500', 'time_61545', 'time_61825', 'time_61600', 'time_61645', 'time_61847', 'time_62040', 'time_61745', 'time_62030', 'time_61907', 'time_61605', 'time_61807', 'time_61145', 'time_61100', 'time_61300', 'time_61305', 'time_61505', 'time_60500', 'time_60600', 'time_60700', 'time_60800', 'time_60900', 'time_61000', 'time_61105', 'time_61200', 'time_61205', 'time_61245', 'time_61345', 'time_61400', 'time_61405', 'time_61445', 'time_39600', 'time_39000', 'time_39700', 'time_60100', 'time_60200', 'time_60300', 'time_60400', 'time_39500', 'time_38900', 'time_38800', 'time_38000', 'time_39400', 'time_39300', 'time_38500', 'time_39800', 'time_38300', 'time_38100', 'time_39900', 'time_38400', 'time_38950', 'time_39200', 'time_37000', 'time_37700', 'time_38600', 'time_14000', 'time_39950', 'time_37400', 'time_36950', 'time_37500', 'time_37600', 'time_37900', 'time_37950', 'time_36000', 'time_38700', 'time_37800', 'time_38200', 'time_35000', 'time_36900', 'time_37100', 'time_17000', 'time_37200', 'time_39100', 'time_37300', 'time_34000', 'time_33000', 'time_15000', 'time_36800', 'time_36500', 'time_13000', 'time_36300', 'time_12000', 'time_18000', 'time_16000', 'time_30000', 'time_36200', 'time_36600', 'time_36700', 'time_36400', 'time_10000', 'time_60000', 'time_36100'];
  this.timeNames = ['19. Jahrhundert', '1851 bis 1875', '1876 bis 1900', '20. Jahrhundert', '1901 bis 1910', '1911 bis 1920', '1941 bis 1950', '21. Jahrhundert', '2011 bis 2020', '1826 bis 1850', '1961 bis 1970', '18. Jahrhundert', '1776 bis 1800', '2001 bis 2010', '1951 bis 1960', '1971 bis 1980', '1981 bis 1990', '1991 bis 2000', '17. Jahrhundert', '1601 bis 1650', '15. Jahrhundert', '1451 bis 1500', '1726 bis 1750', '16. Jahrhundert', '1551 bis 1600', '1751 bis 1775', '1931 bis 1940', '1651 bis 1700', '1921 bis 1930', '1801 bis 1825', '1501 bis 1550', '1701 bis 1725', '1051 bis 1100', '11. Jahrhundert', '13. Jahrhundert', '1201 bis 1250', '1401 bis 1450', '5. Jahrhundert', '6. Jahrhundert', '7. Jahrhundert', '8. Jahrhundert', '9. Jahrhundert', '10. Jahrhundert', '1001 bis 1050', '12. Jahrhundert', '1101 bis 1150', '1151 bis 1200', '1251 bis 1300', '14. Jahrhundert', '1301 bis 1350', '1351 bis 1400', '5. Jahrhundert vor Christus', '1. Jahrtausend vor Christus', '4. Jahrhundert vor Christus', '1. Jahrhundert', '2. Jahrhundert', '3. Jahrhundert', '4. Jahrhundert', '6. Jahrhundert vor Christus', '12. Jahrhundert vor Christus', '13. Jahrhundert vor Christus', '2. Jahrtausend vor Christus', '7. Jahrhundert vor Christus', '8. Jahrhundert vor Christus', '16. Jahrhundert vor Christus', '3. Jahrhundert vor Christus', '18. Jahrhundert vor Christus', '20. Jahrhundert vor Christus', '2. Jahrhundert vor Christus', '17. Jahrhundert vor Christus', '11. Jahrhundert vor Christus', '9. Jahrhundert vor Christus', '3. Jahrtausend vor Christus', '24. Jahrhundert vor Christus', '15. Jahrhundert vor Christus', 'Trias', '1. Jahrhundert vor Christus', '27. Jahrhundert vor Christus', '31. Jahrhundert vor Christus', '26. Jahrhundert vor Christus', '25. Jahrhundert vor Christus', '22. Jahrhundert vor Christus', '21. Jahrhundert vor Christus', '4. Jahrtausend vor Christus', '14. Jahrhundert vor Christus', '23. Jahrhundert vor Christus', '19. Jahrhundert vor Christus', '5. Jahrtausend vor Christus', '32. Jahrhundert vor Christus', '30. Jahrhundert vor Christus', 'Tertiär', '29. Jahrhundert vor Christus', '10. Jahrhundert vor Christus', '28. Jahrhundert vor Christus', '6. Jahrtausend vor Christus', '7. Jahrtausend vor Christus', 'Jura', '33. Jahrhundert vor Christus', '36. Jahrhundert vor Christus', 'Paläozoikum', '38. Jahrhundert vor Christus', 'Präkambrium', 'Quartär', 'Kreide', 'Urgeschichtliche Zeiträume (vor Christus)', '39. Jahrhundert vor Christus', '35. Jahrhundert vor Christus', '34. Jahrhundert vor Christus', '37. Jahrhundert vor Christus', 'Geologische Zeiträume', 'Historische Zeiträume', '40. Jahrhundert vor Christus'];
  this.parameters = { timeFct : "", affiliateMinOccurrence : 40 };

  this.data = {};
  this.force = {};
  this.affiliates = [];
  this.version = 'version-4';

    // create the force-directed-graph
  this.force = d3.layout.force()
    .charge(-40)
    .size([$(window).width(), $(window).height()]);


  // append svg and resize
  this.svg = d3.select("body")
    .append("svg")
    .attr("width", $(window).width() )
    .attr("height", $(window).height() );


  // the toolip
  this.tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .attr("class", 'tooltip')
    .style("z-index", "10")
    .style("visibility", "hidden")
    .text("a simple tooltip");


  this.init = function() {

    self = this;

    jQuery.getJSON( "../../../extracted-data/networks-in-time_fct/"+this.version+"/detail-40.json", function(result) {
      self.data = result;
      // generate the menu
      $.each( result, function( key, val ) {
        $("#time-fct").append("<option value="+key+">"+self.timeNames[self.timeFcts.indexOf(key)]+"</option>");
        self.parameters.timeFct = key;
      });
    });

    };

  /*


  this.createTimelineBrush = function() { 

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



  this.load = function() {

    // add nodes to force
    this.force
        .nodes( this.data[ this.parameters.timeFct ].nodes )
        .links( this.data[ this.parameters.timeFct ].links )
        .start();

    this.links = this.svg.selectAll(".link").data( this.data[this.parameters.timeFct].links, function(d) { return (d.source+'-'+d.target); });

    this.links
      .enter()
      .append("line")
      .attr("class", "link")
      .style("stroke-width", 1)
      .style("stroke-opacity", '0.1');

    this.links
      .exit()
      .transition()
      .duration(200)
      .style("stroke-opacity", '0')
      .remove();


    this.affiliates = this.svg.selectAll(".affiliate").data( this.data[ this.parameters.timeFct ].nodes, function(d) { return d.affiliate_fct_id; } );
    this.affiliates
      .enter()
      .append("circle")
      .attr("class", "affiliate")
      .attr("cx", $(window).width()/2)
      .attr("cy", $(window).height()/2)
      .style("fill", '#B81446')
      .style("fill-opacity", '0.0')
      .attr("r", 0)
      .call( this.force.drag )
      .transition()
      .duration(200)
      .attr("r", function(d) { return Math.sqrt( (d.affiliate_fct_occurrence) / Math.PI); })
      .style("fill-opacity", '0.3');

    this.affiliates
      .append("circle")
      .transition()
      .duration(200)
      .attr("r", function(d) { return Math.sqrt( (d.affiliate_fct_occurrence) / Math.PI); });

    this.affiliates.on( "mouseover", function(d) { self.tooltip.text(d.affiliate_fct +' [ '+ d.affiliate_fct_occurrence+' x ][ '+d.affiliate_fct_id+' ]'); return self.tooltip.style("visibility", "visible"); } );
    this.affiliates.on( "mousemove", function() { return self.tooltip.style("top", (d3.event.pageY+10)+"px").style("left",(d3.event.pageX+10)+"px"); } );
    this.affiliates.on( "mouseout", function(){return self.tooltip.style("visibility", "hidden");} );
    this.affiliates.append('label').text(function(d) { return d.affiliate_fct + ' : ' + d.value; });


    this.affiliates
      .exit()
      .transition()
      .duration(200)
      .attr("r", 0)
      .style("fill-opacity", '0')
      .remove();


    this.force.on("tick", function (e) {
      // var q = d3.geom.quadtree( self.affiliates[0] ), i = 0, n = self.affiliates[0].length;

      // while (++i < n) {
      //   q.visit( self.collide( self.affiliates[0][i] ) );
      // }

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


