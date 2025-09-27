
let puntosUsuario = 0;
let puntosComputador = 0;

jugar=function(seleccionado) {
    
    let eleccionComputador = generarElemento();

    
    let rutaComputador = generarRuta(eleccionComputador);
    document.getElementById("imgComputador").src = rutaComputador;

    
    let resultado = determinarGanador(seleccionado, eleccionComputador);

    
    let mensaje = "";
    if (resultado === 0) {
        mensaje = "EMPATE ";
    } else if (resultado === 1) {
        mensaje = "¡GANASTE LA PARTIDA! ";
        puntosUsuario++;
    } else {
        mensaje = "PERDISTE LA PARTIDA ";
        puntosComputador++;
    }

   
    document.getElementById("resultado").textContent = mensaje;
    document.getElementById("puntosUsuario").textContent = puntosUsuario;
    document.getElementById("puntosComputador").textContent = puntosComputador;

 
    if (puntosUsuario === 5) {
        document.getElementById("resultado").textContent = " HAS GANADO EL JUEGO ";
        deshabilitarJuego();
    } else if (puntosComputador === 5) {
        document.getElementById("resultado").textContent = " EL COMPUTADOR TE HA VENCIDO ";
        deshabilitarJuego();
    }
}


deshabilitarJuego=function() {
    document.querySelectorAll(".opciones img").forEach(img => {
        img.style.pointerEvents = "none"; 
        img.style.opacity = "0.5";        
    });
}


limpiar = function() {
    puntosUsuario = 0;
    puntosComputador = 0;

    document.getElementById("puntosUsuario").textContent = puntosUsuario;
    document.getElementById("puntosComputador").textContent = puntosComputador;

    document.getElementById("resultado").textContent = "Elige una opción para comenzar";
    document.getElementById("imgComputador").src = "./imagenes/interrogacion.png";

   
    document.querySelectorAll(".opciones img").forEach(img => {
        img.style.pointerEvents = "auto";
        img.style.opacity = "1";
    });
}