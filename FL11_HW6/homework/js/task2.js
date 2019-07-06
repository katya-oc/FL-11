let a = +prompt('Enter side a length', '2');
let b = +prompt('Enter side b length', '3');
let c = +prompt('Enter side c length', '4');

  if (a+b>c || a+c>b || b+c>a) {
    if (a===b && a===c && b===c) {
    console.log('Equivalent triangle')
    } else if (a===b || a===c || b===c) {
    console.log('Isosceles triangle')
    } else {
    console.log('Normal triangle')
    }
  } else {
   console.log('Triangle doesn’t exist')
  }