// - Завдання 1. Написати функцію, яка приймає два параметри trimString(str, maxlength).
// Функція перевіряє довжину рядка str, і якщо вона перевершує maxlength - замінює кінець str на "..."

let str = "Hello world";

function trimString(str, maxlength) {
  if (str.length > maxlength) {
    let more = "...";
    console.log(str + more);
  } else {
    console.log(str);
  }
}

// trimString(str, 4);
// trimString(str, 40);

// - Завдання 2. Написати функцію, яка приймає випадкове число(Math.random()*100),
// і виводить інформацію в консоль чи воно парне чи ні.

let randomNumber = Math.floor(Math.random() * 100);

function doubleNumberOrNot(num) {
  if (num % 2) {
    console.log(`${num} : не парное`);
  } else {
    console.log(`${num} : парное`);
  }
}
// doubleNumberOrNot(randomNumber);
