/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis
1. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..]
2. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
-------------------------------------------------------------------------- */

const users = [
  { id: "1", name: "John Smith", age: 20 },
  { id: "2", name: "Ann Smith", age: 24 },
  { id: "3", name: "Tom Jones", age: 31 },
  { id: "4", name: "Rose Peterson", age: 17 },
  { id: "5", name: "Alex John", age: 25 },
  { id: "6", name: "Ronald Jones", age: 63 },
  { id: "7", name: "Elton Smith", age: 16 },
  { id: "8", name: "Simon Peterson", age: 30 },
  { id: "9", name: "Daniel Cane", age: 51 },
];

// Funkcija gražina tik masyvą su vartotojais "users".

function getUsersNames() {
  function newMasive(key) {
    const newUsers = [];
    for (let i = 0; i < key.length; i++) newUsers.push(key[i].name);
    return newUsers;
  }

  const result = newMasive(users, "name");
  console.log(result);
}

getUsersNames();

// Funkcija gražina visų vartotojų "users" amžiaus visurkį kaip skaičių

function getUserAverageAge() {
  function newArray(key) {
    const usersAge = [];
    for (let i = 0; i < key.length; i++) usersAge.push(key[i].age);
    return usersAge;
  }

  const results = newArray(users, "age");
  const average = (results) => results.reduce((a, b) => a + b) / results.length;
  console.log(average(results).toFixed(0));

  document.body.style.background = "lightblue";
  document.body.style.textAlign = "center";
  const h2 = document.createElement("h2");

  h2.innerText =
    "Visų masyvo vartotojų amžiaus visurkis yra " +
    average(results).toFixed(0) +
    " metai";

  document.body.append(h2);
}

getUserAverageAge();
