calcularTasaInteres = function(ingresoAnual){


    if (ingresoAnual < 300000){
        tasa =0,16;
    } else if (ingresoAnual >= 300000 && ingresoAnual < 5000000){
        tasa =0,15;
    }else if (ingresoAnual >= 5000000 && ingresoAnual <1000000){
        tasa =0,13;

    }else if (ingresoAnual >= 1000000 && ingresoAnual <2000000){
        tasa=0,13;
    }else{
        tasa =0,12;
    }
    return tasa;

}

calcularCapacidadPago = function (edad,ingresos,egresos){
    let sobrante = ingresos - egresos;
    let capacidad;

    if (edad > 50){
        capacidad = sobrante* 0,30;
    }else{
        capacidad = sobrante*0.40;
    }
    return capacidad;

}
calcularDescuento = function (precio, cantidad) {
    let descuento = 0;

    if (cantidad >= 3 && cantidad <= 5) {
        descuento = 0.02;
    } else if (cantidad >= 6 && cantidad <= 11) {
        descuento = 0.03;
    } else if (cantidad >= 12) {
        descuento = 0.04;
    }

    let total = precio * cantidad;
    let totalConDescuento = total - (total * descuento);

    return totalConDescuento;
}

determinarColesterolLDL = function (nivelColesterol) {
    
    if (nivelColesterol < 100) {
        return "Óptimo";
    } else if (nivelColesterol >= 100 && nivelColesterol <= 129) {
        return "Casi óptimo";
    } else if (nivelColesterol >= 130 && nivelColesterol <= 159) {
        return "Límite alto";
    } else if (nivelColesterol >= 160 && nivelColesterol <= 189) {
        return "Alto";
    } else {
        return "Muy alto";
    }
}


validarClave = function (clave) {
    return clave.length >= 8 && clave.length <= 16;
}

function calcularDescuento(precio, cantidad) {
    let descuento = 0;

    if (cantidad >= 3 && cantidad <= 5) {
        descuento = 0.02;
    } else if (cantidad >= 6 && cantidad <= 11) {
        descuento = 0.03;
    } else if (cantidad >= 12) {
        descuento = 0.04;
    }

    let total = precio * cantidad;
    let totalConDescuento = total - (total * descuento);

    return totalConDescuento;
}

esMayuscula = function (caracter) {
    if (caracter.length !== 1) return false; 
    let codigo = caracter.charCodeAt(0);
    return codigo >= 65 && codigo <= 90; 
}
 esMinuscula = function (caracter) {
    if (caracter.length !== 1) return false; 
    let codigo = caracter.charCodeAt(0);
    return (codigo >= 97 && codigo <= 122);
}

esDigito = function (caracter) {
    if (caracter.length !== 1) return false; 
    let codigo = caracter.charCodeAt(0);
    return codigo >= 48 && codigo <= 57;
}


 darPermiso = function (notaMatematica, notaFisica, notaGeometria) {
    return (notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90);
}

otorgarPermiso = function (notaMatematica, notaFisica, notaGeometria) {
    return ((notaMatematica > 90 || notaFisica > 90) && notaGeometria > 80);
}

dejarSalir = function(notaMatematica, notaFisica, notaGeometria) {
    return ((notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) 
            && notaFisica > notaMatematica);
}