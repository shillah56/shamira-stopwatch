let timer;
let isRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      milliseconds++;

      if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
      }

      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }

      updateDisplay();
    }, 10);
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").innerText =
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}:` +
    `${String(milliseconds).padStart(2, "0")}`;
}
