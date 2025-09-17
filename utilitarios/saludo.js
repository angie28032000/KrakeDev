saludar = function(){
let nombre;
let apellido;
nombre=recuperarTexto("txtNombre");
apellido=recuperarTexto("txtApellido");


}

recuperarTexto = function(idComponente){
    let componete;
    let valorIngresado;
    componete=document.getElementById(idComponente);
    valorIngresado=componete.value;
    return valorIngresado;
}


