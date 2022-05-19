const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");

let secTracker = 0;
let minTracker = 0;
let hourTracker = 0;

let intervalId;

btnStart.addEventListener('click', function(){
    intervalId = setInterval(increment, 1000);

})

btnPause.addEventListener('click',function(){
    clearInterval(intervalId);
})

function increment(){
    secTracker++;
    seconds.innerHTML = secTracker;
    incrementMinutes();
    incrementHours();

}

function incrementMinutes(){
    minutes.innerHTML = minTracker;
    if (secTracker == 60) {
        secTracker = -1;
        minTracker += 1
    }
}

function incrementHours(){
    hours.innerHTML = hourTracker;
    if (minTracker == 60) {
        minTracker = 0
        hourTracker += 1
    }
}