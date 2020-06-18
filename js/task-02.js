console.log("HW07 T02");
console.log(
  " Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement()."
);

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listRef = document.querySelector("#ingredients");

//console.log(listRef);

// listRef.append(
//   ...ingredients.map((item) => {
//     const li = document.createElement("li");
//     li.textContent = item;
//     return li;
//   })
// );

const insertItems = function (list) {
  const newList = [];
  list.forEach((element) => {
    // console.log(element);
    const li = document.createElement("li");
    li.textContent = element;
    newList.push(li);
  });
  listRef.append(...newList);
};
insertItems(ingredients);
