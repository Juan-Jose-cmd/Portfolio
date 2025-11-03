//Domcontent.... espera que cargue el dom
document.addEventListener('DOMContentLoaded', () => {
    
    // Elementos principales
    const header = document.querySelector('header');
    const claymore_1 = document.querySelector('.claymore_1');
    const claymore_2 = document.querySelector('.claymore_2');
    const textoClick = document.querySelector('header p');
    const sobreMiSection = document.getElementById('sobre-mi');
    const contactoSection = document.getElementById('contacto');
    const grimoriosSection = document.getElementById('grimorios');
    
    const btnContacto = document.querySelector('.btn-contacto');
    const volverHeaderBtn = document.getElementById('volver-header');
    const volverSobreMiBtn = document.getElementById('volver-sobre-mi');
    const volverHeaderDesdeContactoBtn = document.getElementById('volver-header-desde-contacto');
    const btnVerGrimorios = document.querySelector('.btn-ver-grimorios');

    
    let estadoActual = 'header';
    let enTransicion = false;

    
    function cambiarFondoBody(seccion) {
        const body = document.body;
        
        
        body.classList.remove('body-header', 'body-sobre-mi', 'body-contacto');
        
        
        switch(seccion) {
            case 'header':
                body.classList.add('body-header');
                break;
            case 'sobre-mi':
                body.classList.add('body-sobre-mi');
                break;
            case 'contacto':
                body.classList.add('body-contacto');
                break;
            case 'grimorios':
                body.classList.add('body-grimorios');
                break;
        }
    }

    
    function cambiarSeccion(seccionDestino) {
        if (enTransicion) return;
        
        enTransicion = true;
        const seccionActual = estadoActual;

        
        cambiarFondoBody(seccionDestino);

        
        switch(seccionActual) {
            case 'header':
                animacionSalidaHeader();
                break;
            case 'sobre-mi':
                animacionSalidaSobreMi();
                break;
            case 'contacto':
                animacionSalidaContacto();
                break;
            case 'grimorios':
                animacionSalidaGrimorios();
                break;
        }

        
        setTimeout(() => {
            
            ocultarSeccion(seccionActual);
            
            
            mostrarSeccion(seccionDestino);
            
            estadoActual = seccionDestino;
            enTransicion = false;
        }, 800);
    }

    
    function animacionSalidaHeader() {
        claymore_1.classList.add('salir');
        claymore_2.classList.add('salir');
        textoClick.classList.add('salir');
        
        const h1 = document.querySelector('header h1');
        h1.style.animation = 'desvanecer 0.8s ease-in-out forwards';
    }

    
    function animacionSalidaSobreMi() {
        sobreMiSection.classList.add('seccion-saliente');
    }

    function animacionSalidaGrimorios() {
        grimoriosSection.classList.add('seccion-saliente');
    }
    
    function animacionSalidaContacto() {
        contactoSection.classList.add('seccion-saliente');
    }

    
    function ocultarSeccion(seccion) {
        switch(seccion) {
            case 'header':
                header.classList.add('header-oculto');
                
                setTimeout(() => {
                    claymore_1.classList.remove('salir');
                    claymore_2.classList.remove('salir');
                    textoClick.classList.remove('salir');
                    const h1 = document.querySelector('header h1');
                    h1.style.animation = '';
                }, 100);
                break;
            case 'sobre-mi':
                sobreMiSection.classList.remove('activo');
                sobreMiSection.classList.remove('seccion-saliente');
                break;
            case 'contacto':
                contactoSection.classList.remove('activo');
                contactoSection.classList.remove('seccion-saliente');
                break;
            case 'grimorios':
                grimoriosSection.classList.remove('activo');
                grimoriosSection.classList.remove('seccion-saliente');
                break;
        }
    }

    
    function mostrarSeccion(seccion) {
        switch(seccion) {
            case 'header':
                header.classList.remove('header-oculto');
                break;
            case 'sobre-mi':
                sobreMiSection.classList.add('activo');
                sobreMiSection.classList.add('seccion-entrante');
                setTimeout(() => {
                    sobreMiSection.classList.remove('seccion-entrante');
                }, 800);
                break;
            case 'contacto':
                contactoSection.classList.add('activo');
                contactoSection.classList.add('seccion-entrante');
                setTimeout(() => {
                    contactoSection.classList.remove('seccion-entrante');
                }, 800);
                break;
            case 'grimorios':
                grimoriosSection.classList.add('activo');
                grimoriosSection.classList.add('seccion-entrante');
                setTimeout(() => {
                grimoriosSection.classList.remove('seccion-entrante');
                }, 800);
                break;
        }
    }

    
    header.addEventListener('click', () => {
        if (estadoActual === 'header' && !enTransicion) {
            cambiarSeccion('sobre-mi');
        }
    });

    btnContacto.addEventListener('click', () => {
        if (estadoActual === 'sobre-mi' && !enTransicion) {
            cambiarSeccion('contacto');
        }
    });

    
    if (volverHeaderBtn) {
        volverHeaderBtn.addEventListener('click', () => {
            if (estadoActual === 'sobre-mi' && !enTransicion) {
                cambiarSeccion('header');
            }
        });
    }

    if (volverSobreMiBtn) {
        volverSobreMiBtn.addEventListener('click', () => {
            if (estadoActual === 'contacto' && !enTransicion) {
                cambiarSeccion('sobre-mi');
            }
        });
    }

    if (volverHeaderDesdeContactoBtn) {
        volverHeaderDesdeContactoBtn.addEventListener('click', () => {
            if (estadoActual === 'contacto' && !enTransicion) {
                cambiarSeccion('header');
            }
        });
    }

    const volverSobreMiDesdeGrimoriosBtn = document.getElementById('volver-sobre-mi-desde-grimorios');
    const volverHeaderDesdeGrimoriosBtn = document.getElementById('volver-header-desde-grimorios');

    if (volverSobreMiDesdeGrimoriosBtn) {
        volverSobreMiDesdeGrimoriosBtn.addEventListener('click', () => {
            if (estadoActual === 'grimorios' && !enTransicion) {
                cambiarSeccion('sobre-mi');
            }
        });
    }

    if (volverHeaderDesdeGrimoriosBtn) {
        volverHeaderDesdeGrimoriosBtn.addEventListener('click', () => {
            if (estadoActual === 'grimorios' && !enTransicion) {
                cambiarSeccion('header');
            }
        });
    }

    btnVerGrimorios.addEventListener('click', () => {
        if (estadoActual === 'sobre-mi' && !enTransicion) {
            cambiarSeccion('grimorios');
        }
    });

    
    cambiarFondoBody('header');


    function manejarEnvioFormulario(evento) {
        evento.preventDefault();
        
        const formData = new FormData(evento.target);
        const botonEnviar = evento.target.querySelector('.btn-enviar');
        const textoOriginal = botonEnviar.textContent;
        
        botonEnviar.textContent = 'Enviando al Oráculo...';
        botonEnviar.disabled = true;
        
        fetch(evento.target.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert('¡Mensaje enviado con éxito! Te contactaré pronto.');
                evento.target.reset();
            } else {
                throw new Error('Error en el envío');
            }
        })
        .catch(error => {
            alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
            console.error('Error:', error);
        })
        .finally(() => {
            botonEnviar.textContent = textoOriginal;
            botonEnviar.disabled = false;
        });
    }

    const formularioContacto = document.getElementById('form-contacto');
    if (formularioContacto) {
        formularioContacto.addEventListener('submit', manejarEnvioFormulario);
    }
    
    const enlacesRedes = document.querySelectorAll('.red-social');
    enlacesRedes.forEach((enlace, index) => {
        switch(index) {
            case 0:
                enlace.href = 'https://github.com/Juan-Jose-cmd';
                break;
            case 1:
                enlace.href = 'https://www.linkedin.com/in/juan-jos%C3%A9-pereyra-44aabb300/';
                break;
            case 2:
                enlace.href = 'https://wa.me/3413112245';
                break;
            case 3:
                enlace.href = 'mailto:juanjopereyra0@gmail.com';
                break;
        }
    });
});
