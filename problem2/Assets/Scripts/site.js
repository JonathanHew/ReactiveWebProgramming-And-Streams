let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let secInput = document.getElementById("secInput");
let startBtn = document.getElementById("startBtn");
let timerSection = document.getElementById("timerSection");


let newHour = document.createElement("p");
let newMin = document.createElement("p");
let newSec = document.createElement("p");
let colon1 = document.createElement("p");
let colon2 = document.createElement("p");

const {Observable,fromEvent} = rxjs;

let timerValidation = () => {
    startCountdown();

}


let startCountdown = () => {
    newHour.innerHTML = hoursInput.value;
    timerSection.appendChild(newHour);

    colon1.innerHTML = ":";
    timerSection.appendChild(colon1);

    newMin.innerHTML = minutesInput.value;
    timerSection.appendChild(newMin);

    colon2.innerHTML = ":";
    timerSection.appendChild(colon2);

    newSec.innerHTML = secInput.value;
    timerSection.appendChild(newSec);

}