
let notas = [];
agregarElementos = function(){
notas.push(5);
notas.push(10);
console.log(notas.length);
}

calcularPromedio = function(){
    let sumaNotas = 0;
    let promedio ;

    for(let i=0;i< notas.length;i++){
        sumaNotas += notas[i];
        console.log(sumaNotas);
    }
    promedio = sumaNotas/notas.length;
    return promedio;
    
    
}

ejecutarPromedio=function(){
    let promedioT ;
    promedioT= calcularPromedio();
    document.getElementById("lblPromedio").innerText = "Promedio: " + promedioT;
}



recorrerArreglo = function(){
    let notaR;

    for(let indice =0;indice<notas.length;indice++){
        notaR = notas[indice];
        console.log(notaR);

    }
}
probarAgregar=function(){
    let notaRecuperadad ;
    notaRecuperadad=recuperarInt("txtNota");
    agregarNota(notaRecuperadad);

}
agregarNota = function(nota){
    notas.push(nota);

}