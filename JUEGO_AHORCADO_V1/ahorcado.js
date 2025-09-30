
let palabraSecreta="";

esMayuscula = function (caracter) {
    if (caracter.length != 1) {
        return false;
    }
    let codigo = caracter.charCodeAt(0);
    return codigo >= 65 && codigo <= 90;

}

function guardarPalabra() {
    
    let palabra = document.getElementById("txtPassword").value.trim();
    if (palabra.length !== 5) {
        alert("La palabra debe tener exactamente 5 caracteres.");
        return;
    }

    for (let i = 0; i < palabra.length; i++) {
        if (!esMayuscula(palabra.charAt(i))) {
            alert(" La palabra debe contener solo letras MAYUSCULAS (A-Z).");
            return;
        }
    }

    palabraSecreta = palabra;
    console.log("Palabra guardada correctamente:", palabraSecreta);
}

mostrarLetra = function(letra,posicion){
    let idDiv = "div" + posicion;
    let div = document.getElementById(idDiv);
    if(!div){
        console.error("No existe el div con id:",idDiv);
        return;
    }
    div.innerText=letra;

    

}



