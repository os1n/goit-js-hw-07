// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

//     Имеет случайный rgb цвет фона
//     Размеры самого первого div - 30px на 30px
//     Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px

// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

console.log("HW 07 Task 08");
console.log("! UNDER CONSTRUCTION !");

const vars = {
  controlsRef: document.querySelector("#controls"),
  inputRef: document.querySelector("input"),
  renderBtnRef: document.querySelector('button[data-action="render"'),
  destroyBtnRef: document.querySelector('button[data-action="destroy"'),
  amount: 10,
};

//const controlsRef = document.querySelector('#controls');

console.dir(vars.controlsRef);
console.dir(vars.inputRef);
console.log(vars.destroyBtnRef);

vars.renderBtnRef.addEventListener("click", createBoxes);
vars.destroyBtnRef.addEventListener("click", destroyBoxes);
vars.inputRef.addEventListener("input", inputHandler());

console.log(vars.controlsRef);

function inputHandler(event) {
  console.log(vars.amount);
}

function createBoxes(event) {
  vars.amount = vars.inputRef.input;
  console.dir(vars.inputRef.value);
}
// которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

function destroyBoxes(event) {
  console.log(event);
} // очищает div#boxes.
