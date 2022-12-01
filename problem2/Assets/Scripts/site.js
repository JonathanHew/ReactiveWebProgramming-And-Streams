//const { Observable, fromEvent, interval, map, take, pipe } = rxjs;

// Get startBtn and add a observable to it to monitor when it clicks
const startBtn = document.querySelector("#startBtn");
const startObs = Rx.Observable.fromEvent(startBtn, "click");

// getting the inputted hours, minutes and seconds
const hoursInput = document.querySelector("#hoursInput");
const minsInput = document.querySelector("#minsInput");
const secsInput = document.querySelector("#secsInput");

// getting the spans which will display the time of the countdown
const hoursDisplay = document.querySelector("#hoursDisplay");
const minsDisplay = document.querySelector("#minsDisplay");
const secsDisplay = document.querySelector("#secsDisplay");

// function to convert time: seconds to hours, minutes and seconds
const convertTime = (time) => ({
  hoursDisplay: Math.floor(time / 3600),
  minsDisplay: Math.floor((time % 3600) / 60),
  secsDisplay: Math.floor((time % 3600) % 60),
});

// Function to render the time to the UI
const renderTime = (time) => {
  // If there is still time left display it
  if (time.secsDisplay > 0 || time.minsDisplay > 0 || time.hoursDisplay > 0) {
    let hourValue = time.hoursDisplay;
    hoursDisplay.innerHTML = hourValue + ":";
    let minuteValue = time.minsDisplay;
    minsDisplay.innerHTML = minuteValue + ":";
    secsDisplay.innerHTML = time.secsDisplay;
  } else {
    // Time is up show all zeros
    hoursDisplay.innerHTML = "0:";
    minsDisplay.innerHTML = "0:";
    secsDisplay.innerHTML = "0";
  }
};

// Subscribe to the start button click
app$ = startObs.subscribe(() => {

  // Translate user input into milliseconds
  let hours = (hoursInput.value * 60 * 60 * 1000);
  let mins = (minsInput.value) * 60 * 1000;
  let secs = (secsInput.value) * 1000;

  // Get total number of seconds to run countdown for
  let total = hours + mins + secs;
  total = total / 1000;

  // Set interval to 1 second
  let timer$ = Rx.Observable.interval(1000);

  timer$
      .take(total)
      .map((val) => (total - 1) - val) // decrement until timer hits 0
      .map(convertTime) // map time to hours minutes and seconds
      .subscribe((time) => {
          convertTime(time);
          renderTime(time);
          console.log('Countdown', time);
      });
});

