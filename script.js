// Всплывающие окна

//const question = confirm('Are you here?')
// console.log(question); //true or false
// const answer = +prompt('Вам есть 18', 'Уверен?');
// console.log(answer); //уверен?

//Интерполяция (ES6)
const category = 'toys';
console.log(`someurl.com/${category}/ hi пишет пробел`);

//Операторы
let incr = 10,
   decr = 10;

incr++; //инкримент увеличивает на 1
decr--; //декримент уменьшает на 1

console.log(++incr);
console.log(--decr);

// ! оператор отрицания
console.log(10 != 8);

// запись условий через if / else
const num = 50;
if (num < 49) {
   console.log('Error');
} else if (num > 100) {
   console.log('Error-1');
} else {
   console.log('Ok');
}

// тернарный оператор ? / :
// условие ? выражение1 : выражение2 

// Условный (тернарный) оператор - единственный оператор в JavaScript, принимающий три операнда: условие, за которым следует знак вопроса (?), затем выражение, которое выполняется, если условие истинно, сопровождается двоеточием (:), и, наконец, выражение, которое выполняется, если условие ложно. Он часто используется в качестве укороченного варианта условного оператора if.

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