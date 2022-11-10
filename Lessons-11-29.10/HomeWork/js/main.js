// ------------------------task-1--------------------
// Задача 1. Написати скріпт який бере число у користувача і підносить його в квадрат.
let numberUser = prompt("Enter your number");
let numberReturn = alert(numberUser * numberUser);
// ------------------------task-2--------------------
// Задача 2. Написати скріпт, який приймає від користувача його ім”я, суму депозиту, і строк дії депозиту (місяці), і
// виводить інфу скільки людина заробить за цей проміжок часу. Депозитна ставка - 20% річних. Повертає повідомлення:”
// Шановний …., Ви внесли …. грн., під 20% річних, на термін … місяців. За цей період часу Ви заробите … грн.
let userName = prompt("Enter your name");
let userDeptSum = parseInt(prompt("Enter deposit amount", ""));
let userDeptTerm = parseInt(prompt("Enter you term deposites(month)", ""));

let persentMonth = ((userDeptSum / 100) * 20) / 12;
let profit = userDeptSum + userDeptTerm * persentMonth;

alert(
  "Шановний " +
    userName +
    " ," +
    "Ви внесли " +
    userDeptSum +
    " грн., під 20% річних, на термін " +
    userDeptTerm +
    " місяців. За цей період часу Ви заробите " +
    profit +
    " грн."
);
// ------------------------task-3--------------------
// Задача 3. Написати скріпт який бере у користувача два числа a i b, і виводить їх суму, різницю, множення і ділення.

let a = parseInt(prompt("Enter you number a", ""));
let b = parseInt(prompt("Enter you number b", ""));

let resultSum = a + b;
let difference = a - b;
let resultMul = a * b;
let resultDiv = a / b;

alert(
  "Cумма твоих чисел = " +
    resultSum +
    ". Разница в числах = " +
    difference +
    ". Умножение = " +
    resultMul +
    ". Деление = " +
    resultDiv +
    "."
);
