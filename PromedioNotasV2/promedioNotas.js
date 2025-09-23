calcularPromedioNotas = function (){
    let nota1;
    let nota2;
    let nota3;
    let promedio;
    nota1 = recuperarFlotante ("nota1");
    nota2 = recuperarFlotante ("nota2");
    nota3 = recuperarFlotante ("nota3");
    promedio = calcularPromedio (nota1,nota2,nota3);
    cambiarTexto ("lblPromedio",promedio.toFixed(2));

    if(promedio<5 && promedio>0){
        cambiarTexto("lblResultadoTxt","REPROBADO");
        cambiarImagen("lblImagen",src="reprobado.gif");
    }else if(promedio>=5 && promedio<=8){
        cambiarTexto("lblResultadoTxt","BUEN TRABAJO")
        cambiarImagen("lblImagen",src="aprobado.gif");
    }else{
        cambiarTexto("lblResultadoTxt","DATOS INCORRECTOS");
        cambiarImagen("lblImagen",src="error.gif");
    }


    

}