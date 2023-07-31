import { strInterval, clrInterval, reset } from "./counter/counter.js";
import { strTimer, stpTimer, resetTimer } from "./timer/timer.js";
// counter part
const hours = document.querySelector("#render-hours");
const minutes = document.querySelector("#render-minutes");
const seconds = document.querySelector("#render-seconds");

var counterInterval;

reset(hours, minutes, seconds, counterInterval);

document
  .getElementById("start-counter")
  .addEventListener(
    "click",
    () => (counterInterval = strInterval(hours, minutes, seconds))
  );

document
  .getElementById("stop-counter")
  .addEventListener("click", () => clrInterval(counterInterval));

document
  .getElementById("reset-counter")
  .addEventListener("click", () =>
    reset(hours, minutes, seconds, counterInterval)
  );

// timer part
const timerHours = document.getElementsByClassName("timer-hours")[0];
const initialtimerHour = timerHours.value;
const timerMinutes = document.getElementsByClassName("timer-minutes")[0];
const initialTimerMinutes = timerMinutes.value;
const timerSeconds = document.getElementsByClassName("timer-seconds")[0];
const initialTimerSeconds = timerSeconds.value;
var timerInterval;

document
  .querySelector(".start-timer")
  .addEventListener(
    "click",
    () => (timerInterval = strTimer(timerHours, timerMinutes, timerSeconds))
  );

document
  .querySelector(".stop-timer")
  .addEventListener("click", () => stpTimer(timerInterval));

document
  .querySelector(".reset-timer")
  .addEventListener("click", () =>
    reset(
      timerHours,
      timerMinutes,
      timerSeconds,
      timerInterval,
      initialtimerHour,
      initialTimerMinutes,
      initialTimerSeconds
    )
  );
