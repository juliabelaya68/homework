//1игра угадай число
function oneGame() {
    let n = Math.floor(Math.random() * 101);
    console.log(n);

    while (true) {

        let x = prompt("Введите число от 0 до 100");

        if (isNaN(x)) {
            alert('Ошибка ввода, нужно ввести число');
        } else if (x < n) {
            alert('Загаданое число должно быть больше');
        } else if (x > n) {
            alert('Загаданое число должно быть меньше');
        } else {
            alert('Число угадано!');
            break;
        }
    }
}

//5игра камень ножницы бумага
function fifthGame() {
    const arr = ['камень', 'ножницы', 'бумага'];

    function rockPaperScissors() {

        const useChoice = prompt('Сделай выбор! Камень,ножницы,бумага!');

        const random = Math.floor(Math.random() * arr.length);

        const pcCoice = arr[random];

        console.log(pcCoice);
        console.log(useChoice);


        if (useChoice.toLowerCase() === pcCoice) {
            alert(`ничья! компьютер выбрал тоже ${pcCoice}!`)

        } else if ((useChoice.toLowerCase() === "камень" && pcCoice === "ножницы") ||

            (useChoice.toLowerCase() === 'ножницы' && pcCoice === 'бумага') ||

            (useChoice.toLowerCase() === 'бумага' && pcCoice === 'камень')
        ) {

            alert(`вы победили! выбор компьютера ${pcCoice}!`)
        } else {
            alert(`победил компьютер! выбор компьютера ${pcCoice}!`)
        }
    }

    rockPaperScissors();
}


//2Игра арифметика, заработала!
function twoGame() {
    const arithmetic = ['+', '-', '*', '/'];

    const number1 = Math.floor(Math.random() * 11); Math.floor(Math.random() * 101);
    const number2 = Math.floor(Math.random() * 11);
    const generatesArithmetic = Math.floor(Math.random() * arithmetic.length);
    const generates = arithmetic[generatesArithmetic];

    function taskArithmetic() {
        return (`${number1} ${generates} ${number2}`);
    }
    alert(taskArithmetic());
    const result = eval(taskArithmetic());


    const userAnswer = prompt("Посчитай и запиши ответ");
    if (isNaN(userAnswer)) {
        alert('Ошибка ввода!Введи число');
    } else if (userAnswer == result) {
        alert('Верный ответ!');
    } else {
        alert('Не верно.Попробуй еще!');
    }

    taskArithmetic();
}



//3 игра перевни текст

function textGame() {

    const userText = prompt('Введи текст и прочитай его наоборот');

    function reverseText(str) {
        let newText = "";

        for (let i = str.length - 1; i >= 0; i--) {
            newText += str[i];
        }
        return newText;
    }

    alert(reverseText(userText));
}


