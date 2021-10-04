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
  for (let key in listOfUser) {
      if (key === userLogin) {
          return userLogin;
      } else {
          let ask = confirm("You enter wrong login, create new user whith this login");
          if(ask) {
              listOfUser[userLogin] = `${enterUserPassFunc()}`;
              return userLogin;
          } else {
              return console.log('you cannot enter without a login');
          }
      }
  }   
}

let userLogin = checkLogin();

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

checkPass();
