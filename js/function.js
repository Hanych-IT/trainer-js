// function unixTime() {
//   let time = Math.floor(new Date().getTime());
//   console.log(time);
// }

// unixTime();

// ============ Обьявление функции (function declaration)
// function multyply() {
//   // тело фунции
//   console.log('Это тело функции');
// }

// multyply();

// function multyply(x, y, z) {
//   console.log('Результат умножения равен');

//   return x * y * z;

//   console.log(
//     'Этот лог никогда не выполнится, так как находится после вызова return',
//   );
// }

// в круглых скобках фанкции передаются параметры. Их может быть несколько,а может и не быть совсем.
// тогда в функции пишутся просто пустые скобки.

// При вызове функции в круглых скобках передаются АРГУМЕНТЫ - это значения для обьявленых параметров.

// Результат работы функции, можно сохранить в переменную

// let result = multyply(2, 5, 8);
// console.log('Выражение', result);

// result = multyply(4, 5, 9);
// console.log('Выражение', result);

// result = multyply(3, 6, 6);
// console.log('Выражение', result);

// ======================================================================

// function multyply(x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }
// console.log('вызов функции');
// multyply(3, 8, 9);

// console.log('после вызова функции');

// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`Выведет расчет ${countFrom}, ${countTo}, ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// count(3, 11);

// ============================================================

// function multyply() {
//   let total = 1;

//   for (argument of arguments) {
//     total += 1;
//   }

//   return total;
// }

// console.log(multyply(1, 3, 4));

// ===========================================================

// function fn() {
//   const args = Array.from(arguments);
// }

// =======Function expression ================
// отличие function declaration от function expression в том, что последнее
// нельзя вызвать до места своего создания, только после, ПОТОМУ ЧТО ЭТО БУКВАЛЬНО
// ФУНКЦИЯ ОБЬЯВЛЕННАЯ В const и ЯВЛЯЕТСЯ ПЕРЕМЕННОЙ.
