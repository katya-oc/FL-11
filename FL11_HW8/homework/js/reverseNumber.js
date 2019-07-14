function reverseNumber(numb) {
  let revnumb = 0;
  let neg = numb < 0;
  if (neg) {
    numb = -numb;
  } 
  while (numb !== 0) {
    revnumb *= 10;
    revnumb += numb % 10;
    numb = Math.floor(numb / 10);
  }
  if (neg) {
    revnumb = -revnumb;
  }
  return revnumb;
}

reverseNumber(2416);
reverseNumber(-2537);