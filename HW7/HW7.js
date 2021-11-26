<<<<<<< HEAD
const n = +prompt("enter number", "66");

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  alert(fib(n));

  metka:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue metka; 
  }

  alert( i ); 
=======
const n = +prompt("enter number", "66");

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  alert(fib(n));

  metka:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue metka; 
  }

  alert( i ); 
>>>>>>> 8da6e68203ca4feed34aff6e8df298d0ef3da5c3
}