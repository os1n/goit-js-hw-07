console.log("HW 07 Task 05");

console.log(
  "Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка незнакомец."
);

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputRef = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

inputRef.addEventListener("input", () => {
  // console.dir(inputRef);
  // console.log(inputRef.value);
  nameOutput.textContent = inputRef.value;
  if (inputRef.value === "") {
    nameOutput.textContent = "Незнакомец";
    //console.log('Незнакомец');
  }
});
