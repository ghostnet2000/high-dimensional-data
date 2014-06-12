// Generate Random data
function randpoint() {
	return {
        x : Math.random()*7,
        y : Math.random()*7,
        z : Math.random()*6,
        t : Math.random()*7,
    }
}

random = {}

// getter function
function getData()
{
	return {
		'traits': ['z', 'y', 'z', 't' ],
		'values': d3.range(500).map(randpoint)
	};
}