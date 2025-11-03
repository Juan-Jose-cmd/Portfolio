//Domcontent.... espera que cargue el dom
document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('header');
    const claymore_1 = document.querySelector('.claymore_1');
    const claymore_2 = document.querySelector('.claymore_2');
    const textoClick = document.querySelector('header p');
    const sobreMiSection = document.getElementById('sobre-mi');
    const btnContacto = document.querySelector('.btn-contacto');

    let clickRealizado = false;

    function ejecutarAnimacionSalida(){

        if (clickRealizado) return;

        clickRealizado = true;

        claymore_1.classList.add('salir');
        claymore_2.classList.add('salir');
        textoClick.classList.add('salir');

        setTimeout(() => {
            header.classList.add('header-oculto');
            sobreMiSection.classList.add('aparecer-sobre-mi');
        }, 1800);
    }

    header.addEventListener('click', ejecutarAnimacionSalida);
});
