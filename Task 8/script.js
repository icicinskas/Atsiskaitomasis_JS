/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.load = function () {
    this.a = +prompt("Įveskite pirmą skaičių", 0);
    this.b = +prompt("Įveskite antrą skaičių", 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.sub = function () {
    return this.a - this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };

  this.div = function () {
    return this.a / this.b;
  };
}

let calculator = new Calculator();
calculator.load();

alert("Sum = " + calculator.sum());
alert("Sub = " + calculator.sub());
alert("Mul = " + calculator.mul());
alert("Div = " + calculator.div());

console.log("Sum = " + calculator.sum());
console.log("Sub = " + calculator.sub());
console.log("Mul = " + calculator.mul());
console.log("Div = " + calculator.div());
