saludar = function(){
let nombre=recuperarTexto("txtNombre");
let apellido=recuperarTexto("txtApellido");
let edad=recuperarInt("txtEdad");
let estatura=recuperarFloat("txtEstatura");
}

recuperarTexto = function(idComponente){
   let componete=document.getElementById(idComponente);
   let valorIngresado=componete.value;
    return valorIngresado;
}
recuperarInt = function(idComponente){
    let valorCaja =document.getElementById(idComponente).value;
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}
recuperarFloat = function(idComponente){
    let valorCaja =document.getElementById(idComponente).value;
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}

