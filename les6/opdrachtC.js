const arr1 = [1, 29, 16, true, false, 'hoi', 'hallo'];
const arrNum = [];
const arrBoe = [];
const arrStr = [];

let a1 = arr1.shift();
let a2 = arr1.shift();
let a3 = arr1.shift();
let Num = arrNum.push(a1, a2, a3);
console.log(arrNum);

let b1 = arr1.shift();
let b2 = arr1.shift();
let Boe = arrBoe.push(b1, b2);
console.log(arrBoe);

let c1 = arr1.shift();
let c2 = arr1.shift();
let Str = arrStr.push(c1, c2);
console.log(arrStr);