function formatTime(numb) {
  const days = Math.trunc(numb / 1440);
  const hours = Math.trunc((numb % 1440) / 60);
  const minutes = numb % 1440 % 60;

  return `${days} day(s) ${hours} hour(s) ${minutes} minute(s)`;
}

formatTime(450);
formatTime(1293);
