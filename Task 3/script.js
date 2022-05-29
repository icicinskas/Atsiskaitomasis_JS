/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const search = document.getElementById("btn");

search.addEventListener("click", function () {
  fetch(ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.map((x) => {
        const output = document.getElementById("output");
        const h3 = document.createElement("h3");
        h3.innerText = x.login;
        const img = document.createElement("img");
        img.src = x.avatar_url;
        img.width = "300";
        const div = document.createElement("div");
        div.classList.add = "box";
        div.append(h3, img);
        output.append(div);

        const p = document.getElementById("message");
        p.style.display = "none";
      });
    })
    .catch((error) => console.log(error));
});
