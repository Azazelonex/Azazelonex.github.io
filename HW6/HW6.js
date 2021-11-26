<<<<<<< HEAD
const login = "Zaraza";
const pass = 1234567890;
const enterLogin = prompt("Enter login","");
const enterPass = +prompt("Enter password","");

let message;
let tryAgain;

if (enterLogin !== login){
    message = "error login";
} else if (enterLogin === login) {
    switch(enterPass){
        case pass:
            message = "Hello dear user";
            break;
        default:
            do {
                tryAgain = +prompt("You enter avaibel pass,enter again?","");
              } while (tryAgain !== pass && tryAgain );
              if (tryAgain === pass){
                  message = "Hello dear user";
              } else {
                  message = "error pass";
              }
            break;
    }
}
=======
const login = "Zaraza";
const pass = 1234567890;
const enterLogin = prompt("Enter login","");
const enterPass = +prompt("Enter password","");

let message;
let tryAgain;

if (enterLogin !== login){
    message = "error login";
} else if (enterLogin === login) {
    switch(enterPass){
        case pass:
            message = "Hello dear user";
            break;
        default:
            do {
                tryAgain = +prompt("You enter avaibel pass,enter again?","");
              } while (tryAgain !== pass && tryAgain );
              if (tryAgain === pass){
                  message = "Hello dear user";
              } else {
                  message = "error pass";
              }
            break;
    }
}
>>>>>>> 8da6e68203ca4feed34aff6e8df298d0ef3da5c3
alert(message);