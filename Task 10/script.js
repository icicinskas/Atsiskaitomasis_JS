/* ------------------------------ TASK 9 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funcijos
-------------------------------------------------------------------------------------------- */
import {
  one,
  two,
  three,
  four,
  five,
} from "../Task 10/modules/numbers/numbers.js";
console.log(one, two, three, four, five);

import { composition } from "./modules/math/composition.js";

import { division } from "./modules/math/division.js";

import { multiplication } from "./modules/math/multiplication.js";

import { substraction } from "./modules/math/substraction.js";

let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);

document.body.style.background = "cyan";

const main = document.createElement("main");
main.style.textAlign = "center";
main.style.marginTop = "50px";
const numbers = document.createElement("div");
const h1 = document.createElement("h1");
h1.style.marginBottom = "50px";
h1.innerText = `Rasirinktų skaičių seka: ${one}  ${two}  ${three}  ${four}  ${five}`;
numbers.append(h1);
const atsakymai = document.createElement("div");
const tableValue = document.createElement("ul");
tableValue.style.lineHeight = "2em";
tableValue.style.textAlign = "left";
tableValue.style.fontSize = "1.5em";
const compositions = document.createElement("li");
const aStyle = document.createElement("span");
aStyle.style.color = "red";
aStyle.style.fontWeight = "bold";
aStyle.style.fontSize = "1.1em";
aStyle.innerText = `${a}`;
compositions.innerText = `Pasirinktų kaičių suma: `;
compositions.append(aStyle);
const divisions = document.createElement("li");
const bStyle = document.createElement("span");
bStyle.style.color = "red";
bStyle.style.fontWeight = "bold";
bStyle.style.fontSize = "1.1em";
bStyle.innerText = `${b}`;
divisions.innerText = `Pasirinktų skaičių dalyba: `;
divisions.append(bStyle);
const multiplications = document.createElement("li");
const cStyleaStyle = document.createElement("span");
cStyleaStyle.style.color = "red";
cStyleaStyle.style.fontWeight = "bold";
cStyleaStyle.style.fontSize = "1.1em";
cStyleaStyle.innerText = `${c}`;
multiplications.innerText = `Pasirinktų skaičių daugyba: `;
multiplications.append(cStyleaStyle);
const substractions = document.createElement("li");
const dStyle = document.createElement("span");
dStyle.style.color = "red";
dStyle.style.fontWeight = "bold";
dStyle.style.fontSize = "1.1em";
dStyle.innerText = `${d}`;
substractions.innerText = `Pasirinktų skaičių skirtumas: `;
substractions.append(dStyle);
tableValue.append(compositions, divisions, multiplications, substractions);
atsakymai.append(tableValue);
main.append(numbers, atsakymai);
document.body.append(main);
