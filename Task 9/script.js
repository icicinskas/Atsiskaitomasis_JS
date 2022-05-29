/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu. Tuomet, atspausdinkite du filmus,
kurių vienas duotų false, kitas true ir atspausdintų atitinkamus variantus. Pvz., 
"Avengers: Endgame" biudžetas viršyjo 100 mln. USD
"Mr. Nobody" biudžetas neviršyjo 100 mln. USD

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
    this.wasExpensive = function () {
      return this.budget > 100000000 ? true : false;
    };
  }
}

const movie1 = new Movie(
  "Avengers: Endgame",
  "Anthony Russo, Joe Russo",
  150000000
);
console.log(movie1);

const movie2 = new Movie("Mr. Nobody", "Jaco Van Dormael", 99000000);

console.log(`filmo ${movie1.title} biudžetas: ` + movie1.wasExpensive());
console.log(`filmo ${movie2.title} biudžetas: ` + movie2.wasExpensive());

// atvaizdavimas HTML
document.body.style.background = "#0080ff";
document.body.style.color = "#ccffff";
const main = document.createElement("main");
main.style.textAlign = "center";
const pageTitle = document.createElement("h1");
pageTitle.innerText = "Filmų sąrašas";
const div = document.createElement("div");

// Create table
const table = document.createElement("table");
table.style.lineHeight = "1.8em";

// Create table head

const thead = document.createElement("thead");
const theadTr = document.createElement("tr");
const tableHead1 = document.createElement("th");
tableHead1.style.width = "200px";
tableHead1.style.fontSize = "1.2em";
tableHead1.innerText = "Pavadinimas";
const tableHead2 = document.createElement("th");
tableHead2.style.width = "250px";
tableHead2.style.fontSize = "1.2em";
tableHead2.innerText = "Režisierius";
const tableHead3 = document.createElement("th");
tableHead3.style.width = "350px";
tableHead3.style.fontSize = "1.2em";
tableHead3.innerText = "Ar filmų biudžetas didesnis kaip 100mln";

// Create table body

const tbody = document.createElement("tbody");

// 1st row
const tbodyTr1 = document.createElement("tr");
tbodyTr1.style.fontSize = "1.2em";
tbodyTr1.style.textAlign = "left";
const inputTitle1 = document.createElement("td");
inputTitle1.innerText = `${movie1.title}`;
const inputDirector1 = document.createElement("td");
inputDirector1.innerText = `${movie1.director}`;
const inputBudget1 = document.createElement("td");
inputBudget1.style.textAlign = "center";
inputBudget1.innerText = movie1.wasExpensive();

// 2nd row
const tbodyTr2 = document.createElement("tr");
tbodyTr2.style.fontSize = "1.2em";
tbodyTr2.style.textAlign = "left";
const tableValue1 = document.createElement("td");
tableValue1.innerText = `${movie2.title}`;
const tableValue2 = document.createElement("td");
tableValue2.innerText = `${movie2.director}`;
const tableValue3 = document.createElement("td");
tableValue3.style.textAlign = "center";
tableValue3.innerText = movie2.wasExpensive();

// Appends
thead.append(theadTr);
tbody.append(tbodyTr1, tbodyTr2);
theadTr.append(tableHead1, tableHead2, tableHead3);
tbodyTr1.append(inputTitle1, inputDirector1, inputBudget1);
tbodyTr2.append(tableValue1, tableValue2, tableValue3);
table.append(thead, tbody);
div.append(table);
main.append(pageTitle, div);
document.body.append(main);
