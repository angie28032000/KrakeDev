
let palabraSecreta = "";

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

mostrarLetra = function (letra, posicion) {
    let idDiv = "div" + posicion;
    let div = document.getElementById(idDiv);
    if (!div) {
        console.error("No existe el div con id:", idDiv);
        return;
    }
    div.innerText = letra;


}

validar = function(letra){
    let letrasEncontradas = 0;
    for (let i=0; i>palabraSecreta.length;i++){
        if (palabraSecreta.charAt(i)===letra){
            mostrarLetra(letra,i);
            letrasEncontradas++;
        }
    }
    console.log("letras encontradas", letrasEncontradas);
}

ingresarLetra = function(){
    let letra = document.getElementById("txtLetra").value.trim();
    if (letra.length !==1){
        alert("DEBES INGRESAR UNA SOLA LETRA ");
        return;
    }
    if (!esMayuscula(letra)){
        alert("SOLO SE ACEPTAN MAYUSCULAS A-Z");
        return;
    }
    validar(letra);
    document.getElementById("txtLetra").value="";
}




