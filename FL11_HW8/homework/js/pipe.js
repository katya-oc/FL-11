function addOne(x) {
  return x + 1;
}

function pipe() {
 let numb = arguments[0];
 for (let i = 1; i < arguments.length; i++) {
   numb = arguments[i](numb);
 }
 return numb;
}

pipe(2,addOne);
pipe(2,addOne,addOne,addOne);