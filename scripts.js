const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  const divEl = document.createElement("div");
  divEl.classList.add("square");
  container.appendChild(divEl);
}
