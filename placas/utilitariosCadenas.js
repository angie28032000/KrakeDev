
esMayuscula = function (caracter) {
    if (caracter.length !== 1) {
        return false; 
    }
    let codigo = caracter.charCodeAt(0);
    return codigo >= 65 && codigo <= 90; 
}

esDigito=function(caracter) {
    if (caracter.length !== 1) {
        return false;
    }
    let codigo = caracter.charCodeAt(0);
    return codigo >= 48 && codigo <= 57; 
}

esGuion=function(caracter) {
    if (caracter.length !== 1) {
        return false;
    }
    let codigo = caracter.charCodeAt(0);
    return codigo === 45; 
}