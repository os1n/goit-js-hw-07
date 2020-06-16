console.log("HW 07 Task 07");

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

//textRef.classList.add('text-size');

console.dir(inputRef);
console.dir(textRef);

inputRef.addEventListener("input", () => {
  //console.log(inputRef.value);
  textRef.style.fontSize = `${inputRef.value}px`;
  console.dir(`font-size: ${textRef.style.fontSize}`);
});
