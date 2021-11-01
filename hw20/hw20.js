//first

function getFibonaciCycle(num) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= num; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

function getFibonaciRecursion(num) {
    return num <= 1 ? num : getFibonaciRecursion(num - 1) + getFibonaciRecursion(num - 2);
}

//second

function getFactorialRecursion(num) {
    return num ? num * getFactorialRecursion(num - 1) : 1;
}

function getFactorialCycle(num) {
    result = num;
    for (let i = num - 1; i > 1; --i) {
        result *= i;
    }
    return result;
}