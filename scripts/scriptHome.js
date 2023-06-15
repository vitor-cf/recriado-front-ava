const rotacionaIcone = () => {
    let icone = document.querySelector('.icone-seta');
    let containerFiltro = document.querySelector('.container-checkbox');
    icone.classList.toggle('rotacionado');
    containerFiltro.classList.toggle('container-visivel');
}
