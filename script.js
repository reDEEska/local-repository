//4. Простое общение с пользователем

//const question = confirm('Are you here?')
// console.log(question); //true or false
// const answer = +prompt('Вам есть 18', 'Уверен?');
// console.log(answer); //уверен?

////////////////////////////

// тернарный оператор ? / :
// условие ? выражение1 : выражение2 

// Условный (тернарный) оператор - единственный оператор в JavaScript, принимающий три операнда: условие, за которым следует знак вопроса (?), затем выражение, которое выполняется, если условие истинно, сопровождается двоеточием (:), и, наконец, выражение, которое выполняется, если условие ложно. Он часто используется в качестве укороченного варианта условного оператора if.


let num = 50;
(num == 50) ? console.log('Ok1'): console.log('Error');

//Инструкция switch сравнивает выражение со случаями, перечисленными внутри неё, а затем выполняет соответствующие инструкции.

switch (num) {
   case 49:
      console.log('Не верно');
      break;
   case 100:
      console.log('Не верно');
      break;
   case 50:
      console.log('В точку');
      break;
   default:
      console.log('Не в этот раз');
      break;
}

// Циклы
let number = 50;

while (number <= 53) {
   console.log(number);
   number++;
}

// do...while
// Выражение do...while создаёт цикл, который выполняет указанное выражение до тех пор, пока условие не станет ложным. Условие проверяется после выполнения выражения, то есть выражение выполнится как минимум один раз.

let number1 = 3;
do {
   console.log(number1);
   number1++;
}
while (number1 <= 8);

//Выражение for создаёт цикл, состоящий из 3 необязательных выражений в круглых скобках, разделённых точками с запятой.

//for ([инициализация]; [условие]; [финальное выражение])выражение

let number2 = 10;
for (let i = 4; i <= 8; i++) {
   console.log(number2);
   number2++;
}
let number3 = 5;
for (let i = 1; i <= 10; i++) {
   if (i == 6) {
      // break; // прекращает цикл
      continue; // исключает переменные из цикла
   }
   console.log(i);

}

//Функции

// Function declaration
function showFirstMessage() {
   console.log('Hello world');
}
//-------
function ret() {
   let num = 50;
   return num;
}
const anotherNum = ret();

// Finction expression
const logger = function () {
   console.log('Hallo!');
};
logger();

//Стрелочные функции
const calc = (a, b) => a + b;
const calc1 = (a, b) => {
   return a + b;
}

// Методы с текстом

const str = 'Text';
console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());

const fruit = 'Some fruit';
console.log(fruit.indexOf('r')); //Метод ищет елемент и выводит номер индекса.

console.log(fruit.slice(5, 11)); // Метод вырезает часть кода
console.log(fruit.substring(5, 11)); // Метод вырезает часть кода

// Методы с числами

const num1 = 12.2;
console.log(Math.round(num1)); //округление числа

const num2 = '15.2px';
console.log(parseInt(num2)); //переводит текст в число + округляет его
console.log(parseFloat(num2)); //переводит текст в число, не округляя его

// Callback function

function learnJS(lang, callback) {
   console.log(`Я учу: ${lang}`);
   callback();
}
// learnJS('JavaScript', function () {
//    console.log('Я прошел этот урок!');
// });

function done() {
   console.log('Я прошел этот урок!');
}
learnJS('JavaScript', done);