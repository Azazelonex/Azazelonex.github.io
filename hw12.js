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
      alert( `Welcome , i am ${firstName} ${lastName}` );
    };
}
let student = new User('Alex','Kharmich',30);
student.greet();
console.log(student);