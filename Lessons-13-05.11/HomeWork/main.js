// ---------------------task-1-----------------------------
// Завдання 1. Написати скріпт, в якому користувач вводить свій вік (prompt), якщо його вік від 18 до 45 включно, то
//     вивести повідомлення що він підходить, якщо ні,то не підходить.

let age = prompt("Enter your years old");

if (age >= 18) {
  if (age <= 45) {
    alert("Succes");
  } else {
    alert("Error");
  }
} else {
  alert("Error");
}



// ---------------------task-2-----------------------------
// - Завдання 2. Якщо змінна a більша 3-х і менше 12 і змінна b більше або дорівнює 5 і менше 13, то вивести “вірно”, в
// іншому випадку “не вірно”.;
let a = 5;
let b = 13;
(a > 3) & (a < 12) & (b >= 5) & (b < 13)
  ? console.log("Succes")
  : console.log("Error");



// ---------------------task-3-----------------------------
// - Завдання 3. Доповнення до завдання про депозити з попереднього заняття, тільки в залежності від місяців будуть
// інші депозитні ставки:
// <6 - 15% Від 6 до 9 - 16%>9 - 17 % -->
let userName = prompt("Enter your name");
let userDeptSum = parseInt(prompt("Enter deposit amount", ""));
let userDeptTerm = parseInt(prompt("Enter you term deposites(month)", ""));
let depositRate = 0;

if (userDeptTerm < 6) {
  depositRate = 15;
} else if ((userDeptTerm >= 6) & (userDeptTerm < 9)) {
  depositRate = 16;
} else if (userDeptTerm >= 9) {
  depositRate = 17;
}
let persentMonth = ((userDeptSum / 100) * depositRate) / 12;
let profit = userDeptSum + userDeptTerm * persentMonth;
let profitM = Math.floor(profit);

alert(
  "Шановний " +
    userName +
    " ," +
    "Ви внесли " +
    userDeptSum +
    " грн., під " +
    depositRate +
    " % річних, на термін " +
    userDeptTerm +
    " місяців. За цей період часу Ви заробите " +
    profitM +
    " грн."
);
