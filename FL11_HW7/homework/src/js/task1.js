const emailLength = 6;
const passLength = 5;

let userEmail = prompt('Enter your e-mail', '');
if (userEmail === '' || userEmail === null) {
  alert('Canceled'); 
} else if (userEmail.length < emailLength) {
  alert('I don\'t know any emails having name length less than 6 symbols.');
} else if (userEmail === 'user@gmail.com' || userEmail === 'admin@gmail.com') {
  let password = prompt('Enter your password', '');

  if (password === '' || password === null) {
    alert('Canceled'); 
  } else if (userEmail === 'user@gmail.com' && password === 'UserPass' 
  || userEmail === 'admin@gmail.com' && password === 'AdminPass') {
    let passChange = confirm('Do you want to change your password?');
    if (passChange === false) {
      alert('You have failed the change.');
    } else if (passChange === true) {
      let oldPass = prompt('Write your old password', '');
      if (userEmail === 'user@gmail.com' && oldPass === 'UserPass' 
      || userEmail === 'admin@gmail.com' && oldPass === 'AdminPass') {
        let newPass = prompt('Enter your new password');
        if (newPass.length < passLength) {
          alert('It\'s too short password. Sorry.');
        } else {
          let againNewPass = prompt('Enter your new password again');
          if (againNewPass !== newPass) {
            alert('You wrote the wrong password');
          } else {
            alert('You have successfully changed your password.');
          }
        }
      } else {
        alert('Your old password is incorrect.');
      }
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert('I don\'t know you');
}
