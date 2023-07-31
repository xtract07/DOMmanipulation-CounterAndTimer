function strInterval(hours, minutes, seconds) {
  console.log("inside strInterval");
  const intervals = window.setInterval(function () {
    if (Number(seconds.innerHTML) === 59) {
      seconds.innerHTML = 0;
      if (Number(minutes.innerHTML) === 59) {
        minutes.innerHTML = 0;
        if (Number(hours.innerHTML) === 23) {
          hours.innerHTML = 0;
        } else hours.innerHTML = Number(hours.innerHTML) + 1;
      } else minutes.innerHTML = Number(minutes.innerHTML) + 1;
    } else seconds.innerHTML = Number(seconds.innerHTML) + 1;
  }, 1000);

  return intervals;
}

function clrInterval(intervals) {
  console.log("inside clrInterval");
  clearInterval(intervals);
}

function reset(hours, minutes, seconds, intervals) {
  console.log("inside reset");
  clrInterval(intervals);
  hours.innerHTML = "00";
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
}

export { strInterval, clrInterval, reset };
