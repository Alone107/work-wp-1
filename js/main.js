const heroBtns = document.querySelector(".hero-buttons");
let btns = heroBtns.getElementsByClassName("btn");
let price = document.querySelector(".span-cen");
let priceBtn = 10000;
let selectDay = document.querySelector(".hero-calc-select");
let day = 5;
let priceDay = 0;
let percent = 0;
let percentPrice = 0;
let num = 10000;
let sum = 10250;

price.innerHTML = sum;

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    for (let a = 0; a < btns.length; a++) {
      btns[a].classList.remove("active");
    }
    btns[i].classList.add("active");

    priceBtn = btns[i].innerHTML;

    num = priceBtn
      .split("")
      .filter(function (el) {
        return el != " ";
      })
      .join("");
    num = +num;
    day = selectDay.value;
    percent = (day * 0.05) / 10;
    percentPrice = num * percent;
    sum = num + percentPrice;

    price.innerHTML = sum;
  });
}

selectDay.addEventListener("input", GiveDay);

function GiveDay() {
  day = selectDay.value;
  percent = (day * 0.05) / 10;
  percentPrice = num * percent;
  sum = num + percentPrice;

  price.innerHTML = sum;
}
