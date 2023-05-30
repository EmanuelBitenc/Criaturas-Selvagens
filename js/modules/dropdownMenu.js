export default function dropdownMenu() {
  const dropdown = document.querySelector("[data-dropdown]");
  const dropdowns = document.querySelectorAll("[data-dropdown]");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  const activeClass = "ativo";

  if (dropdown && dropdownMenu) {
    dropdown.addEventListener("mouseenter", () => {
      activeDropdown(dropdownMenu);
    });
    dropdown.addEventListener("mouseleave", () => {
      dropdownMenu.classList.remove(activeClass);
      dropdown.classList.remove(activeClass);
    });

    dropdowns.forEach((menu) => {
      ["touchstart", "click"].forEach((userEvent) =>
        menu.addEventListener(userEvent, function (event) {
          event.preventDefault();
          activeDropdown(dropdownMenu);
        })
      );
    });
  }

  function activeDropdown(element) {
    dropdown.classList.toggle(activeClass);
    element.classList.toggle(activeClass);
  }
}
