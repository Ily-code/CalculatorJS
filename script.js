// this comment fix  git add and source
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

// querySelectorAll digunakan saat Anda ingin
// mendapatkan beberapa element, dan querySelector
// digunakan saat Anda ingin mendapatkan satu jenis
// element.
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener(
    "click",
    (event) => {
      inputNumber(event.target.value);
      updateScreen(currentNumber);
      // console.log(event.target.value);
    }
    //   console.log(number);
  );
});

// Definisikan 3 variable, yaitu “prevNumber”,
// “currentNumber” dan “calculationOperator” untuk
// menyimpan 2 angka dan and 1 operator. Nilai awal
// “currentNumber” seharusnya adalah 0.

let prevnumber = "";
let calculationOperator = "";
let currentNumber = "0";

// fix 0
const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});
//  );

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevnumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "";
};

const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
  // console.log("press");
});

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevnumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevnumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevnumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevnumber) / parseFloat(currentNumber);
      break;
    case "%":
      result = parseFloat(prevnumber) % parseFloat(currentNumber);
      break;
    default:
      return;
  }
  currentNumber = result;
  calculationOperator = "";
};
const clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevnumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
  // console.log(event.target.value);
});

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};
// this comment fix  git add and source
