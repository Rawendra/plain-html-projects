const cardPanel = document.querySelector(".container-card-panel");
const lastCardIndex = parseInt(cardPanel?.children?.length) - 1;
const up = document.getElementById("up");
const down = document.getElementById("down");
let current = -1;

const handleUpNavigation = () => {
  if (current === lastCardIndex) {
    return;
  }
  current++;

  cardPanel?.children[current].scrollIntoView({ behavior: "smooth" });
};
const handleDownNavigation = () => {
  if (current === -1) {
    return;
  }
  current--;

  cardPanel?.children[current].scrollIntoView({ behavior: "smooth" });
};

up.addEventListener("click", () => {
  handleUpNavigation();
});
down.addEventListener("click", () => {
  handleDownNavigation();
});

console.log(cardPanel?.children, cardPanel?.childNodes);
document.addEventListener("keyup", (event) => {
  event.preventDefault()
  console.log(event.key);
  if (event.key === "ArrowUp") {
    handleDownNavigation();
  } else if (event.key === "ArrowDown") {
    handleUpNavigation();
  }
});
