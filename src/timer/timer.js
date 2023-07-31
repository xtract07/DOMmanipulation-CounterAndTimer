function strTimer(hours, minutes, seconds) {
  console.log("inside strInterval");
  var intervals = window.setInterval(function () {
    if (Number(seconds.value) === 0) {
      seconds.value = "59";
      if (Number(minutes.value) === 0) {
        minutes.value = "59";
        if (Number(hours.value) === 0) {
          console.log("it was here");
          resetTimer(hours, minutes, seconds, intervals);
          clearInterval(intervals);
          return;

          return intervals;
        } else hours.value = Number(hours.value) - 1;
      } else minutes.value = Number(minutes.value) - 1;
    } else seconds.value = Number(seconds.value) - 1;
  }, 1000);

  return intervals;
}

function stpTimer(intervals) {
  clearInterval(intervals);
}

function resetTimer(hours, minutes, seconds, intervals) {
  console.log("inside reset");
  clrInterval(intervals);
  hours.value = "0";
  minutes.value = "0";
  seconds.value = "0";
}

export { strTimer, stpTimer, resetTimer };
