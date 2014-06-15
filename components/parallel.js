
function parallel(data){
	parallel = {}

	function parallel.setup = function(height, width, padding, mainDiv) {
		this.height = height
		this.width = width
		this.padding = padding

		return parallel
	}

	function parallel.plot = function(mainDiv) {
        var eachWidth = this.width / (data.traits.length - 1)
        this.chart = d3.select(mainDiv).html("")
            .append("svg")
            .attr("class", "chart")
            .attr("width", this.width + 2*this.padding)
            .attr("height", this.height + 2*this.padding);

	    for (var i=1; i< data.traits.length; i++) {
            var prev = data.traits[i-1],
                current = data.traits[i]
            parallel.chart.selectAll("linechart")
            	.data(data.values)
              	.enter().append("svg:line")
              	.attr("transform", "translate(0,"+this.padding+")")
        		.attr("class", "path")
	           	.attr("x1", this.padding + (i-1)*eachWidth)
	           	.attr("y1", function(d) { return parallel.o.scaleGet[prev](d) })
	           	.attr("x2", this.padding + i*eachWidth)
	           	.attr("y2", function(d) { return parallel.o.scaleGet[current](d) })
	           	.attr("width", 1)
	           	.style("stroke-opacity", 0.5)
	           	.style("stroke", colour.point)
	    }
		return parallel
	}

	function parallel.recolour = function() {
        parallel.chart.selectAll("line.path").style("stroke", colour.point)
        return parallel
	}

	return parallel
}

