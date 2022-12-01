// Get startBtn and add a observable to it to monitor when it clicks 
const startBtn = document.querySelector("#startBtn");
const startObs = Rx.Observable.fromEvent(startBtn, 'click');

// getting the inputted hours, minutes and seconds
const hoursInput = document.querySelector('#hoursInput');
const minsInput = document.querySelector('#minsInput');
const secsInput = document.querySelector('#secsInput');

// getting the spans which will display the time of the countdown
const hoursDisplay = document.querySelector("#hoursDisplay");
const minsDisplay = document.querySelector("#minsDisplay");
const secsDisplay = document.querySelector("#secsDisplay");