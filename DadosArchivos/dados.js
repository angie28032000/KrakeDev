jugar = function(){
    let aleatorio;
    aleatorio=lanzarDado();
    cambiarTexto ("lblNumero",aleatorio);
    if(aleatorio>3){
        cambiarTexto("lblGanaste", "ES MAYOR A 3");
        cambiarTexto("lblGanaste1","GANASTE");
        cambiarTexto("lblPerdiste", "");   
        cambiarTexto("lblPerdiste1", "");
    }else{
        cambiarTexto("lblPerdiste", "ES MENOR  A 3");
        cambiarTexto("lblPerdiste1","PERDISTE");
        cambiarTexto("lblGanaste", "");    
        cambiarTexto("lblGanaste1", ""); 
    }
    
}

lanzarDado = function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random();
    numeroMultiplicado=aleatorio*6;
    numeroEntero=parseInt(numeroMultiplicado);
    valorDado = numeroEntero+1;
    return valorDado;

}


