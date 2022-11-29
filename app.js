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
// const res = prompt("Cколько будет 7 + или - 15?");

/* switch (true) {
  case res === "Я не робот":
  case Number(res) === 22:
  case Number(res) === -8:
    console.log("Успех");
    break;
  default:
    console.log("Вы робот");
} */

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

// Поиск элемента в массиве

const massive = new Array("Egor", "Dasha", "Something");

// indexOf
const elIndex = massive.indexOf("olol");
console.log(elIndex); // такого индекса нет поэтому - 1 придет

// .includes

const elIndex2 = massive.includes("Egor"); // индекс есть вернет true
console.log(elIndex2);

// includes через true false понимает (через булевому логику)
if (massive.includes("Dasha")) {
  console.log("Egor + Dasha");
}

// .slice() - учитывать передау одного параметра и передачу двух параметров;

const newMassive = ["Egor", "Dasha", "Petya", "Leonid"];

const newSlice = newMassive.slice(2);
console.log(newSlice); // Petya Leonid - возращ элементы с указ индекса до конца  массива НЕ МОДИФИЦИРУЯ САМ МАССИВ

const newSlice_1 = newMassive.slice(0, 2); // - возвращ с указ индекса первым параметром до 2 НО НЕ ВКЛЮЧАЯ ЕГО ТО ЕСТЬ 0 И 1 ИНДЕКС
console.log(newSlice_1);

const newSlice_2 = newMassive.slice(-1); // возращ последний элемент - Leonid
console.log(newSlice_2);

const newSlice_3 = newMassive.slice(1, -2); // возвращ со второго по минус 2 (не включая его) - Dasha
console.log(newSlice_3);

console.log(newMassive); // НЕ МОДИФИЦИРОВАН

// .splice - МОДИФИЦИРУЕТ ИСХОДНЫЙ МАССИВ

const newMassive_1 = ["Egor", "Dasha", "Something"];

const newSplice = newMassive_1.splice(0, 2); // взяли нулевой элмент и два элемента нулевой и первый;
console.log(newSplice); // МОДИФИЦРОВАН = ИСХОДНЫЙ МАССИВ ИЗМЕНЕН

// .reverse - переворачивает массив

const massiveReverse = ["Egor", "Dasha", "Lesha", "Ignat"];
console.log(massiveReverse.reverse()); // сразу модифицирует его и переворачивает

// .concat
const newArrConcat = ["Name_0", "Name_1", "Name_2"];
console.log(massiveReverse.concat(newArrConcat)); // добавили новый массив

// Из массива в строку и обратно

// Из строки в массив:
const url = "google/cryptorank/price";
const res_2 = url.split("/");
console.log(res_2);

// Из массива в строку:
const newMassive_2 = ["Egor", "Dasha", "Lesha", "Ignat"];
const res_3 = newMassive_2.join(", ");
console.log(res_3);

/* ​
Дан список задач
const tasks = ['Задача 1'];

Сделать функции:
Добавление задачи в конец
Удаление задачи по названию
Перенос задачи в начало списка по названию
! Всегда меняем исходный массив 
*/

const tasks = ["Задача 1"];

// добавили задачу в конец
function addTasks(task) {
  tasks.push(task);
}
// удалили задачу по названию
function Remove(task) {
  const index = tasks.indexOf(task);
  if (index === -1) {
    return;
  }
  return tasks.splice(index, 1);
}
// перенесли задачу в начало списка
/* 
Сделали константу OldTask куда положили индекс задачи 
Далее удалили задачу 
Но эту же задачу из переменной OldTask добавили в начало
*/
function Prioritize(task) {
  const result = Remove(task); // DRY
  if (!result) {
    return;
  }
  tasks.unshift(result[0]);
}

addTasks("Задача 2");
addTasks("Задача 3");
console.log(tasks);
Remove("Задача 2");
console.log(tasks);
Prioritize("Задача 3");
console.log(tasks);

// Деструктуризация
const userEgor = ["Egor", 23, "Izmir"];
const [EgorName, EgorAge, EgorTown] = userEgor;
console.log(EgorName, EgorAge, EgorTown);

/* 
Дан произвольный url вида - https://purpleschool.ru/course/javascript
Нужно сделать функцию, которая выводит в консоль:
Протокол (https)
Доменное имя (purpleschool.ru)
Путь внутри сайта (/course/javascript)
*/

// Проверка на правильный не правильный url
// DRY

const url_1 = "https://purpleschool.ru/course/javascript";
const url_5 = "purpleschool.ru/course/javascript";

function getHttp(url_1) {
  const urlArr = url_1.split("/"); // ["https:, """, "purpleschool.ru", "course", "javascript"]
  const [protocol, _, domen, ...path] = urlArr;
  if (protocol === "https:" || protocol === "http:") {
    if (!domen.includes(".")) {
      return "No";
    }
    console.log(protocol, _, domen, path);
    console.log(`Протокол: ${protocol.split(":")[0]}`);
    console.log(`Домен: ${domen}`);
    console.log(`Путь: /${path.join("/")}`);
  }
}
console.log(getHttp(url_1));

// ЦИКЛЫ

for (let i = 1; i < 10; i++) {
  console.log(`Ваш баланс равен: ${i}$`);
}

// Задача на js

/* 
Задача вывести в консоль строку 'Я люблю JS !' из массива циклом в обратном пордке, не используя метод reverse. 
*/
const arr = ["!", "JS", "люблю", "Я"];
const newM = [];

for (let i = arr.length - 1; i >= 0; i--) {
  newM.push(arr[i]);
}
const newMToString = newM.join(" ");
console.log(newMToString);

// цикл в цикле для двумерного массива;
const loolInLoop = [
  ["Задача 1", 2],
  ["Задача 2", 2],
];

// while
// do while

// for of - для быстрого обхода массива по Значению!
const forOf = ["Egor", "Dasha", "Petya", 23];
for (let element of forOf) {
  console.log(`for of по значению: ${element}`);
}

// for in - для быстрого обхода по Индексу!
for (let index in forOf) {
  //console.log(index); // вывел по индексу
  console.log(`Вывод по значению индекса: ${forOf[index]}`); // вывел по значению индекса
}

/* 
Есть выгрузка операций пользователя 
const operations = [1000, - 700, 300, -500, 10000]
а также нач баланc в $100
Необходимо сделать функции расчетов 
- Итогового баланса 
- Наличие отрицателнього баланса (если после окончание очередной операции <0 
  выдать false)
- Расчета среднего дохода и среднего расхода
*/

const operations = [1000, -700, 300, -500, 10000];
const startBalance = 100;

function getBalance(arrayOfOperations, intialBalance) {
  let balance = intialBalance;
  for (const element of arrayOfOperations) {
    // прошлись циклом вывели элементы
    balance += element; // сложили каждый элемент с балансом
  }
  return balance; // вернули баланс
}

console.log(getBalance(operations, startBalance));

// корретность операции
function checkOperations(arrayOfOperations, intialBalance) {
  let balance = intialBalance;
  let isOkay = true; // по ум считаем что все окей
  for (const element of arrayOfOperations) {
    balance += element;
    if (balance < 0) {
      // елси баланс меньше возвращ false;
      isOkay = false;
      break;
    }
    return isOkay;
  }
}

console.log(checkOperations(operations, startBalance));

function avarageOperations(arrayOfOperations) {
  let positiveCount = 0;
  let positiveSum = 0;
  let negativeCount = 0;
  let negativeSum = 0;
  for (const element of arrayOfOperations) {
    if (element > 0) {
      positiveCount++;
      positiveSum += element;
    }
    if (element < 0) {
      negativeCount++;
      negativeSum += element;
    }
  }
  return [positiveSum / positiveCount, negativeSum / negativeCount];
}
console.log(avarageOperations(operations));

// Callback

// фнукции сложения умножения степени

function sumTwoNum(a, b) {
  return a + b;
}

function minusTwoNum(a, b) {
  return a - b;
}

function squareTwoNum(a, b) {
  return a ** b;
}

function itIsCallback(a, b, fn) {
  console.log(fn.name);
  const resCallback = fn(a, b);
  return resCallback;
}

let res_callback = itIsCallback(4, 5, minusTwoNum);
console.log(res_callback);
