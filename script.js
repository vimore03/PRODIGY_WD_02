let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let getMinutess = document.querySelector('.minutes');
let getSeconds = document.querySelector('.seconds');
let getMilliSeconds = document.querySelector('.milliseconds');

let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
btnStart.addEventListener('click',()=>{
   interval = setInterval(startTimer, 100);
})
btnStop.addEventListener('click',() => {
clearInterval(interval);
})
btnReset.addEventListener('click',() => {
    clearInterval(interval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    getMilliSeconds.innerHTML = '0'+ milliseconds;
    getSeconds.innerHTML = '0'+ seconds;
    getMinutes.innerHTML = '0'+ minutes;
    })
   
function startTimer(){
    milliseconds= milliseconds +1;
   if (milliseconds <= 9){
    getMilliSeconds.innerHTML = '0' + milliseconds;
   }
   if (milliseconds > 9){
    getMilliSeconds.innerHTML = milliseconds;
   }
   if (milliseconds == 100){
    seconds++;
    getSeconds.innerHTML = '0'+ seconds;
    milliseconds = 0;
    getMilliSeconds.innerHTML = '0' + milliseconds;
   }
   if (seconds > 9){
    getSeconds.innerHTML = seconds;
   }
   if (seconds == 60){
    minutes++;
    getMinutess.innerHTML = '0'+ minutes;
    seconds = 0;
    getSeconds.innerHTML = '0' + seconds;
   }
   if (minutes > 9){
    getMinutes.innerHTML = minutes;
   }
}