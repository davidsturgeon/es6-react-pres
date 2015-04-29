var parts = ['shoulder', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];

//es5
function f(x, y, z) { }
var args = [0, 1, 2];
f.apply(null, args);

//es6
function f(x, y, z) { }
var args = [0, 1, 2];
f(...args);