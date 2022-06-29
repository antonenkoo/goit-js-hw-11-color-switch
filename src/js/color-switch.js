const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

start.addEventListener("click", () => {
  console.log("start");

  timerId = setInterval(() => {
    const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
      console.log("changed on ", document.body.style.backgroundColor);
  }, 1000);

  start.disabled = true;
});

let timerId = null;
stop.addEventListener("click", () => {
  console.log("stop");

  clearInterval(timerId);

  start.disabled = false;
});
