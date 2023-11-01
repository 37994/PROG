const cube = (a, b, c) => a * b * c; 

console.log(cube(69, 420, 123));

const cylinder = (radius, height) => radius ^ 2 * Math.PI * height;

console.log(cylinder(457, 789));

const pythagoras = (a, b) => Math.sqrt(a ^ 2 + b ^ 2);

console.log(pythagoras(12, 35))

const arr = [1, 2, 3, 4, 5, 6, 7];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;

console.log(average);