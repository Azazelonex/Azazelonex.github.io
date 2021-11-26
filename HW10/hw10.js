<<<<<<< HEAD
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
function showNumbersKey (obj) {
  for (let key in obj) {
    if (isNaN(+key)) continue;
    console.log(obj[key]);
  }
}
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
showNumbersKey(obj3);
//third
salaries = {
    HRs: { Alice: 500, Bob: 700 },
    Devs: { Carol: 2500, Carlos: 1000, Charles: 1500 },
    QAs: { Chuck: 1650, Craig: 850, Dave: 3000}
  };
function doubleSalaries(salaries) {
  let newSalaries = {};
  for (let key in salaries) {
    newSalaries[key] = Object.assign({},salaries[key]);
    for(let userKey in salaries[key]) {
      newSalaries[key][userKey] = salaries[key][userKey] * 2;
    }
  } 
  return newSalaries;
}

console.log(doubleSalaries(salaries));
=======
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
function showNumbersKey (obj) {
  for (let key in obj) {
    if (isNaN(+key)) continue;
    console.log(obj[key]);
  }
}
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
showNumbersKey(obj3);
//third
salaries = {
    HRs: { Alice: 500, Bob: 700 },
    Devs: { Carol: 2500, Carlos: 1000, Charles: 1500 },
    QAs: { Chuck: 1650, Craig: 850, Dave: 3000}
  };
function doubleSalaries(salaries) {
  let newSalaries = {};
  for (let key in salaries) {
    newSalaries[key] = Object.assign({},salaries[key]);
    for(let userKey in salaries[key]) {
      newSalaries[key][userKey] = salaries[key][userKey] * 2;
    }
  } 
  return newSalaries;
}

console.log(doubleSalaries(salaries));
>>>>>>> 8da6e68203ca4feed34aff6e8df298d0ef3da5c3
console.log(salaries);