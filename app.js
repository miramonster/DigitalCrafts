const dishesList = document.getElementById("dishesList");
const startersButton = document.getElementById("startersButton");
const entreesButton = document.getElementById("entreesButton");
const dessertsButton = document.getElementById("dessertsButton");
const fullMenuButton = document.getElementById("fullMenuButton");

let starters = dishes.filter((dish) => dish.course === "Starters");
let entrees = dishes.filter((dish) => dish.course === "Entrees");
let desserts = dishes.filter((dish) => dish.course === "Desserts");

const dishList = dishes.map(function (dish) {
  return `<li>
    <h3>${dish.title}</h3>
    <p>${dish.description}</p>
    <p>${dish.price}</p>
    <img src="${dish.imgURL}" width="30">
    </li>`;
});

dishesList.innerHTML = dishList.join(" ");

const starterlist = starters.map(function (starter) {
  return `<li>
      <h3>${starter.title}</h3>
      <p>${starter.description}</p>
      <p>${starter.price}</p>
      <img src="${starter.imgURL}" width="30">
      </li>`;
});

startersButton.addEventListener("click", function () {
  dishesList.innerHTML = starterlist.join(" ");
});

const entreeslist = entrees.map(function (entrees) {
  return `<li>
        <h3>${entrees.title}</h3>
        <p>${entrees.description}</p>
        <p>${entrees.price}</p>
        <img src="${entrees.imgURL}" width="30">
        </li>`;
});

entreesButton.addEventListener("click", function () {
  dishesList.innerHTML = entreeslist.join(" ");
});

const dessertslist = desserts.map(function (dessert) {
  return `<li>
        <h3>${dessert.title}</h3>
        <p>${dessert.description}</p>
        <p>${dessert.price}</p>
        <img src="${dessert.imgURL}" width="30">
        </li>`;
});

dessertsButton.addEventListener("click", function () {
  dishesList.innerHTML = dessertslist.join(" ");
});