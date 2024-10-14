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


const arr = ['камень', 'ножницы', 'бумага'];

function ockPaperScissors() {

    const useChoice = prompt('Сделай выбор! Камень,ножницы или бумага?');

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