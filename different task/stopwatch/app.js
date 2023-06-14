var min = 0;
var sec = 0; 
var milisec = 0;
var displaymin = document.getElementById("displaymin");
var displaysec = document.getElementById("displaysec");
var displaymilisec = document.getElementById("displaymilisec");

var interval;

function timer(){
    milisec++;
    if(milisec == 10){
        milisec = 0;
        sec++;
        if(sec == 60){
            sec = 0;
            min++;
        }
    }
    displaymilisec.innerHTML = milisec;
    displaysec.innerHTML= sec;
    displaymin.innerHTML= min;
}

function start(){
    interval = setInterval(function(){
        timer()
    },100);
    console.log("start");
}
function pause(){
    clearInterval(interval)
}
function reset(){
    pause();
    milisec = 0;
    sec = 0;
    min = 0;
    displaymilisec.innerHTML = milisec;
    displaysec.innerHTML= sec;
    displaymin.innerHTML= min;
}
// timer

// var minutes = 10;
// var seconds = 60; 
// var displaymin = document.getElementById("timermin");
// var displaysec = document.getElementById("timersec");
// setInterval(function(){
//     timer()
// },1000);

// function timer(){
// seconds--
//     if(seconds < 0 ){
//         seconds = 60;
//         minutes--;
//     }
//     displaymin.innerHTML = minutes;
//     displaysec.innerHTML= seconds;
// }















