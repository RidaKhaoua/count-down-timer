let inpuDate = document.querySelector("input[type='date']");
let inputTime = document.querySelector("input[type='time']");
let start = document.querySelector("button");

let numberDay = document.querySelector("#day");
let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

start.addEventListener("click", function name(params) {
  saveTime();
  x;
});

function saveTime(params) {
  if (!localStorage.getItem("timing")) {
    localStorage.setItem("timing", "{}");
  }
  let countDownDate = new Date(`${inpuDate.value}`);
  let time = JSON.parse(localStorage.getItem("timing"));
  time.date = countDownDate;
  time.expired = false;
  localStorage.setItem("timing", JSON.stringify(time));
}

let x = setInterval(() => {
  if (localStorage.getItem("timing")) {
    let time = JSON.parse(localStorage.getItem("timing"));
    let countDownDate = new Date(time.date);
    let date = new Date().getTime();
    let distance = countDownDate.getTime() - date;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    numberDay.textContent = days + "d";
    hour.textContent = hours <= 9 ? "0" + hours : hours + "h";
    min.textContent = minutes <= 9 ? "0" + minutes : minutes + "min";
    sec.textContent = seconds <= 9 ? "0" + seconds : seconds + "sec";
    if (distance < 0) {
      clearInterval(x);
      numberDay.textContent = 0 + "d";
      hour.textContent = "00" + "h";
      min.textContent = "00" + "min";
      sec.textContent = "00" + "sec";
      time.expired = true;
      localStorage.setItem("timing", JSON.stringify(time));
    }
  }
}, 1000);
let color = [
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "danger",
  "dark",
];

let i = 0;

let li = [...document.querySelectorAll("ul li")];
console.log(li);

function changeColor(arry, index) {
  setInterval(() => {
    if (index < arry.length) {
      for (let item of li) {
        item.className = `bg-${arry[index]}`;
      }
      index++;
    } else {
      index = 0;
    }

    setTimeout(() => {}, 10);
  }, 10000);
}

changeColor(color, i);
