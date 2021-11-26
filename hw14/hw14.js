<<<<<<< HEAD
//first
const arrayNumb = [1,3,7,10];

function arraySumFor(array) {
    let result = 0;
    for(let i = 0; i < array.length; i++) {
        result += array[i];
    }
return result;
};

function arraySumReduce(array) {
    const sumNum = array.reduce((result, element) => result + element , 0);
return sumNum;
};

console.log(arraySumFor(arrayNumb));

console.log(arraySumReduce(arrayNumb));

//second
const arrayString = ["fwfw","fwefwfwfwf","abibidvissi"];

function mapToUpperCaseFor(arr) {
let arrayUpperCase =[];
    for (let i = 0; i < arr.length; i++) {
        arrayUpperCase[i] = arr[i].toUpperCase()
    };
    return arrayUpperCase;
};

function mapToUpperCaseMap(arr) {
    const arrayUpperCase = arr.map(string => string.toUpperCase());
    return arrayUpperCase;
};

console.log(mapToUpperCaseFor(arrayString));

=======
//first
const arrayNumb = [1,3,7,10];

function arraySumFor(array) {
    let result = 0;
    for(let i = 0; i < array.length; i++) {
        result += array[i];
    }
return result;
};

function arraySumReduce(array) {
    const sumNum = array.reduce((result, element) => result + element , 0);
return sumNum;
};

console.log(arraySumFor(arrayNumb));

console.log(arraySumReduce(arrayNumb));

//second
const arrayString = ["fwfw","fwefwfwfwf","abibidvissi"];

function mapToUpperCaseFor(arr) {
let arrayUpperCase =[];
    for (let i = 0; i < arr.length; i++) {
        arrayUpperCase[i] = arr[i].toUpperCase()
    };
    return arrayUpperCase;
};

function mapToUpperCaseMap(arr) {
    const arrayUpperCase = arr.map(string => string.toUpperCase());
    return arrayUpperCase;
};

console.log(mapToUpperCaseFor(arrayString));

>>>>>>> 8da6e68203ca4feed34aff6e8df298d0ef3da5c3
console.log(mapToUpperCaseMap(arrayString));