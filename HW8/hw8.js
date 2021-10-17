//first
function pow(a, b) {
    let result = a;
    if (b === 0) {
      result = 1;
    } else {
      for (let i = 1; i < b; i++) {
      result *= a;
    }
  }
    return result;
  }
console.log(pow(4,8));
//second
function createUser (firstName = null, lastName = null, age = null) {
    let obj = {
      firstName,
      lastName,
      age,
  }
  return obj;
}
console.log(createUser("Alex","Kharmich",));
//third
function compare(number, lass, more) {
    if (number < 100) {
      lass()
    } else {
      more();
    }
  }
function lass() { 
    console.log( "less 100" );
}
function more() {
    console.log( "more 100" );
}
  compare(16, lass, more);
