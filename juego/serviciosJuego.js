obtenerAleatorio = function(){
  let aleatorio = Math.random();
  aleatorio=aleatorio * 3 + 1;
  aleatorio=Math.trunc(aleatorio);
  console.log(aleatorio)
}
generarElemento = function(){
    let numero = obtenerAleatorio();
    if (numero ===1) return "piedra";
    if (numero ===2) return "papel";
    return "tijera";

}
determinarGanador=function(eleccionJugador1, eleccionJugador2) {
    if (eleccionJugador1 === eleccionJugador2) {
        return 0; 
    }

    if (
        (eleccionJugador1 === "piedra" && eleccionJugador2 === "tijera") ||
        (eleccionJugador1 === "papel" && eleccionJugador2 === "piedra") ||
        (eleccionJugador1 === "tijera" && eleccionJugador2 === "papel")
    ) {
        return 1; 
    }

    return 2; 
}

generarRuta=function (nombre){
    return "./imagenes/" + nombre + ".png";

}
