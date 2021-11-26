let timerInputMinuts = document.getElementById("minutes");
let timerInputSecond = document.getElementById("second"); 
let buttonRun = document.getElementById("button");
let timerShow = document.getElementById("timer");
let timeSecond;
buttonRun.addEventListener('click', function() {
    timeSecond = parseInt(timerInputSecond.value) + (parseInt(timerInputMinuts.value) * 60)
})
timer = setInterval(function () {
    let seconds = timeSecond%60; 
    let minutes = timeSecond/60%60; 
    
    if (timeSecond <= 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "The countdown is over!";
    } else { 
        
        let strTimer = `${Math.trunc(minutes)}:${seconds}`;
        
        timerShow.innerHTML = strTimer;
    }
    --timeSecond;
}, 1000)