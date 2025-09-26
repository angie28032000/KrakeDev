obtenerProvincia = function (placa) {
    if (!placa || placa.length === 0) {
        return null;
    }

    let letra = placa[0].toUpperCase();
    let provincias = {
        A: "Azuay",
        B: "Bolívar",
        C: "Carchi",
        E: "Esmeraldas",
        G: "Guayas",
        H: "Chimborazo",
        I: "Imbabura",
        L: "Loja",
        M: "Manabí",
        N: "Napo",
        O: "El Oro",
        P: "Pichincha",
        R: "Los Ríos",
        S: "Morona Santiago",
        T: "Tungurahua",
        U: "Sucumbíos",
        V: "Pastaza",
        W: "Galápagos",
        X: "Cotopaxi",
        Y: "Santa Elena",
        Z: "Zamora Chinchipe"
    };

    return provincias[letra] || null;
}


validarEstructura=function (placa) {
    let errores = [];

   
    if (placa.length !== 7 && placa.length !== 8) {
        errores.push("La placa debe tener 7 u 8 caracteres.");
    }

    
    if (placa.length >= 1 && !esMayuscula(placa[0])) {
        errores.push("El primer carácter debe ser una letra mayúscula.");
    }
    if (placa.length >= 2 && !esMayuscula(placa[1])) {
        errores.push("El segundo carácter debe ser una letra mayúscula.");
    }
    if (placa.length >= 3 && !esMayuscula(placa[2])) {
        errores.push("El tercer carácter debe ser una letra mayúscula.");
    }
    if (placa.length >= 4 && !esGuion(placa[3])) {
        errores.push("El cuarto carácter debe ser un guión (-).");
    }
    if (placa.length >= 5 && !esDigito(placa[4])) {
        errores.push("El quinto carácter debe ser un dígito.");
    }
    if (placa.length >= 6 && !esDigito(placa[5])) {
        errores.push("El sexto carácter debe ser un dígito.");
    }
    if (placa.length >= 7 && !esDigito(placa[6])) {
        errores.push("El séptimo carácter debe ser un dígito.");
    }
    if (placa.length === 8 && !esDigito(placa[7])) {
        errores.push("El octavo carácter debe ser un dígito.");
    }

   
    if (errores.length > 0) {
        return errores.join(" ");
    } else {
        return null;
    }
}


obtenerTipoVehiculo=function(placa) {
    if (!placa || placa.length < 2) {
        return null;
    }

    let letra = placa[1].toUpperCase();
    let tiposVehiculo = {
        A: "Vehiculo comercial",
        Z: "Vehiculo gubernamental",
        E: "Vehiculo de empresa publica",
        X: "Vehiculo diplomatico",
        M: "Vehiculo municipal",
        S: "Vehiculo de uso oficial",
        P: "Vehiculo particular"
    };

    return tiposVehiculo[letra] || null;
}


obtenerDiaPicoYPlaca=function(placa) {
    if (!placa || placa.length === 0) {
        return null;
    }

    let ultimoCaracter = placa[placa.length - 1];

    if (!esDigito(ultimoCaracter)) {
        return null; 
    }

    let digito = parseInt(ultimoCaracter);

    if (digito === 1 || digito === 2) {
        return "Lunes";
    } else if (digito === 3 || digito === 4) {
        return "Martes";
    } else if (digito === 5 || digito === 6) {
        return "Miercoles";
    } else if (digito === 7 || digito === 8) {
        return "Jueves";
    } else if (digito === 9 || digito === 0) {
        return "Viernes";
    } else {
        return null;
    }
}