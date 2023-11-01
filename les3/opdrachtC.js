let dd = new Date();
console.log(dd.getDay())

let mm = new Date();
console.log(mm.getMonth())

let yyyy = new Date();
console.log(yyyy.getFullYear())


let now = (dd, mm, yyyy);
  let birth = new Date(2006, 4, 25); 
  let miliseconds = now-birth;

  let a = (now -= birth)
console.log(a);

