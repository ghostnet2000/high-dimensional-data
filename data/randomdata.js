// Generate Random data
function randpoint() {
	return {
        x : Math.random()*7,
        y : Math.random()*7,
        z : Math.random()*6,
        t : Math.random()*7
    }
}

random = {}
// getter function
/*
function getData()
{
	return {
		'traits': ['x', 'y', 'z', 't' ],
		'values': d3.range(50).map(randpoint)
	};
}
*/
var data = {
	'traits': ['x', 'y', 'z', 't'],
	'category': 1,
	'values' : d3.range(25).map(randpoint)
};

// getter and scale
function getScales(range) {
	var o = {
		scale: {},
		scaleGet: {}
	}

	data.traits.forEach(function(trait) {
		getter = function(d) { return d[trait] }
		domain = [d3.min(data.values, getter), d3.max(data.values, getter)]
		o.scale[trait] = d3.scale.linear().domain(domain).range(range)
		o.scaleGet[trait] = function(d) { return o.scale[trait](d[trait]) }
	});
	return o
}
