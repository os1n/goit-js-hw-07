"use strict";

import users from "./users.js"; // eslint-disable-line

// Task description

// Напиши функции которые с помощью перебирающих методов массива (никаких for, splice и т. д.) выполняют следующие операции над массивом объектов пользователей из файла users.js.

console.log(`Task 01`);

// Task 1. Получить массив имен всех пользователей (поле name).

// users.forEach(num => console.log(num)); // just to see all the objects

// const usersNamesArray = users.map(user => user.name);
// console.log(usersNamesArray);

const getUserNames = (users) => {
  return users.map((user) => user.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony']

// Task 2. Получить массив объектов пользователей по цвету глаз (поле eyeColor).

console.log("Task 02");

const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// Task 3. Получить массив имен пользователей по полу (поле gender).

console.log("Task 03");

const getUsersWithGender = (users, gender) => {
  const genderedUsers = users.filter((user) => user.gender === gender);
  return genderedUsers.map((user) => user.name);
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// Task 4. Получить массив только неактивных пользователей (поле isActive).

console.log("Task 04");

const getInactiveUsers = (users) => {
  return users.filter((user) => user.isActive != true);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// Task 5. Получить пользоваля (не массив) по email (поле email, он уникальный).

console.log("Task 05");

const getUserWithEmail = (users, email) => {
  return users.filter((user) => user.email === email)[0];
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// Task 6. Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

console.log("Task 06");

const getUsersWithAge = (users, min, max) => {
  return users.filter((user) => user.age > min && user.age < max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// Task 7.

//Получить общую сумму баланса (поле balance) всех пользователей.

console.log("Task 07");

const calculateTotalBalance = (users) => {
  return users.reduce((acc, user) => acc + user.age, 0);
};

console.log(calculateTotalBalance(users)); // 20916

// Task 8.

//Массив имен всех пользователей у которых есть друг с указанным именем.

console.log("Task 08");

const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => user.friends.includes(friendName));
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// Task 9.

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

console.log("Task 09. sort by friends q-ty");
console.log(users);

const getNamesSortedByFriendsCount = (users) => {
  const usersSorted = users.slice();
  usersSorted.sort(function (a, b) {
    var nameA = a.friends.length; // ignore upper and lowercase
    var nameB = b.friends.length; // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
  return usersSorted.map((user) => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
console.log(`Has to be:`, [
  "Moore Hensley",
  "Sharlene Bush",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony",
  "Ross Vazquez",
]);

// Task 10

console.log(
  "Task 09 Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке"
);

const getSortedUniqueSkills = (users) => {
  let allSkills = [];
  const skills = users
    //.map((user) => user.skills)
    .map((user, idx, arr) => {
      if (user.skills !== null) return user.skills;
    })
    .forEach((element) => {
      //arr = arr.concat(element);
      allSkills = allSkills.concat(element);
    });

  return allSkills
    .filter((item, index, arr) => index === arr.indexOf(item))
    .sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      // names must be equal
      return 0;
    });
};

console.log(getSortedUniqueSkills(users));
console.log(`Has to be:`, [
  "adipisicing",
  "amet",
  "anim",
  "commodo",
  "culpa",
  "elit",
  "ex",
  "ipsum",
  "irure",
  "laborum",
  "lorem",
  "mollit",
  "non",
  "nostrud",
  "nulla",
  "proident",
  "tempor",
  "velit",
  "veniam",
]);
