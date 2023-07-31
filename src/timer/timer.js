function strTimer(hours, minutes, seconds) {
  console.log("inside strInterval");
  const intervals = window.setInterval(function () {
    if (Number(seconds.value) === 0) {
      seconds.value = "59";
      if (Number(minutes.value) === 0) {
        minutes.value = "59";
        if (Number(hours.value == 0)) {
          clrInterval(intervals);
          return alert("your time is up");
        } else hours.value = Number(hours.value) - 1;
      } else minutes.value = Number(minutes.value) - 1;
    } else seconds.value = Number(seconds.value) - 1;
  }, 1000);

  return intervals;
}

function stpTimer(intervals) {
  console.log("inside clrInterval");
  clearInterval(intervals);
}

function resetTimer(hours, minutes, seconds, intervals, ih, im, is) {
  console.log("inside reset");
  clrInterval(intervals);
  hours.value = ih.toString();
  minutes.value = im.toString();
  seconds.value = is.toString();
}

export { strTimer, stpTimer, resetTimer };
