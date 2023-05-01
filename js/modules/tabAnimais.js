export default function tabActive() {
  const activeClass = "ativo";
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  tabContent[0].classList.add(activeClass);
  if (tabMenu.length && tabContent) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        console.log("foi");
        section.classList.remove(activeClass);
      });
      tabContent[index].classList.add(
        activeClass,
        tabContent[index].dataset.anime
      );
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
