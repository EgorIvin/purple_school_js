// object console with log method
console.log("Hello world! ");

/* Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40 часов работы. Сейчас понедельник. Вы должны уехать через 11 дней.
Выведете в консоль:
Boolean переменную успеете ли вы взяться за работу
Сколько вы за неё попросите? */

const mySalary = 80;
const allHours = 40;
const availableHours = (11 - 2) * 5;

console.log(`Смогу ли я работать? ` + (availableHours > allHours));
console.log(`Стоимость моих работ: ` + `$` + mySalary * allHours);

// Шаблонные строки

const projectName = "cайт магазина";
const price = 2000;
const author = "Иван Иванов";

//Шаблонная строка (литеральная)
const finish = `${author}:\nзаказал ${projectName} за $${price}`;
console.log(finish);

/* 
Васи положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц. Вывести в консоль, сможет ли он купить дом за 13 500$ через 2 года после снятия вклада. И остаток после покупки.
Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах
*/

const sum = 12000;
const addProcent = 0.07;

const sumHouse = 13500;

const all = sum * (1 + Number(addProcent) / 12) ** 24;
console.log(all);

if (all > sumHouse) {
  console.log(
    `Вы можете купить себе дом за $${sumHouse}. Ваш остаток: ${all - sumHouse}`
  );
} else {
  console.log(`Вы не можете куить себе дом за $${sumHouse}`);
}

// switch statement for example

// simple if statement
const userName = "manager";
if (userName === "manager") {
  console.log("You are manager");
} else if (userName === "admin") {
  console.log("You are admin");
} else if (userName === "CEO") {
  console.log("You are CEO");
} else {
  console.log("We not find your position:(");
}

// switch
switch (userName) {
  case "manager": // userName === manager
    console.log('You are manager! "Switch"');
    break;
  case "admin":
    console.log('You are admin "Switch"');
    break;
  case "CEO":
    console.log('You are CEO "Switch"');
    break;
  default:
    console.log('We not find your position:( "Switch"');
}

// switch for true / false
const a = 1;
switch (true) {
  case a > 0:
    console.log("Число положительное"); // true === a > 0 (true)
    break;
  case a < 0:
    console.log("Число отрицательное"); // true !=== a <0 (false)
}
