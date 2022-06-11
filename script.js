// querySelectorAll digunakan saat Anda ingin
// mendapatkan beberapa element, dan querySelector
// digunakan saat Anda ingin mendapatkan satu jenis
// element.
const numbers = document.querySelectorAll(".number");
// console.log(numbers);
numbers.forEach((number) => {
  number.addEventListener(
    "click",
    (event) => {
      // inputNumber(event.target.value);
      // updateScreen(currentNumber);
      console.log(event.target.value);
    }
    //   console.log(number);
  );
});

const callculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  callculatorScreen.value = number;
};

// let prevnumber = "";
// let calculationOperator = "";
// let currentNumber = "";

// const inputNumber = (number) => {
//     if (currentNumber === "0") {
//         currentNumber = number;
//     } else {
//     currentNumber += number;
//     }
// }

// const operators = document.querySelectorAll(".operator");
//  operators.forEach((operator) => {
//     operator.addEventListener("click",(event) => {
//     inputOperator(event.target.value);
//     }
//  })
//  );

//  const inputOperator = (operator) => {
//     prevnumber = currentNumber;
//     calculationOperator = operator;
//     currentNumber = "";
// }

// const equalSign = document.querySelector(".equal-sign");
// equalSign.addEventListener("click",() => {
//     calculate();
//     updateScreen(currentNumber);
// });

// const calculate = () => {
//     let result = "";
//     switch(calculationOperator){
//         case "+":
//         result = parseFloat(prevnumber) + parseFloat(currentNumber);
//         break;
//         case "-":
//         result = parseInt(prevnumber) - parseInt(currentNumber);
//         break;
//         case "*":
//         result =    parseInt(prevnumber) * parseInt(currentNumber);
//         break;
//         case "/":
//         result = parseInt(prevnumber) / parseInt(currentNumber);
//         break;
//         default:
//         result = "";

//     }
//     currentNumber = result;
//     calculationOperator = "";

// }
// const clearBtn = document.querySelector(".all-clear");
// clearBtn.addEventListener("click",() => {
//     clearAll();
//     updateScreen(currentNumber);
// });

// const clearAll = () => {
//     currentNumber = "0";
//     prevnumber = "";
//     calculationOperator = "";
// }

// const decimal = document.querySelector(".decimal");
// decimal.addEventListener("click",() => {
//   inputDecimal(event.target.value);
//     updateScreen(currentNumber);
// });

// inputDecimal = (dot) => {
//     if (currentNumber.includes(".")) {
//         return;
//     }
//     currentNumber += dot;
// }
