//Задание 1
const h1Element = document.querySelector('#myH1');
const toggleButton = document.querySelector('#toggleButton');
toggleButton.addEventListener('click', function () {
    if (h1Element.style.display === 'none') {
        h1Element.style.display = 'block';
    } else {
        h1Element.style.display = 'none';
    }
});

//Задание 2
const paragraphElement = document.querySelector('#myParagraph');
const changeColorButton = document.querySelector('#changeColorButton');
changeColorButton.addEventListener('click', function () {
    paragraphElement.style.color = 'blue';
});

//Задание 3
const hElement = document.querySelector('#myH');
const changeTextButton = document.querySelector('#changeTextButton');
changeTextButton.addEventListener('click', function () {
    hElement.textContent = 'Привет, мир!';
});

//Задание 4
const descriptionElements = document.querySelectorAll('.description');
descriptionElements.forEach(function (element) {
    element.textContent = 'Измененный текст';
});

//Задание 5
const Elements = document.querySelectorAll('.description');

Elements.forEach(function (element) {
    element.textContent = 'Новый текст';
});


//Задание 6
const addParagraphButton = document.querySelector('#addParagraphButton');

addParagraphButton.addEventListener('click', function () {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац';
    document.body.appendChild(newParagraph);
});

//Задание 7
const removeParagraphButton = document.querySelector('#removeParagraphButton');

removeParagraphButton.addEventListener('click', function () {
    const firstDescriptionElement = document.querySelector('.description2');
    if (firstDescriptionElement) {
        firstDescriptionElement.remove();
    } else {
        alert('Элемент с классом description не найден.');
    }
});