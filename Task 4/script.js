/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

fetch(ENDPOINT)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    data.forEach((x) => {
      const output = document.getElementById("output");
      const h3 = document.createElement("h3");
      h3.innerText = x.brand;
      const ul = document.createElement("ul");
      const modelsArray = x.models;
      for (var i = 0; i < modelsArray.length; i++) {
        const li = document.createElement("li");
        li.innerText += modelsArray[i];
        ul.append(li);
      }

      const div = document.createElement("div");
      div.append(ul);
      const section = document.createElement("section");
      section.append(h3, div);
      output.append(section);
    });
  })
  .catch((e) => console.log(e));
