// - Завдання 1. Написати функцію яка повертає більше з двох чисел.

function numberBig(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  }
}

// console.log(numberBig(5, 10)); //10
// console.log(numberBig(4, 3)); //4
// console.log(numberBig(129, 14)); //129

// - Завдання 2. Написати функцію weekFn(n), яка приймає параметром день тижня, а повертає його назву. Якщо вводиться
//     рядок,дробове число, чи число поза межами діапазону 1-7 - функція повинна повернути null.
function weekFn(n) {
  if (n == 1) {
    return "Monday";
  } else if (n == 2) {
    return "Tuesday";
  } else if (n == 3) {
    return "Wednesday";
  } else if (n == 4) {
    return "Thursday";
  } else if (n == 5) {
    return "Friday";
  } else if (n == 6) {
    return "Saturday";
  } else if (n == 7) {
    return "Sunday";
  } else if (n === String) {
    return null;
  } else {
    return null;
  }
}
// console.log(weekFn(1));
// console.log(weekFn(2));
// console.log(weekFn(3));
// console.log(weekFn(4));
// console.log(weekFn(5));
// console.log(weekFn(6));
// console.log(weekFn(7));
// console.log(weekFn(123));
// console.log(weekFn(1 / 2));
// console.log(weekFn("ds"));

// - Задача 3. Написана функцію 1 calcAge(age) яка вираховує вік користувача(кількість років),у користувача потрібно
//     запитати рік народження.
//      Функція 2 yearsUntilRetirement(year,userName) в залежності від віку виводить інформацію,
//     коли користувач вийде на пенсію, але якщо вік користувача вже такий, то вивести повідомлення що користувач вже
//     пенсіонер. Вихід на пенсію - 60 років. В консолі треба вивести повідомлення (Джек вийде на пенсію через 20 років,
//     або Джек вже на пенсіонер).
// ---1
let dob = prompt("Enter your dob (year)");
calcAge(dob);
function calcAge(age) {
  let yearNow = 2022;
  return alert(`Your now ${yearNow - age} year`);
}
// ---2
function yearsUntilRetirement(year, userName) {
  let retirement = 60;
  let result = retirement - year;
  if (year < retirement) {
    return console.log(`${userName} вийде на пенсію через ${result} років`);
  } else if (year >= retirement) {
    return console.log(`${userName} вже пенсіонер`);
  }
}
// yearsUntilRetirement(29, "Nik");
// yearsUntilRetirement(60, "Nik");
// yearsUntilRetirement(69, "Nik");
