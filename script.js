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