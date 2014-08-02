function drawPie(dataSet, selectString, outerRadius) {
    // Color Scale Handling...
    var color = d3.scale.ordinal().range(['#be708b', '#91b2da', '#78d2bb', '#41a069', '#c06d45', '#e3a747', '#a9c54a' ]);

    var pieCenterX = outerRadius;
    var pieCenterY = outerRadius;

    var canvasWidth = outerRadius * 2;
    var canvasHeight = outerRadius * 2;
    var margin = { top: 120, right: 50, bottom: 20, left: 50 };
    
    var textLabel;
    var textMagnitude;
    
    
    function fillArc() {
        var arc = d3.selectAll("." + this.getAttribute('class'));

        d3.selectAll("#pie-arc")
        .transition()
        .duration(350)
        .style('opacity', .2);
        
        arc.style('opacity', 1)
        .transition()
        .duration(350)
        .style('fill', function() {
            return d3.rgb(d3.select(this).style("fill")).brighter(.7);
        });
    }
        var tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function(d) { return '<h3>'+d.data.legendLabel+'</h3><p>'+d3.format(",")(d.data.magnitude)+' Einträge</p>'; } );

                
    function refillArc() {
        d3.selectAll("#pie-arc")
        .style('fill', function (d,i){
            return color(i);});
    }
    
    
    function displayLabel() {
        var arc = d3.select(this);

        textLabel = canvas.append('svg:text')
            .data(arc.data())
            .attr('dy', '.3em')
            .style('text-anchor', 'middle')
            .style('fill', '#ccc')
            .style('stroke', 'none')
            .style('opacity', 1)
            .style('font-size', '0.9em')
            .text(function (d) {
                return d.data.legendLabel;});
    }
    
    function displayMagnitude() {
        var arc = d3.select(this);

        textMagnitude = canvas.append('svg:text')
            .data(arc.data())
            .attr('dy', '1.7em')
            .style('text-anchor', 'middle')
            .style('fill', '#666')
            .style('stroke', 'none')
            .style('opacity', 1)
            .style('font-size', '0.9em')
            .text(function (d) {
                return d.data.magnitude;});
    }

    function restoreArcColor() {
        var arc = d3.select(this);
        var colorValue = arc.attr('color_value');

        arc
        .transition()
        .duration(350)
        .style('opacity', 1).style('fill', colorValue);
        
        d3.selectAll("#pie-arc")
        .transition()
        .duration(350)
        .style('opacity', 1).style('fill', function (d, i) {
            return color(i);});
    }

    function removeLabel() {
        if (textLabel == null) {
            return;
        }

        textLabel.remove();
    }
    
    function removeMagnitude() {
        if (textMagnitude == null) {
            return;
        }

        textMagnitude.remove();
    }

    // Create a drawing canvas...
    var canvas = d3.select(selectString)
        .append('svg:svg') //create the SVG element inside the <body>
        .data([dataSet]) //associate our data with the document
        .attr('width', canvasWidth) //set the width of the canvas
        .attr('height', canvasHeight) //set the height of the canvas
        .append('svg:g') //make a group to hold our pie chart
        .attr('transform', 'translate(' + pieCenterX + ',' + pieCenterY + ')'); // Set center of pie

    // Define an arc generator. This will create <path> elements for using arc data.
    var arc = d3.svg.arc()
        .innerRadius(outerRadius / 1.2 ) // Causes center of pie to be hollow
        .outerRadius(outerRadius);

    // Define a pie layout: the pie angle encodes the value of dataSet.
    // Since our data is in the form of a post-parsed CSV string, the
    // values are Strings which we coerce to Numbers.
    var pie = d3.layout.pie()
        .value(function(d) { return d.magnitude; });

    // Select all <g> elements with class slice (there aren't any yet)
    var arcs = canvas.selectAll('g.slice')
         // Associate the generated pie data (an array of arcs, each having startAngle,
        // endAngle and value properties)
        .data(pie)
        // This will create <g> elements for every 'extra' data element that should be associated
        // with a selection. The result is creating a <g> for every object in the data array
        // Create a group to hold each slice (we will have a <path> and a <text>      // element associated with each slice)
	   .enter()
            .append("svg:a")
            .attr("xlink:href", function(d) { return d.data.link; })
            .attr("target", "_blank")
        .append('svg:g')
        .attr('class', 'slice')
        // Set the color for each slice to be chosen from the color function defined above
        // This creates the actual SVG path using the associated data (pie) with the arc drawing function
        .style('stroke', 'none')
        .style("fill", "#000");
    
    arcs.call(tip);

    
    arcs.append('svg:path')
        // Set the color for each slice to be chosen from the color function defined above
        // This creates the actual SVG path using the associated data (pie) with the arc drawing function
        .attr('fill', function (d, i) {
            return color(i);})
        .attr('color_value', function (d, i) {
            return color(i);})
        .attr('index_value', function (d, i) {
            return 'index-' + i;})
        .attr('id', 'pie-arc')
        .attr('class', function (d) {return d.data.legendLabel;})
        .attr('d', arc)
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
        .on('mouseout.restoreArcColor', restoreArcColor)
        .on('mouseout.removeLabel', removeLabel)
        .on('mouseout.removeMagnitude', removeMagnitude)
        .on('mouseover.refillArc', refillArc)
        .on('mouseover.fillArc', fillArc);
//        .on('mouseover.displayLabel', displayLabel)
//        .on('mouseover.displayMagnitude', displayMagnitude);
    
}