const deepEqual = require('deep-equal');

module.exports = function(oldObj, newObj) {
	const out = {};
	union(
		Object.keys(newObj),
		Object.keys(oldObj)
	).forEach(function (key) {
		if (!deepEqual(newObj[key], oldObj[key]))
			out[key] = newObj[key];
	});

	return out;
};

function union(a, b) {
	return b.concat(a.filter(function(el) { return b.indexOf(el) < 0; }));
}
