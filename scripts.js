const container = document.querySelector(".container");
const btnEl = document.querySelector("button");

function randoColor() {
  const hexCharacters = "ABCDEF0123456789";
  let randoColor = "#";

  for (let i = 0; i < 6; i++) {
    let randoNum = Math.floor(Math.random() * 16);
    randoColor += hexCharacters.split("")[randoNum];
  }
  return randoColor;
}

function buildBoard(num = 16) {
  container.textContent = "";

  for (let i = 0; i < num * num; i++) {
    const colorSq = randoColor();
    const divEl = document.createElement("div");
    divEl.classList.add("square");

    divEl.style.height = 960 / num + "px";
    divEl.style.flexBasis = (1 / num) * 100 + "%";
    divEl.style.opacity = 0.01;
    divEl.style.backgroundColor = colorSq;
    divEl.style.border = `1px solid ${colorSq}`;

    container.appendChild(divEl);
  }
}

btnEl.addEventListener("click", () => {
  let num = Number(
    prompt(
      "Enter how many squares you want the etch a scketch to have beteen 1 - 100",
    ),
  );

  while (num > 100 || num < 1 || !Number.isInteger(num)) {
    num = Number(
      prompt(
        "Enter how many squares you want the etch a scketch to have beteen 1 - 100",
      ),
    );
  }

  buildBoard(num);
});

container.addEventListener("mouseover", (e) => {
  if (!e.target.classList.contains("square")) return;
  e.target.style.opacity = 0.1 + Number(e.target.style.opacity);
});

buildBoard();
