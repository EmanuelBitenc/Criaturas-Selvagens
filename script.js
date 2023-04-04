const activeClass = "ativo";

function scrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

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
scrollSuave();
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
function tabActive() {
  const animaisL = document.querySelectorAll(".js-animaisL li");
  const animaisD = document.querySelectorAll(".js-animaisD Section");
  animaisD[0].classList.add(activeClass);

  if (animaisL.length && animaisD) {
    function activeTab(index) {
      animaisD.forEach((section) => {
        section.classList.remove(activeClass);
      });
      animaisD[index].classList.add(activeClass);
    }
    animaisL.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
tabActive();

function dtActive() {
  const faqdt = document.querySelectorAll("dt");
  const faqdd = document.querySelectorAll("dd");

  if (faqdt.length && faqdd) {
    faqdd[0].classList.add(activeClass);
    faqdt.forEach((dt, index) => {
      dt.addEventListener("click", () => activeDt(index));
    });

    function activeDt(index) {
      faqdd[index].classList.toggle(activeClass);
    }
  }
}
dtActive();
