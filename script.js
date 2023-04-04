const activeClass = "ativo";

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