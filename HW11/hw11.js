const listOfUser = {
  user: "qwer",
};

function enterUserLoginFunc() {
  return prompt("Enter your login","");
}

function enterUserPassFunc() {
  return prompt("Enter your password","");
}

function checkLogin() {
  let userLogin = enterUserLoginFunc();
  while(!(userLogin in listOfUser)) {
      let ask = confirm("You enter wrong login, create new user whith this login");
      if(ask) {
          listOfUser[userLogin] = `${enterUserPassFunc()}`;       
          checkLogin();
      } else {
          return console.log('you cannot enter without a login');
      }
  }
  return userLogin;    
}

let userLogin;

function checkPass() {
  let userPass = enterUserPassFunc();
  if (userPass !== listOfUser[userLogin]) {
      let ask = confirm('You enter wrong password, try again?');
      if (ask) {
         checkPass();
      } else {
          return console.log('you cannot enter without a password');
      }
  } else {
      return console.log('You enter');
  }
}

checkLogin();
checkPass();