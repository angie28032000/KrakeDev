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
    

}