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
