let a1 = +prompt('Enter a1 coordinate');
let a2 = +prompt('Enter a2 coordinate');
let b1 = +prompt('Enter b1 coordinate');
let b2 = +prompt('Enter b2 coordinate');
let c1 = +prompt('Enter c1 coordinate');
let c2 = +prompt('Enter c2 coordinate');

const middle = 2;

if ((a1+b1)/middle === c1 && (a2+b2)/middle === c2) {
  console.log(true)
} else {
  console.log(false)
}
