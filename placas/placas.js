 validarPlaca = function() {
    let placa = document.getElementById("txtPlaca").value.trim();
    let erroresEstructura = validarEstructura(placa);

    let estado = document.getElementById("estado");
    let errores = document.getElementById("errores");
    let provincia = document.getElementById("provincia");
    let tipoVehiculo = document.getElementById("tipoVehiculo");
    let picoPlaca = document.getElementById("picoPlaca");

    errores.innerHTML = "";
    provincia.innerHTML = "";
    tipoVehiculo.innerHTML = "";
    picoPlaca.innerHTML = "";

    if (erroresEstructura === null) {
        estado.innerHTML = " ESTRUCTURA VALIDA";

        
        let prov = obtenerProvincia(placa);
        provincia.innerHTML = prov ? "Provincia: " + prov : " Provincia incorrecta.";

        let tipo = obtenerTipoVehiculo(placa);
        tipoVehiculo.innerHTML = tipo ? "Tipo: " + tipo : "Tipo de vehiculo incorrecto.";

      
        let dia = obtenerDiaPicoYPlaca(placa);
        picoPlaca.innerHTML = dia ? " Dia de Pico y Placa: " + dia : "No aplica pico y placa.";

    } else {
        estado.innerHTML = " ESTRUCTURA INCORRECTA";
        errores.innerHTML = erroresEstructura;
    }
}

function limpiar() {
    
    document.getElementById("txtPlaca").value = "";

 
    document.getElementById("estado").innerHTML = "";
    document.getElementById("errores").innerHTML = "";
    document.getElementById("provincia").innerHTML = "";
    document.getElementById("tipoVehiculo").innerHTML = "";
    document.getElementById("picoPlaca").innerHTML = "";
}