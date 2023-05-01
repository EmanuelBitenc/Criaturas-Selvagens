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
