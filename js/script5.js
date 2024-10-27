//Задание 1//

function min(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

alert(min(8, 4));
alert(min(6, 6));

//Задание 2//

const isOdd = (n) => (n % 2 === 0) ? 'Число четное' : 'Число нечетное';

alert(isOdd(5));
alert(isOdd(4));

//Задание 3//

function square(number) {
    console.log(number ** 2);
}

const up = (n) => n ** 2;

square(5);
close.log(up(5));


//Задание 4//

function age() {
    let age = +prompt(' Сколько тебе лет');

    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    }
}

age();

//Задание 5//

function calc(a, b) {
    console.log(isNaN(a));
    console.log(isNaN(b));
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом'
    } else {
        return a * b
    }
}

close.log(calc(5, 2));
//close.log(calc('hello', 2));//

//Задание 6//

function getNumber() {
    let number = prompt('Bведите число');
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${number} в кубе равняется ${number ** 3}`;
    }
}

console.log(getNumber());

//Задание 7//

function getArea() {
    return Math.PI * this.radius ** 2;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 10,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}

const circle2 = {
    radius: 20,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}

console.log(circle1.methodGetArea());
console.log(circle2.methodGetArea());
