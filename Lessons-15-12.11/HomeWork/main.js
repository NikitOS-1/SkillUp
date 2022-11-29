// -----------------task-1------------------
// -Завдання 1. Написати функцію яка приймає два параметри rangeNumbers(a, b) і
//виводить непарні числа від a до b.
//     Зробити перевірку щоб b було більше a.

function rangeNumbers(a, b) {
  if (b > a) {
    for (i = a; i <= b; i++) {
      if (i % 2) {
        console.log(i);
      }
    }
  }
}
// rangeNumbers(1, 15);

//-------------------task-2-----------------
// - Завдання 2. Запитати у користувача кількість категорій витрат за минулий місяць,
// запитати які це категорії і скільки коштів на них було витрачено і записати все це у
//об'єкт.
//Написати функцію яка вирахує загальну суму всіх
//     витрат. Результат вивести повідомленням (За минулий місяць Ви витратили … грн)

function howMuchSpending() {
  let howMuchCategory = 1; /*prompt("How many categories do you have ?");*/

  for (let i = 0; i < howMuchCategory; i++) {
    let howCategory = "avto"; /*prompt("Which category ?");*/
    let sumCategory = "2000"; /*prompt("How much coats ?");*/
    let person = new Category(howCategory, sumCategory);
    console.log(person);
  }
  function Category(name, sum) {
    this.name = name;
    this.sum = sum;
  }
  
}
howMuchSpending();
