let palabraSecreta = "";
let intentos = 0;       
let coincidencias = 0;  
let errores = 0;        


esMayuscula = function (caracter) {
    if (caracter.length != 1) {
        return false;
    }
    let codigo = caracter.charCodeAt(0);
    return codigo >= 65 && codigo <= 90;
}


guardarPalabra=function() {
    let palabra = document.getElementById("txtPassword").value.trim();

    if (palabra.length !== 5) {
        alert("La palabra debe tener exactamente 5 caracteres.");
        return;
    }

    for (let i = 0; i < palabra.length; i++) {
        if (!esMayuscula(palabra.charAt(i))) {
            alert("La palabra debe contener solo letras MAYUSCULAS (A-Z).");
            return;
        }
    }

    palabraSecreta = palabra;
    coincidencias = 0;
    errores = 0;
    intentos = 0;

    
    for (let i = 0; i < 5; i++) {
        document.getElementById("div" + i).innerText = "";
    }

    
    document.getElementById("ahorcadoImagen").src = "";

    console.log(" Palabra guardada correctamente:", palabraSecreta);
}


mostrarLetra = function (letra, posicion) {
    let idDiv = "div" + posicion;
    let div = document.getElementById(idDiv);
    if (!div) {
        console.error(" No existe el div con id:", idDiv);
        return;
    }
    div.innerText = letra;
}


validar = function (letra) {
    let letrasEncontradas = 0;

    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta.charAt(i) === letra) {
            mostrarLetra(letra, i);
            letrasEncontradas++;
        }
    }

    if (letrasEncontradas > 0) {
        coincidencias += letrasEncontradas;
    } else {
        errores++;
        mostrarAhorcado();
        console.log("La letra no esta en la palabra. Errores:", errores);
    }

    console.log(" Letras encontradas totales:", coincidencias);
}

ingresarLetra = function () {
    let letra = document.getElementById("txtLetra").value.trim();

    if (letra.length !== 1) {
        alert(" Debes ingresar una sola letra.");
        return;
    }

    if (!esMayuscula(letra)) {
        alert(" SOLO SE ACEPTAN MAYUSCULAS (A-Z).");
        return;
    }

    intentos++;
    validar(letra);

   
    if (coincidencias === palabraSecreta.length) {
        document.getElementById("ahorcadoImagen").src = "./ganador.gif";
        console.log(" ¡HAS GANADO!");
    } 
    
    else if (intentos >= 10) {
        document.getElementById("ahorcadoImagen").src = "./gameOver.gif";
        console.log(" ¡HAS PERDIDO!");
    }

    document.getElementById("txtLetra").value = "";
}


mostrarAhorcado = function () {
    let img = document.getElementById("ahorcadoImagen");
    img.src = "./ahorcado" + errores + ".jpg"; 
}


