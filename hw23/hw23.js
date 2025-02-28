<<<<<<< HEAD
//First
function printNumbersSetInterval(arr) {

  let index = 0;
  let interval = setInterval(function () {  

    console.log(arr[index++]);

    if(index === arr.length){

      clearInterval(interval);

    }

  }, 1000)

}

function printNumbersSetTimeOut(arr) {

  let index = 0;

  setTimeout(function go() {  

    console.log(arr[index++]);

    if(index !== arr.length){

      setTimeout(go, 1000);

    }

  }, 1000)

}

//Second
function debounce(func, timeout) {
  let isCooldown = false;

  return function() {
    if (isCooldown) return;

    func.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, timeout);
  };
}

//Third
function throttle(func, timeout) {
  
  let isThrottled = false,
      savedArgs,
      savedThis;

  function wrapper() {

    if (isThrottled) { 
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, timeout);
  }

  return wrapper;

=======
//First
function printNumbersSetInterval(arr) {

  let index = 0;
  let interval = setInterval(function () {  

    console.log(arr[index++]);

    if(index === arr.length){

      clearInterval(interval);

    }

  }, 1000)

}

function printNumbersSetTimeOut(arr) {

  let index = 0;

  setTimeout(function go() {  

    console.log(arr[index++]);

    if(index !== arr.length){

      setTimeout(go, 1000);

    }

  }, 1000)

}

//Second
function debounce(func, timeout) {
  let isCooldown = false;

  return function() {
    if (isCooldown) return;

    func.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, timeout);
  };
}

//Third
function throttle(func, timeout) {
  
  let isThrottled = false,
      savedArgs,
      savedThis;

  function wrapper() {

    if (isThrottled) { 
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, timeout);
  }

  return wrapper;

>>>>>>> 8da6e68203ca4feed34aff6e8df298d0ef3da5c3
}