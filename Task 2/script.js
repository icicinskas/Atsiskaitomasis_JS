/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const btnCounter = document.getElementById("btn__element");
let counter = 0;

btnCounter.addEventListener("click", function () {
  counter++;
  const counterValue = document.getElementById("btn__state");
  counterValue.innerText = counter;
  console.log(counter);
});
