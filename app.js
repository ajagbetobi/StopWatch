const submitBtn = document.querySelector("#submit");
const resetBtn = document.querySelector("#reset");
const timer = document.querySelector(".timer");
let seconds;
submitBtn.addEventListener("click", () => {
  seconds = 60;
  let minutes = document.querySelector("#minutes").value;
  minutes--;
  console.log(minutes);
  const startWatch = () => {
    seconds--;
    if (seconds < 0 && !minutes) {
      return;
    } else if (!seconds && minutes) {
      seconds = 60;
      return seconds--, minutes--;
    }

    if (minutes > 10 && seconds >= 10) {
      timer.textContent = `${minutes} : ${seconds}`;
    } else if (minutes < 10 && seconds >= 10) {
      timer.textContent = `0${minutes} : ${seconds}`;
    } else if (minutes > 10 && seconds < 10) {
      timer.textContent = `${minutes} : 0${seconds}`;
    } else timer.textContent = `0${minutes} : 0${seconds}`;
  };
  setInterval(startWatch, 1000);
});

resetBtn.addEventListener("click", () => {
  location.reload();
  return false;
});
