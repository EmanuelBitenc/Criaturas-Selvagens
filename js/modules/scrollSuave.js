export default function scrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-anime="suave"] a[href^="#"]'
  );

  function scroll(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  linksInternos.forEach((link) => {
    link.addEventListener("click", scroll);
  });
}

//Gerado pela IA
/*
function rolagem() {
  const links = document.querySelectorAll("nav a");

  for (let link of links) {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const href = link.getAttribute("href");
      const targetElement = document.querySelector(href);

      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  }
}
rolagem();
**/
