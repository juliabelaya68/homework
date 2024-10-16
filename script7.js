//Задание 1

//let str = 'js';
//str = str.toLowerCase();
//console.log(str);

//Задание 2

//function filter(arr, str) {
//    const lowerStr = str.toLowerCase();
//   return arr.filter(item => item.toLowerCase().startsWith(lowerStr));
//}

//console.log(filter(['JavaScript', 'Java', 'Python'], 'ja'))

//Задание 3

//let num = 32.58884;
//console.log(Math.floor(num));
//console.log(Math.ceil(num));
//console.log(Math.round(num));

//Задание 4

//console.log(Math.min(52, 53, 49, 77, 21, 32));
//console.log(Math.max(52, 53, 49, 77, 21, 32));

//Задание 5

//function getRandomNumber() {
//    return Math.floor(Math.random() * 10) + 1;
//}
//console.log(getRandomNumber());


//Задание 6

//function getRandomNumber(num) {
//    let arr = [];
//    for (let i = 0; i < num; i++) {
//        arr.push(Math.floor(Math.random() * num));
//    }
//   return arr;
//}

//console.log(getRandomNumber(10));


//Задание 7
//function getRandomNumber(min, max) {
//    return Math.floor(Math.random() * (max - min + 1)) + min;
//}
//console.log(getRandomNumber(1, 10));


//Задание 8
// console.log(new Date());


//Задание 9

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//Задание 10

function formatDate(date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();
    const day0fWeek = days[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();


    return `
Дата: ${day} ${months[month]}${year}-это ${day0fWeek}.
Время:${hours}:${minutes} :${seconds}`;

}


console.log(formatDate(new Date()));