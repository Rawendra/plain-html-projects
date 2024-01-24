const panels = document.querySelectorAll(".panel");
let activePanelIndex = 0;
panels.forEach((panel, index) => {
  panel.addEventListener("click", () => {
    panels[activePanelIndex]?.classList.remove("active");
    activePanelIndex = index;
    panel.classList.add("active");
  });
});
