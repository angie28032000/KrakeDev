let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1004641658",nombre:"Angie",apellido:"Mora",sueldo:585.0}
]
mostrarEmpleados = function (){
    let tabla="<table border='1'class ='tablaEmpleados'>";
    tabla+= "<tr><th>CEDULA</th><th>NOMBRE</th><th>APELLIDO></th><th>SUELDO</th></tr>";
    for (let i=0;i < empleados.length;i++){
        let emp = empleados[i];
        tabla +="<tr>";
        tabla+="<td>"+emp.cedula+"</td>";
        tabla+="<td>"+emp.nombre+"</td>";
        tabla+="<td>"+emp.apellido+"</td>";
         tabla+="<td>"+emp.sueldo+"</td>";
         tabla+= "<tr>";
    }
    tabla+="</table>";
    document.getElementById("tablaEmpleados").innerHTML=tabla;

}

mostrarOpcionEmpleado = function(){
    mostrarComponente  ("divEmpleado");
    ocultarComponente  ("divRol");
    ocultarComponente  ("divResumen");

    mostrarEmpleados();
}
mostrarOpcionRol = function(){
    mostrarComponente  ("divRol");
    ocultarComponente  ("divEmpleado");
    ocultarComponente  ("divResumen");
}
mostrarOpcionResumen = function(){
    mostrarComponente  ("divResumen");
    ocultarComponente ("divEmpleado");
    ocultarComponente  ("divRol");
}
