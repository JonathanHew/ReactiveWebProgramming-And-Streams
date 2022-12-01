// Get startBtn and add a observable to it to monitor when it clicks 
const startBtn = document.querySelector("#startBtn");
const startObs = Rx.Observable.fromEvent(startBtn, 'click');
