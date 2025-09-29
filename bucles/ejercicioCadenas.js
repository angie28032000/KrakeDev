ejecutarPrueba1 = function () {
    let mensaje;
    let cadenaNormal;
    mensaje = recuperarTexto("txtCadena");
    cadenaNormal=recorrerCadena(mensaje);
    mostrarTexto("lblResultado", cadenaNormal);
}


recorrerCadena = function (cadena) {
    let resultado = "";

    for (let posicion = 0; posicion < cadena.length; posicion++) {
        let caracter = cadena.charAt(posicion);
        console.log("caracter " + caracter + " posicion " + posicion);
        resultado += caracter; 
    }

    return resultado; 
}



invertirCadena = function (cadena) {
    let resultado = "";  

   
    for (let posicion = cadena.length - 1; posicion >= 0; posicion--) {
        let letra = cadena.charAt(posicion);
        resultado = resultado + letra; 
    }

    return resultado;
}

ejecutarPrueba2 = function () {
    let mensaje;
    let cadenaInvertida;

    mensaje = recuperarTexto("txtCadena");        
    cadenaInvertida = invertirCadena(mensaje);   
    mostrarTexto("lblResultado", cadenaInvertida); 
}