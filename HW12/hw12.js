<<<<<<< HEAD
//first
function Cat(name,breed) {
    this.name = name;
    this.breed = breed;
    this.meow = function() {
      alert( "Мяу!" );
    };
}
let kisa = new Cat('Froska','cur');
kisa.meow();
console.log(kisa);
//second
function User(firstName ,lastName , age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.greet = function() {
      alert( `Welcome , i am ${this.firstName} ${this.lastName}` );
    };
}
let student = new User('nick','vasya',15);
student.greet();
console.log(student);

student = new User('petr','semenich',40);
student.greet();
console.log(student);

student = new User('raul','petrivich',60);
student.greet();
console.log(student);

student = new User('Alex','andreich',80);
student.greet();
=======
//first
function Cat(name,breed) {
    this.name = name;
    this.breed = breed;
    this.meow = function() {
      alert( "Мяу!" );
    };
}
let kisa = new Cat('Froska','cur');
kisa.meow();
console.log(kisa);
//second
function User(firstName ,lastName , age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.greet = function() {
      alert( `Welcome , i am ${this.firstName} ${this.lastName}` );
    };
}
let student = new User('nick','vasya',15);
student.greet();
console.log(student);

student = new User('petr','semenich',40);
student.greet();
console.log(student);

student = new User('raul','petrivich',60);
student.greet();
console.log(student);

student = new User('Alex','andreich',80);
student.greet();
>>>>>>> 8da6e68203ca4feed34aff6e8df298d0ef3da5c3
console.log(student);