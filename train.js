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
