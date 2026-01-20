const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  const divEl = document.createElement("div");
  divEl.classList.add("square");
  container.appendChild(divEl);
}

container.addEventListener("mouseover", (e) => {
  console.log(e.target.classList.add("draw"));
});
