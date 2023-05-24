export default function tooltipL() {
  const tooltip = document.querySelectorAll('[data-tooltip="linkedin"]');
  tooltip.forEach((element) => {
    element.addEventListener("mouseover", onMouseOver);
  });

  const link = document.querySelector(".perfil");
  const X = link.offsetLeft;
  const Y = link.offsetTop;

  function onMouseOver() {
    const tooltipBox = criarTooltip(this);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
    this.addEventListener("mouseleave", onMouseLeaveF);

    tooltipBox.style.left = link.offsetLeft + 10 + "px";
    tooltipBox.style.top = link.offsetTop + 40 + "px";

    function onMouseLeaveF() {
      tooltipBox.remove();
    }
  }

  const onMouseLeave = {
    tooltipBox: "",
    element: "",
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  const onMouseMove = {
    handleEvent(event) {},
  };

  function criarTooltip(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltipL");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
