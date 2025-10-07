let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1004641658", nombre: "Angie", apellido: "Mora", sueldo: 585.0 }
]
let esNuevo = false;

mostrarEmpleados = function () {
    let tabla = "<table border='1'class ='tablaEmpleados'>";
    tabla += "<tr><th>CEDULA</th><th>NOMBRE</th><th>APELLIDO></th><th>SUELDO</th></tr>";
    for (let i = 0; i < empleados.length; i++) {
        let emp = empleados[i];
        tabla += "<tr>";
        tabla += "<td>" + emp.cedula + "</td>";
        tabla += "<td>" + emp.nombre + "</td>";
        tabla += "<td>" + emp.apellido + "</td>";
        tabla += "<td>" + emp.sueldo + "</td>";
        tabla += "<tr>";
    }
    tabla += "</table>";
    document.getElementById("tablaEmpleados").innerHTML = tabla;

}

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");

    mostrarEmpleados();
    condicionesIniciales();
}
mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}
mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}
condicionesIniciales = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");


}
ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");


    esNuevo = true;
}

buscarEmpleados = function (cedula) {
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].cedula === cedula) {
            return empleados[i];
        }
    }
    return null;
}

agregarEmpleado = function (empleado) {
    let existente = buscarEmpleados(empleado.cedula);
    if (existente === null) {
        empleados.push(empleado);
        return true;
    } else {
        return false;
    }
}

guardar = function () {
    let cedula = document.getElementById("txtCedula").value.trim();
    let nombre = document.getElementById("txtNombre").value.trim();
    let apellido = document.getElementById("txtApellido").value.trim();
    let sueldoStr = document.getElementById("txtSueldo").value.trim();

    let errores = false;

    document.getElementById("lblErrorCedula").innerText = "";
    document.getElementById("lblErrorNombre").innerText = "";
    document.getElementById("lblErrorApellido").innerText = "";
    document.getElementById("lblErrorSueldo").innerText = "";

    if (cedula.length !== 10 || isNaN(cedula)) {
        document.getElementById("lblErrorCedula").innerText = "La cedula debe tener exactamente 10 dígitos numericos.";
        errores = true;
    }

    if (nombre.length < 3 || !/^[A-Z]+$/.test(nombre)) {
        document.getElementById("lblErrorNombre").innerText = "El nombre debe tener al menos 3 letras mayusculas (A-Z).";
        errores = true;
    }

    if (apellido.length < 3 || !/^[A-Z]+$/.test(apellido)) {
        document.getElementById("lblErrorApellido").innerText = "El apellido debe tener al menos 3 letras mayusculas (A-Z).";
        errores = true;
    }

    let sueldo = parseFloat(sueldoStr);
    if (isNaN(sueldo)) {
        document.getElementById("lblErrorSueldo").innerText = "El sueldo debe ser un numero.";
        errores = true;
    } else if (sueldo < 400 || sueldo > 5000) {
        document.getElementById("lblErrorSueldo").innerText = "El sueldo debe estar entre 400 y 5000.";
        errores = true;
    }

    if (errores) {
        return;
    }

    if (esNuevo) {

        let nuevoEmpleado = {
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
            sueldo: sueldo
        };

        let agregado = agregarEmpleado(nuevoEmpleado);

        if (agregado) {
            alert("EMPLEADO GUARDADO CORRECTAMENTE");
            mostrarEmpleados();
            condicionesIniciales();
        } else {
            alert(" YA EXISTE UN EMPLEADO CON LA CEDULA " + cedula);
        }
    } else {
        alert("Funcionalidad de modificacion aun no implementada.");
    }
}