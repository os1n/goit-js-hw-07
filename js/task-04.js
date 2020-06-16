console.log("HW 07 Task 04");

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

{
  /* <div id="counter">
      <button type="button" data-action="decrement">-1</button>
      <span id="value">0</span>
      <button type="button" data-action="increment">+1</button>
    </div> */
}

const counterVals = {
  counterRef: document.querySelector("#counter"),
  counterValueRef: document.querySelector("#value"),
};

let counterValue = 0;

counterVals.counterRef.addEventListener("click", (event) => {
  console.log("counter =", counterValue);
  if (event.target.dataset.action === "increment") {
    counterValue = increment(counterValue);
    counterVals.counterValueRef.textContent = counterValue;
  }
  if (event.target.dataset.action === "decrement") {
    counterValue = decrement(counterValue);
    counterVals.counterValueRef.textContent = counterValue;
  }
});

function increment(counter) {
  return (counter += 1);
}

const decrement = function (counter) {
  return (counter -= 1);
};
