/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atliks nurodytas užduotis
1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintini.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */

const users = [
  { id: "1", name: "John Smith", age: 20, hasDog: true },
  { id: "2", name: "Ann Smith", age: 24, hasDog: false },
  { id: "3", name: "Tom Jones", age: 31, hasDog: true },
  { id: "4", name: "Rose Peterson", age: 17, hasDog: false },
  { id: "5", name: "Alex John", age: 25, hasDog: true },
  { id: "6", name: "Ronald Jones", age: 63, hasDog: true },
  { id: "7", name: "Elton Smith", age: 16, hasDog: true },
  { id: "8", name: "Simon Peterson", age: 30, hasDog: false },
  { id: "9", name: "Daniel Cane", age: 51, hasDog: true },
];

console.log(users);

// Funkcija gražina tik vartotojus "users", kurie turi augintinį.

function backUsers() {
  document.body.style.background = "lightblue";
  document.body.style.textAlign = "center";
  const h2 = document.createElement("h2");
  h2.innerText = "Šie gerbiami piliečiai augina šunis";
  document.body.append(h2);

  const filterDogOwers = users.filter((users) => users.hasDog == true);
  for (let i = 0; i < filterDogOwers.length; i++) {
    const result = filterDogOwers[i].name;
    console.log(filterDogOwers[i].name);

    const h3 = document.createElement("h3");
    h3.innerText = result;
    document.body.append(h3);
  }
}

backUsers();

// Funkcija gražina naują masyvą tik su vartotojais "users", kurie yra pilnamečiai
const adults = [];

function backUsersArray() {
  const filterAdults = users.filter((users) => users.age >= 18);
  for (let i = 0; i < filterAdults.length; i++) {
    const newArray = adults.push(filterAdults[i].name);
    // console.log(filterAdults[i]);
  }
}

console.log(adults);
backUsersArray();
