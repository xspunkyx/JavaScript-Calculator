/*main*/

const calculator = document.querySelector(".calculator-container");
const buttons = calculator.querySelectorAll(".btn");
const RESULT = calculator.querySelector("#result");
var storage = 0;

/**future version:***/
// const calculate = function (num1, operator, num2) {
//     let result = '';
//     switch (operator) {
//         case 'add':
//             result = parseFloat(num1) + parseFloat(num2);
//             break;
//         case 'subtract':
//             result = parseFloat(num1) - parseFloat(num2);
//             break;
//         case 'times':
//             result = parseFloat(num1) * parseFloat(num2);
//             break;
//         case 'divide':
//             result = parseFloat(num1) / parseFloat(num2);
//         case 'percent':
//             result = parseInt(num1)/100;
//             break;
//     }
//     return result;
// }

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(e) {
    var action = e.target.dataset.action;
    try {
      switch (action) {
        case "clear":
          RESULT.textContent = "";
          break;
        case "decimal":
          RESULT.textContent += ".";
          break;
        case "negate":
          RESULT.textContent = "-" + RESULT.textContent;
          break;
        case "percent":
          RESULT.textContent = parseFloat(RESULT.textContent) / 100;
          break;
        case "subtract":
          RESULT.textContent += "-";
          break;
        case "multiply":
          RESULT.textContent += "*";
          break;
        case "add":
          RESULT.textContent += "+";
          break;
        case "divide":
          RESULT.textContent += "/";
          break;

        case "calculate":
          RESULT.textContent = eval(RESULT.textContent);
      }
    } catch (e) {
      console.log(e);
      RESULT.textContent = "ERROR";
    }
    if (!action) {
      RESULT.textContent += e.target.textContent;
    }
  });
}
