let input = document.getElementById("input");
let search = document.getElementById("search");
let container = document.querySelector(".container");

search.addEventListener("click", (event) => {
  event.preventDefault();
  let ou = document.createElement("p");
  ou.className = "output";

  ou.innerHTML = input.value;
  console.log(ou);
  container.append(ou);
});
