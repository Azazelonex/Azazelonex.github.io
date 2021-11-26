const listOfUser = {
  user: "qwer",
};

function enterUserLoginFunc() {
  return prompt("Enter your login","");
}

function enterUserPassFunc() {
  return prompt("Enter your password","");
}

let userLogin = checkLogin();

function checkLogin() {
  let userLogin = enterUserLoginFunc();
  if (userLogin in listOfUser) {
    return userLogin;
  } else {
    let ask = confirm("You enter wrong login, create new user whith this login");
    if(ask) {
      listOfUser[userLogin] = `${enterUserPassFunc()}`;       
      return checkLogin();
    } else {
      return undefined;
    }
  }
}

function checkPass() {

  let userPass = enterUserPassFunc();
  if (userPass !== listOfUser[userLogin]) {
      let ask = confirm('You enter wrong password, try again?');
      if (ask) {
         checkPass();
      } else {
          return console.log('you cannot enter without a pass');
      }
  } else {
      return console.log('You enter');
  }
}

function valid() {
  if (userLogin === undefined ) {
    console.log('you cannot enter without a login');
  } else {
    checkPass();
  }
}
valid();