// const age = 10
// for(let i = 0; i <= 10; i++){
//   console.log("Result: ", i)
// }

// const hours = 10;
// if (hours < 17) {
//   console.log("Pending");
// } else if (hours >= 17 && hours <= 24) {
//   console.log("Exprise")
// } else {
//   console.log("Overdue")
// }

// switch(true) {
//   case hours < 17:
//     console.log("Pending");
//     break;

//   case hours >= 17 && hours <= 24:
//     console.log("Exprise");
//     break;

//   default:
//     console.log("Overdue");
//     break;
// }
// switch(true) - ставится true для того, чтобы код запустил проверку switch. В случае false провека тело выполнятся не будет.
// .........................................
// let month = prompt("Enter your month on birth").toLowerCase();

// if (month === "декабрь" || month === "январь" || month === "февраль") {
//   console.log("Зима");
// } else if (month === "март" || month === "апрель" || month === "май") {
//   console.log("Весна");
// } else if (month === "июнь" || month === "июль" || month === "август") {
//   console.log("Лето");
// } else if (month === "сентябрь" || month === "октябрь" || month === "ноябрь") {
//   console.log("Осень");
// } else  {
// console.log("Вы вписали неправильные данные");
// }

// const email = prompt("Enter your email")

// if(email.length < 4 || email.length > 10 || !email.includes("@") || !email.includes(".")) {
//   console.log("Вы ввели мало символов")
// } else {
//   console.log("почта валидна")
// }

// const string = prompt("Enter your name");
// const lowerCase = string.toLowerCase();
// const firstLetter = string[0].toUpperCase();
// const cutString = string.slice(1);
// const result = `${firstLetter}${cutString}`;

// console.log(result);

// 1) Создали окно для ввода имени
// 2) привели строку в нижний регистр полностью
// 3) первую букву строки изменили на большой регистр
// 4) от строки отделили первую букву
// 5) вывели в результат шаблонную строку соединяющую большую букву и строку

// const clients = ["Mango", "Apple", "Cherry"];

// clients[0] = "Poly";
// clients[2]= "Milk"

// console.log(clients);

// const clients = ["Ponchik", "Shmonchik", "Pokemonchik"]

// console.log(clients.length);

// const clients = ["Poly", "Kroly", "Bob"];
// const lastElementClients = clients.length - 1;
// console.log(lastElementClients);
// console.log(clients[lastElementClients]);

// const clients = ["Poly", "Koly", "Shmoly", "Bob"]

// for (let i = 0; i <= clients.length - 1; i += 1) {
//   console.log([i]);
// }

// 1) задаем имя переменной, которая содерджит массив;
// 2) используя цикл for, перебираем элементы масива;
// 3) js под капотом инициализирует значение переменной i = 0; затем проверяет условия, которое должно приводить к тру и видит, что значение i < длины массива,
// что дает "true" и выполняется счетчик увеличивая значение на 1.

// const clients = ["Poly", "Bob", "Dima", "Marina", "Maksim"];

// for (const client of clients) {
//   console.log([client]);
// }

// const string = ["Javascript"];

// for (const veriable of string) {
//   console.log([veriable]);
// }

// const clients = ["Dima", "Bob", "Mars8im", "Marina", "Johny"];
// const clientToFind = "Marina";
// let massege;

// for (const client of clients) {

//   if (client === clientToFind) {
//     massege = "Клиент нашелся"
//     break;
//   }
//   massege = "такого клиента нет";
// }

// console.log(massege);

// const number = [1, 2, 5, 7, 8, 12, 15, 20, 25, 30, 35, 40, 45, 50];
// const thirdNimber = 14;

// for (let i = 0; i < number.length; i += 1) {
//   if(number[i] < thirdNimber) {
//     continue;
//   }
//  console.log(`число больше чем ${thirdNimber}: ${number[i]}`);
// }

//---------------------------- МЕТОДЫ МАССИВА ------------------------------------

// ================================================================================
// const Fruit = "Mango";

// console.log(Fruit.split(""));

// const name = "Javascript это круто";
// console.log(name.split(" "));

// метод split() превращает строку в массив, разбив ее по разделителю "delimiter". разделителем может быть массив из 1 или нескольких символов.

// ===============================================================================

// const nameLanguage = ["Javascript", "это", "круто"];
// console.log(nameLanguage.join(""));
// console.log(nameLanguage.join(" "));
// console.log(nameLanguage.join("_"));
// console.log(nameLanguage.join("-"));

// метод join() - соединяет элементы массива в строку. Противополжный методу split().

// =================================================================================

// const massiv = ["Mango", "Poly", "Bob", "Maksim"]
// console.log(massiv.indexOf("Maksim"));

// метод indexOf() возвращает первый индекс, в котором элемент со значением был найден в массиве. В случае если, метод не находит элемент массива, возвращает  - 1. Этот метод применется если необходимо получить индекс элемента массива.

// =================================================================================

// const clients = ["Dima", "Marina", "Bob", "Anton"];
// console.log(clients.includes("Anton"));
// console.log(clients.includes("Evhen"));

// метод includes() занимается поиском елемента массива и если находит, выводит true, в случае если не находит выведет в консоль - false. Применяется, если необходимо найти элемент массива и не важенна его позиция.

// ==================================================================================

// также метод includes() может осужеществялть проверку множественных условий;

// // Выносим варианты в массив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// ===================================================================================

// метод push() - добавляет крайний правый элемент массива

// const number = [];

// number.push(1);
// console.log(number); [1]

// number.push(2);
// console.log(number); [1, 2]

// number.push(3);
// console.log(number); [1, 2, 3]

// number.push(4);
// console.log(number); [1, 2, 3, 4]

// ==================================================================

// метод pop() - отримает крайний правый элемент массива

// const numbers = [1, 2, 3, 4, 5, 6];

// numbers.pop(5);
// console.log(numbers);

// numbers.pop(4);
// console.log(numbers);

// numbers.pop(3);
// console.log(numbers);

// ======================================================================
// метод shift() - отнимает крайний левый элемент массива

// const numbers = [1, 2, 3, 4, 5, 6];

// numbers.shift(5);
// console.log(numbers);

// numbers.shift(4);
// console.log(numbers);

// numbers.shift(3);
// console.log(numbers);

// =======================================================================

// метод unshift() - добавляет крайний левый элемент массива

// const number = [];

// number.unshift(4);
// console.log(number); // [4]

// number.unshift(3);
// console.log(number); // [3, 4]

// number.unshift(2);
// console.log(number); // [2, 3, 4]

// number.unshift(1);
// console.log(number); // [1, 2, 3, 4]

// Данный вид методов работают только с крайним правым или крайним левым элементов массивов и не могут взаимодействовать с рандомным элементом массива в середине строки.

// ===================================================================
// метод slice() возвращает новый массив, содержащий копию исходного массива не изменяя его.
// Копия делается от begin (начало) и до, но не включая end. Возвращает новый массив, содержащий извлеченные элементы.

// const clients = ['Mango', 'Apple', 'Cherry', 'Clubnika'];
// console.log(clients.slice(1, 3)); // [Apple, Cherry];
// console.log(clients.slice(2)); // ['Cherry', 'Clubnika'];

//метод slice([start], [end] - но не включая [end]) т.е. имея массив = ['Mango', 'Apple', 'Cherry', 'Clubnika'];
// выводим в консоль slice(1,3); это означает:
// 1) js идет и смотрит на какой позиции находятся запрашиваемые элементы для копирования.
// 2) видит, что ему необходимо скопировать елемент массива с 1-й позиции и закончить 3-й, но не включая ее
// 3) копирует копию исходного массива и проверяет: 0 - индекс = не подходит
// 4) 1-й подходит, копирует его ["Aplle"]; 2-й подходит ["Cherry"]; 3-й видит, что это конечный элемент массива, и его не включает в копирования.
// 5) возвращает копию массива с 2мя элементами.

// ==================================================================
// метод splice() удаляет, изменяет, добавляет элементы с произвольного места массива.

// ---------------Удаление элемента массива.-------------

// необходимо задать индекс с которого начинаем удаление и количество удаляемых элементов массива.

// const score = [1, 2, 3, 4, 5, 6, 7, 8];
// const deleteScore = score.splice(4 - индекс элемента для удаления, 5 - кол-во удаляемых);
// console.log(deleteScore.splice(0, 3));

// ---------------Добавление элемента массива--------------

// Для добавления элементов в массив, необходимо указать:
// 1) позицию куда его будут добавлять;
// 2) обчзятельно указать индекс "0" для того чтобы js понимал, что ему до добавления нового элемента в массив ничего перед ним удалять не нужно
// 3) новые добавляемые элементы.

// const flowers = ['Roza', 'Oduvan', 'Liia', 'Pion', 'Romashka'];
// flowers.splice(2, 0, 'Lapukh');

// console.log(flowers);

// ---------------замена элемента массива--------------------
// Для замены элемента массива, должны быть соблюдены 3 основных правила:
// 1) позиция (индекс) первого элемента для удаления
// 2) num - количество заменяемых элементов
// 3) элементы массива, которые необходимо заменить

// const languages = ['js', 'C', 'C++', 'PhP'];
// languages.splice(1, 2, 'C#');

// console.log(languages); // ["js","C#","PhP"];

// 1) js смотрит что 1-й индекс это "C", с него и будет делаться удаление. Т.е js он трогать не будет.
// 2) дальше определяет, что 2 элемента начиная с индекса 1 он удалит, т.е. - "C", "C++".
// 3) Поставит на удаленное место заменяемый элемент - это "C#";

// ============================================================

// ---------------------метод concat()-------------------------
// concat() - метод для объеденение нескольких массивов в 1. Он не изменяет массив, а на его место возвращает новый. Порядок аргументоа метода влияет на порядок элементов нового массива.

// const oldClients = ['Dima', 'Maksim', 'Marina'];
// const newClients = ['Serhii', 'Vlad', 'Bob'];
// const allClientsNew = oldClients.concat(newClients);

// console.log(allClientsNew);
