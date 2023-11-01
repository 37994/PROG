const arr2 = [10, 'gfhdj'];
const arr = [10, 'hoi', true, 69, 'appels'];
console.log(arr)

let a = arr.length;
console.log(a);

let b = arr.toString();
console.log(b);

let c = arr.pop();
console.log(c);

let d = arr.push();
console.log(d);

let e = arr.shift();
console.log(e);

let f = arr.unshift();
console.log(f);

const arr3 = arr.concat(arr2);
console.log(arr3);

let g = arr.flat();
console.log(g);

let h = arr.splice(0, 0, 'banan');
console.log(h);

let i = arr.slice(2);
console.log(i);

delete arr[3];
console.log(arr);