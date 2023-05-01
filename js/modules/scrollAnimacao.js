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
