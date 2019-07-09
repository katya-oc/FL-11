let maxRange = 8, attempt = 3,
    maxPrize = 100, totalPrize = 0, dividePrize = 2, doublePrize = 2;

let startGame = confirm('Do you want to play a game?');
if (startGame === false) {
  alert('You did not become a billionaire, but can.');
  
} else {
    while (attempt > 0) {
      let randomNumb = Math.floor(Math.random() * (maxRange+1));
      let guess = +prompt(
      `     Choose a roulette pocket number from 0 to ${maxRange}
       Attempts left: ${attempt}
       Total prize: ${totalPrize}
       Possible prize on current attempt: ${maxPrize}`);

       if (guess === randomNumb) {
         totalPrize += maxPrize;
         startGame = confirm(`Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`);
         if (startGame === true) {
          maxRange += 4;
          maxPrize *= doublePrize;
          attempt = 3;
         } else {
          alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
          break;
        }
       } else {
         maxPrize /= dividePrize;
         attempt--;
       } 
       if (attempt === 0) {
         alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
         startGame = confirm('Do you want to play again?');
         if (startGame === true) {
           totalPrize = 0;
           maxPrize = 100;
           maxRange = 8;
           attempt = 3;
         } else {
          alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
         }
       }
    }
  }

  







 