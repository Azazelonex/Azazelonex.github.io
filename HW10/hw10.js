//first
function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
}
const obj = {};
isEmpty(obj);
console.log(isEmpty(obj));
const obj2 = {name:""};
isEmpty(obj2);
console.log(isEmpty(obj2));
//second
function showNumbersKey (obj3) {
    obj3 = {
      '0': 'zero', 
      '42': 'answer', 
      'greeting': 'Hello',
      '3.14': 'PI', 
      '543': 'randomNumber',
      username: "Vasya",
      '30': 'myAge',
      secondeName: "Kharmich",
    } 
    for (let key in obj3) {
      if (isNaN(+key)) continue;
      console.log(obj3[key]);
  }
  }
showNumbersKey();
//third
salaries = {
    HRs: { Alice: 500, Bob: 700 },
    Devs: { Carol: 2500, Carlos: 1000, Charles: 1500 },
    QAs: { Chuck: 1650, Craig: 850, Dave: 3000}
  };
function doubleSalaries(salaries) {
    salaries = {
        HRs: { Alice: 500, Bob: 700 },
        Devs: { Carol: 2500, Carlos: 1000, Charles: 1500 },
        QAs: { Chuck: 1650, Craig: 850, Dave: 3000}
      };
    let newSalaries = Object.assign({}, salaries);
    for (let key in newSalaries) {
    const value = newSalaries[key];
      for (let i in value) {
        value[i] *= 2;
      }
    } 
    return newSalaries;
  }
  console.log(doubleSalaries());
  console.log(salaries);