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
//const inputLength = document.querySelector('button[data-length=');

// console.dir(inputRef);
// console.dir(dataLengthRef);
//
// ==-- Add validation class

inputRef.addEventListener("change", () => {
  //console.log(inputRef.value.length);
  //console.log("Attributes =", inputRef.classList);

  inputRef.classList.add("validation-input", "valid", "invalid"); // invalid by default

  //console.log([...inputRef.attributes]);
  const inputLentgh = [...inputRef.attributes].find(
    (attribute) => attribute.name === "data-length"
  ).value;
  //console.log(inputLentgh);
  
  if (inputRef.value.length === parseInt(inputLentgh)) {
    inputRef.classList.replace("invalid", "valid"); // invalid replace with valid
  } else {
    inputRef.classList.replace("valid", "invalid");
  }
});


