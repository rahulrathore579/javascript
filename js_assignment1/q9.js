// Q9: Random Math Quiz Generator
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;
let operators = ["+", "-", "*", "/"];
let op = operators[Math.floor(Math.random() * operators.length)];
let result;
switch (op) {
  case "+": result = num1 + num2; break;
  case "-": result = num1 - num2; break;
  case "*": result = num1 * num2; break;
  case "/": result = (num1 / num2).toFixed(2); break;
}
console.log(`Question: ${num1} ${op} ${num2}`);
console.log(`Answer: ${result}`);
