"use-strict";

// small styling thing
let equals = document.querySelector(".equals");
let key = document.querySelectorAll(".key");

let operatorKey = document.querySelectorAll(".operator");
let acBtn = document.querySelector(".ac");
let btn = document.querySelectorAll(".btn");
let decimal = document.querySelector(".decimal");

btn.forEach((x) => {
  x.addEventListener("mouseover", function () {
    x.style.backgroundColor = "#666699";
  });

  x.addEventListener("mouseout", function () {
    x.style.backgroundColor = "aliceblue";
  });
});

////////////////////////////
// calc object
////////////////////////////

const calculator = {
  operator: null,
  storedArr: [],
  decimalIn1: false,
  waitingForSecond: false,
  secondArr: [],
  decimalIn2: false,
  finalArr: [],
};

operatorKey.forEach((x) => {
  x.addEventListener("click", function (e) {
    calculator.operator = x.value;
    updateDisplay(x.value);
    console.log(x.value);
  });
});

//Equals Operator

equals.addEventListener("click", function () {
  let x = calculator.storedArr.join("");
  let y = calculator.operator;

  let z = calculator.secondArr.join("");
  let w = [];
  console.log(x, y, z);
  calculator.finalArr.push(x, y, z);
  w.push(x, y, z);
  let q = w.join("");
  let answer = eval(q);
  updateDisplay(answer);
  calculator.storedArr = [];
  calculator.secondArr = [];
  calculator.storedArr.push(answer);
  console.log(answer);
});

// Clear function

let allClear = document.querySelector(".ac");

allClear.addEventListener("click", function () {
  console.log("All clear");
  calculator.finalArr = [];
  calculator.operator = null;
  calculator.storedArr = [];
  calculator.waitingForSecond = false;
  calculator.secondArr = [];
  let display = document.querySelector(".calcScreen");
  display.value = "";
  // setTimeout(function () {
  //   alert("All Clear");
  // }, 10);
});

let inputs = function () {
  let key = document.querySelectorAll(".key");
  key.forEach((x) => {
    x.addEventListener("click", function (e) {
      console.log(x.value);
      let y = x.value;
      if (
        calculator.operator === null &&
        calculator.waitingForSecond === false
      ) {
        calculator.storedArr.push(y);
        calculator.storedArr.join("");
        firstInput = calculator.storedArr.join("");
        updateDisplay(firstInput);

        if (x.value == ".") {
          calculator.decimalIn1 = true;
        }
        decimalExclusion(calculator.decimalIn1, calculator.storedArr);
        console.log(calculator.storedArr);
      } else {
        calculator.secondArr.push(y);
        calculator.secondArr.join("");
        secondInput = calculator.secondArr.join("");
        updateDisplay(secondInput);

        if (x.value == ".") {
          calculator.decimalIn2 = true;
          console.log("decimal");
        }
        decimalExclusion(calculator.decimalIn2, calculator.secondArr);
        console.log(calculator.secondArr, secondInput);
      }
    });
  });
};

inputs();

// put keyPress call in update display function

// if display value is undefined, display 0 on screen

// push digit values into an array in calc object
function updateDisplay(e) {
  let display = document.querySelector(".calcScreen");

  if (!e) return;
  display.value = e;
}

updateDisplay();

// test if decimalInput1 is true; if it is, exclude subsequent decimals from being inputed

function decimalExclusion(boo, arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(".")) {
      counter++;
    }
  }

  if (boo === true && counter > 1) {
    document.querySelector(".calcScreen").value = "Error! Too Many Decimals!";
  }
}

// POD

function addingToX(n) {
  return (n * (n + 1)) / 2;
}

addingToX(3);
