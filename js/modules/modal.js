export default function initModal() {
  const abrirM = document.querySelector('[data-modal="abrir"]');
  const fecharM = document.querySelector('[data-modal="fechar"]');
  const modal = document.querySelector('[data-modal="container"]');

  if (abrirM && fecharM && modal) {
    function toggleModal(event) {
      event.preventDefault();
      modal.classList.toggle("ativo");
    }

    function cliqueForaModal(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    abrirM.addEventListener("click", toggleModal);
    fecharM.addEventListener("click", toggleModal);
    modal.addEventListener("click", cliqueForaModal);
  }
}
