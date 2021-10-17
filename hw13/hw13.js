const array = [
    'Apple',
    'Banana',
    'Pineapple',
];

array.push('Orange','Grapes');

array[1] = 'Peer';

const last = array.pop();

console.log(last);

array.unshift("Watermelon");

console.log(array);