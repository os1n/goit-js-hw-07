console.log("HW 07 Task 06");

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />

//     Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//     Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

const inputRef = document.querySelector("#validation-input");

// console.dir(inputRef);
// console.dir(dataLengthRef);
//
// ==-- Add validation class
inputRef.classList.add("validation-input");

inputRef.addEventListener("change", () => {
  //console.log(inputRef.value.length);
  //console.log("Attributes =", inputRef.classList);

  // ==-- check if 0
  if (inputRef.value.length === 0) {
    inputRef.classList.remove("invalid", "valid"); // clear validity
  } else {
    inputRef.classList.add("invalid"); // invalid then check for validity
  }

  if (inputRef.value.length === parseInt(inputRef.attributes[3].value)) {
    // console.log("mark green");
    inputRef.classList.replace("invalid", "valid");
  }
});
