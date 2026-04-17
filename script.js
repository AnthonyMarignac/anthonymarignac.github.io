const menuButton = document.getElementById("projectsMenuBtn");
const dropdown = document.getElementById("projectsDropdown");
const yearNode = document.getElementById("year");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (menuButton && dropdown) {
  const setMenuState = (isOpen) => {
    menuButton.setAttribute("aria-expanded", String(isOpen));
    dropdown.hidden = !isOpen;
  };

  setMenuState(false);

  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    setMenuState(!expanded);
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".menu-group")) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
      menuButton.focus();
    }
  });
}
