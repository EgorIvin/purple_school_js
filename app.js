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

// Тернарный оператор - выражения / утверждения

// if / if else это утверждение

const zflipPrice = 50000;
const iphonePrice = 70000;
const budget = 57000;

if (budget > zflipPrice) {
  let message = "u can buy zFlip!";
} else if (budget > iphonePrice) {
  let message = "u can buy iPhone!";
} else {
  let message = "u dont can buy smartphone";
}
// console.log(`You can buy ${message}`); // получил message is not defined - тут важно знать про скоуп / область видимости

// поэтому нужно ее сначала объявить потом присвоить и уже через шаболонную строку вывести

const samsungPrice = 52000;
const XiaomiPrice = 71000;
const myBudget = 58000;

let myMessage;
if (myBudget > samsungPrice) {
  myMessage = "u can buy Samsung!";
} else if (myBudget > XiaomiPrice) {
  myMessage = "u can buy Xiaomi!";
} else {
  myMessage = "u dont can buy smartphone";
}
console.log(`${myMessage} (шаблонная строка)`);

// тернарный оператор

const str = 10 > 0 ? "Больше 0" : "Меньше нуля";
console.log(str);
console.log(`Это число: ${str}`);

// тернанрный оператор можно использвать сразу в шаблонной строке - так как это ВЫРАЖЕНИЕ (которое возвращает конкретное вырпажение, не просто исполняет код, но и подставляет его)
const tomatoPrice = 20;
const myMoney = 38;
console.log(`You can buy ${myMoney > 20 ? "tomato" : "nothing"}`);

/* Методом prompt получите ответ пользователя на вопрос "Сколько будет 7 + или - 15?". Если ответ верен, выведите в консоли "Успех", если нет - "Вы робот!", а если он введёт "Я не робот", то тоже "Успех".
 */

// через if

// const answer = prompt("Cколько будет 7 + или - 15", "");
/*if (Number(answer) === 22) {
  console.log("Успех");
} else if (Number(answer) === -8) {
  console.log("Успех");
} else if (answer === "Я не робот") {
  console.log("Успех");
} else {
  console.log("Вы робот!");
}
 */

// через switch
const res = prompt("Cколько будет 7 + или - 15?");

switch (true) {
  case res === "Я не робот":
  case Number(res) === 22:
  case Number(res) === -8:
    console.log("Успех");
    break;
  default:
    console.log("Вы робот");
}

/* Пользователь хочет приобрести игру в магазине. Он может это сделать только если:
Eго баланс больше 1000 (balance) или число бонусов больше 100 (bonusBalance)
Он не забанен (isBanned)
Игра не куплена (isExist)
Игра в продаже (isSelling)
Напишите условие для покупки и выведите в консоль результат.
*/
const balance = 1100;
const bonus = 99;
const isBanned = false;
const isExist = false;
const isSelling = true;

const canBuy =
  (balance > 1000 || bonus > 100) && !isBanned && !isExist && isSelling;
console.log(`Могу купить игру: ${canBuy ? "Да" : "Нет"}`);

// Фнукции обычные, анонимные, стрелочные

// Пример обычной функции

// Пример анонимной фнункции

// Пример стрелочной функции

// Упрощение функции
const toPowerArrow = (num, power) => num ** power;
console.log(`Квадрат равен ${toPowerArrow(5, 2)}`);

// Значение по умолчанию

// Можно так

/*function toPower(b, f) {
  const f2 = f ?? 2;
  const res = b ** f2;
  return res;
} 
console.log(`Result = ${toPower(2,)}`);*/

// Но лучше делать так

function toPower(b, f = 2) {
  const res = b ** f;
  return res;
}
console.log(`Result: ${toPower(2)}`);

// Задание по функциям:
/* 
Задание для упражнения:
Пользователь:
Возраст
Наличие работы
Деньги
Нужно проверить может ли он купить новый MacBook за 2000$? Он может брать не только свои деньги, но и взять кредит. Ему дадут 500$, только если ему больше 24-х лет и он имеет работу, 100$ если ему просто больше 24-х лет и 0 в ином случае. Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false.
*/

function credit(age, work) {
  if (age > 24 && work === true) {
    return 500;
  } else if (age > 24 && work === false) {
    return 100;
  } else {
    return 0;
  }
}
console.log(`Мне дадут кредит:  $${credit(25, true)}`);

function canBuyMacBook(age1, work1, money) {
  const allMoney = credit(age1, work1) + money;
  const res_1 = allMoney > 2000 ? true : false;
  return res_1;
}
console.log(`Могу купить MacBook: ${canBuyMacBook(25, true, 1501)}`);

// ИЛИ ДРУГОЙ ВАРИАНТ

function computerCredit(age_1, hasJob = false) {
  switch (true) {
    case age_1 > 24 && hasJob: // true === age > 25 && true === hasJob
      return 500; // можно без break потому что исполь return
    case age_1 > 24:
      return 100;
    default:
      return 0;
  }
}

function canBuyIt(
  productPrice,
  age_1,
  all_money,
  hasJob = false
) /* hasJob в конец тк по умолчанию при вызвове можно будет спокойно вызывать  */ {
  const creditMoney = computerCredit(age_1, hasJob);
  return productPrice <= creditMoney + all_money;
}

console.log(`Результат покупки: ${canBuyIt(2000, 25, 1500, true)}`);

//  Массивы
// Как получить первый или последний элемент массива:
const rolesUser = ["Admin", "User", "SuperAdmin"];
console.log(`Первый элемент массива через индекс: ${rolesUser[0]}`);
console.log(
  `Последний элемент массива через length - 1: ${
    rolesUser[rolesUser.length - 1]
  }`
);

console.log(`Первый элемент массива через at: ${rolesUser.at(0)}`);
console.log(`Последний элмент массива через at: ${rolesUser.at(-1)}`);
// console.log(rolesUser.at(1))
console.log(rolesUser.at(0));
// consolelog(rolesUser[0]);
console.log(rolesUser[0]);

// обяьвление через newArray
const rolesUser_1 = new Array("Egor", "Dasha");
console.log(rolesUser_1);
console.log(`Массив созданый через new Array: ${rolesUser_1.at(0)}`);

// Изменение / управление элементами в массиве

const newPeople = ["Egor", "Dasha", "Vanya"];
newPeople[0] = "SASHA";
console.log(newPeople.at(0));

// Базовые методы .push .unshift .pop .shift

const randomWords = ["God", "Rap", "Sosiska", "Lol"]; // MASSIVE

// .push() добавление элемента в конец массива
const addNewElement_inend = randomWords.push("Add new word in end!");
console.log(`Add new word in end: ${randomWords}`); // доб новый элемент в конец
console.log(addNewElement_inend); // покажет длину массива с 1 счет
// .unshift()
const addNewElement_instart = randomWords.unshift("Add new word in start");
console.log(`Add new word in start: ${randomWords}`); // добавили новой элемент в начало
console.log(addNewElement_instart);
// .pop()
const delete_end = randomWords.pop(); // удаление последнего элемента
console.log(`Delete last element: ${randomWords}`);
console.log(delete_end);
// .shift() // удаление нулевого элемента
const delete_first = randomWords.shift();
console.log(`Delete first element: ${randomWords}`);
console.log(delete_first);
