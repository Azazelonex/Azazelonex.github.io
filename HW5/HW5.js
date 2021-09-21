//First:
const userWantBeer = prompt("Do you want beer?",'Yes');

let result;

if (userWantBeer === 'Yes'){
    result = 'Hello friend.';
} else {
    result = "Why you don't want a beer?";
}
alert(result);

let result1 = userWantBeer === 'Yes' ? 'Hello bro' : 'Why you so borning' ;
alert(result1);

//Second:
const userAge = +prompt('How old are you?','30');

let message;

if (userAge < 18){
    message = 'No access';
} else if (userAge <30){
    message = 'Hello dude';
} else {
    message = 'Hello dear user';
}
alert(message);

let messege1 = (userAge < 18) ? "You so young" : 
(userAge < 30) ? "Hello dear friend" : 
"Nice to meet you, dear user";

alert(messege1);

//Third:
const teaOrCoffee = prompt("tea or coffee?","tea");
const sugar = prompt("do you want sugar?","yes");

let message2;

if (teaOrCoffee === "tea" && sugar === "yes"){
    message2 = "make tea with sugar";
} else if (teaOrCoffee === "tea" && sugar !== "yes") {
    message2 = "make tea with out sugar";
} else if (teaOrCoffee !== "tea" && sugar === "yes") {
    message2 = "make coffee wiht sugar";
} else{
    message2 = "make coffee wiht out sugar";
}
alert(message2);

let message3 = (teaOrCoffee === "tea" && sugar === "yes") ? "make tea with sugar":
(teaOrCoffee === "tea" && sugar !== "yes") ? "make tea with out sugar" :
(teaOrCoffee !== "tea" && sugar === "yes") ? "make coffee wiht sugar" :
"make coffee wiht out sugar";
alert(message3);