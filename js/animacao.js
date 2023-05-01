export default function dtActive() {
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
  export default function scrollAnimacao() {
    const sections = document.querySelectorAll("[data-anime='scroll']");
    const tamanho = window.innerHeight * 0.7;
  
    if (sections.length) {
      function animaScroll() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top - tamanho;
  
          if (sectionTop < 0) {
            section.classList.add("ativo");
          }
        });
      }
  
      animaScroll();
      // Acrescentando efeito no scroll
      window.addEventListener("scroll", animaScroll);
    }
  }

dtActive();
tabActive();
scrollSuave();
scrollAnimacao();