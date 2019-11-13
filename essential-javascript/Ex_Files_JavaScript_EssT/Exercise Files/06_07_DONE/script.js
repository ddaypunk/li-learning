const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
console.log("Hour: " + hours + " Minute: " + minutes + " Second: " +seconds);

let hrPos = (hours*360/12)+((minutes*360/60)/60);
let minPos = (minutes*360/60)+((seconds*360/60)/60);
let secPos = seconds*360/60;

function runTheClock(){
    hrPos = hrPos + (1/120);
    minPos = minPos + (1/10);
    secPos = secPos + 6;

    HOURHAND.style.transform = "rotate(" + hrPos + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPos + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPos + "deg)";
}

var interval = setInterval(runTheClock, 1000);
