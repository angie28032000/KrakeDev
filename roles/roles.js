// roles.js (versión corregida)
if (typeof empleados === 'undefined') { var empleados = []; } // si no existe, lo inicializa
let roles = [];
let esNuevo = false;

/* ---------- EMPLEADOS ---------- */
mostrarEmpleados = function () {
    let tabla = "<table border='1' class='tablaEmpleados'>";
    tabla += "<tr><th>CEDULA</th><th>NOMBRE</th><th>APELLIDO</th><th>SUELDO</th></tr>";
    for (let i = 0; i < empleados.length; i++) {
        let emp = empleados[i];
        tabla += "<tr>";
        tabla += "<td>" + emp.cedula + "</td>";
        tabla += "<td>" + emp.nombre + "</td>";
        tabla += "<td>" + emp.apellido + "</td>";
        tabla += "<td>" + emp.sueldo + "</td>";
        tabla += "</tr>";
    }
    tabla += "</table>";
    let cont = document.getElementById("tablaEmpleados");
    if (cont) cont.innerHTML = tabla;
}

/* Busca un empleado por cédula y devuelve el objeto o null */
buscarEmpleados = function (cedula) {
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].cedula === cedula) {
            return empleados[i];
        }
    }
    return null;
}

/* Mostrar opción empleado / rol / resumen (no tocar) */
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

/* Inicializa controles */
condicionesIniciales = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

/* Nuevo empleado */
ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}

/* ------- BÚSQUEDAS ------- */
/* Buscar y mostrar en formulario EMPLEADO (divEmpleado) */
ejecutarBusqueda = function () {
    let cedulaBuscar = recuperarTexto("txtBusquedaCedula");
    if (!cedulaBuscar) {
        alert("Ingrese una cédula para buscar");
        return;
    }
    let empleado = buscarEmpleados(cedulaBuscar);
    if (empleado == null) {
        alert("EMPLEADO NO EXISTE");
    } else {
        mostrarTextoEnCaja("txtCedula", empleado.cedula);
        mostrarTextoEnCaja("txtNombre", empleado.nombre);
        mostrarTextoEnCaja("txtApellido", empleado.apellido);
        mostrarTextoEnCaja("txtSueldo", empleado.sueldo);

        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");

        deshabilitarComponente("txtCedula");

        esNuevo = false;
    }
};

/* Buscar empleado (por cédula) y mostrar en la vista ROL (divRol) */
ejecutarBusquedaRol = function () {
    let cedulaBuscar = recuperarTexto("txtBusquedaCedulaRol");
    if (!cedulaBuscar) {
        alert("Ingrese una cédula para buscar");
        return;
    }
    let empleado = buscarEmpleados(cedulaBuscar);
    if (empleado == null) {
        alert("Empleado no encontrado");
        return;
    }

    mostrarTexto("infoCedula", empleado.cedula);
    mostrarTexto("infoNombre", (empleado.nombre || "") + " " + (empleado.apellido || ""));
    // asegurar formato numérico
    let sueldoTexto = (typeof empleado.sueldo === "number") ? empleado.sueldo.toFixed(2) : empleado.sueldo;
    mostrarTexto("infoSueldo", sueldoTexto);

    mostrarMensaje("Empleado encontrado");
    // si existe botón para guardar rol, habilitarlo
    let btnR = document.getElementById("btnGuardarRol");
    if (btnR) btnR.disabled = false;
};

/* ------- CÁLCULOS ------- */
calcularAporteEmpleado = function (sueldo) {
    let aporte = sueldo * 0.0945;
    return parseFloat(aporte.toFixed(2));
};

calcularAporteEmpleador = function (sueldo) {
    let aporte = sueldo * 0.1115;
    return parseFloat(aporte.toFixed(2));
};

calcularValorAPagar = function (sueldo, aporteIess, descuento) {
    let valorPagar = sueldo - aporteIess - descuento;
    return parseFloat(valorPagar.toFixed(2));
};

/* calcular rol (usa infoSueldo (div) y txtDescuentos (input) según tu HTML) */
calcularRol = function () {
    let sueldo = recuperarFloatDiv("infoSueldo"); // salario mostrado en div
    let descuento = recuperarFloat("txtDescuentos"); // input en tu HTML

    if (isNaN(sueldo) || sueldo <= 0) {
        alert("Debe existir un sueldo válido (busque un empleado primero).");
        return;
    }

    if (isNaN(descuento) || descuento < 0 || descuento > sueldo) {
        alert("El descuento debe ser un número mayor o igual a 0 y menor o igual al sueldo.");
        return;
    }

    let aporteIess = calcularAporteEmpleado(sueldo);
    mostrarTexto("infoIESS", aporteIess.toFixed(2));

    let valorPagar = calcularValorAPagar(sueldo, aporteIess, descuento);
    mostrarTexto("infoPago", valorPagar.toFixed(2));
}

/* ------- ROLES (guardar / mostrar) ------- */
/* Guardar rol (usar desde divRol, botón con id btnGuardarRol) */
guardarRol = function () {
    // obtenemos datos desde los elementos de la vista ROL
    let cedula = recuperarTextoDiv("infoCedula") || recuperarTexto("txtBusquedaCedulaRol");
    if (!cedula) {
        alert("No hay empleado seleccionado para guardar el rol.");
        return;
    }
    let nombre = recuperarTextoDiv("infoNombre");
    let sueldo = recuperarFloatDiv("infoSueldo");
    let descuento = recuperarFloat("txtDescuentos");
    if (isNaN(sueldo) || sueldo <= 0) {
        alert("Sueldo inválido.");
        return;
    }
    if (isNaN(descuento) || descuento < 0) descuento = 0;

    let aporteEmpleado = calcularAporteEmpleado(sueldo);
    let aporteEmpleador = calcularAporteEmpleador(sueldo);
    let valorPagar = calcularValorAPagar(sueldo, aporteEmpleado, descuento);

    let nuevoRol = {
        cedula: cedula,
        nombre: nombre,
        sueldo: sueldo,
        descuento: descuento,
        aporteEmpleado: aporteEmpleado.toFixed(2),
        aporteEmpleador: aporteEmpleador.toFixed(2),
        valorPagar: valorPagar.toFixed(2)
    };

    roles.push(nuevoRol);
    mostrarMensaje("✅ Rol guardado correctamente");
    console.log("Arreglo roles:", roles);

    // deshabilitar botón guardar rol hasta que se busque otro empleado
    let btnR = document.getElementById("btnGuardarRol");
    if (btnR) btnR.disabled = true;

    mostrarRoles();
    mostrarTotales();
};

/* Mostrar tabla resumen de roles */
mostrarRoles = function () {
    let tabla = `
        <table border="1" cellspacing="0" cellpadding="5">
            <tr>
                <th>CÉDULA</th>
                <th>NOMBRE</th>
                <th>VALOR A PAGAR</th>
                <th>APORTE EMPLEADO</th>
                <th>APORTE EMPLEADOR</th>
            </tr>
    `;

    for (let rol of roles) {
        tabla += `
            <tr>
                <td>${rol.cedula}</td>
                <td>${rol.nombre}</td>
                <td>${rol.valorPagar}</td>
                <td>${rol.aporteEmpleado}</td>
                <td>${rol.aporteEmpleador}</td>
            </tr>
        `;
    }

    tabla += "</table>";
    let cont = document.getElementById("tablaResumen");
    if (cont) cont.innerHTML = tabla;
};

/* Mostrar totales en los campos existentes del HTML */
mostrarTotales = function () {
    let totalEmpleado = 0, totalEmpleador = 0, totalPagar = 0;

    for (let rol of roles) {
        totalEmpleado += parseFloat(rol.aporteEmpleado || 0);
        totalEmpleador += parseFloat(rol.aporteEmpleador || 0);
        totalPagar += parseFloat(rol.valorPagar || 0);
    }

    let elTotalPago = document.getElementById("infoTotalPago");
    let elAporteEmpresa = document.getElementById("infoAporteEmpresa");
    let elAporteEmpleado = document.getElementById("infoAporteEmpleado");

    if (elTotalPago) elTotalPago.innerText = totalPagar.toFixed(2);
    if (elAporteEmpresa) elAporteEmpresa.innerText = totalEmpleador.toFixed(2);
    if (elAporteEmpleado) elAporteEmpleado.innerText = totalEmpleado.toFixed(2);
};

/* ------- EMPLEADOS: agregar / guardar ------- */
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
        let empleado = buscarEmpleados(document.getElementById("txtCedula").value);
        if (empleado != null) {
            empleado.nombre = recuperarTexto("txtNombre");
            empleado.apellido = recuperarTexto("txtApellido");
            empleado.sueldo = recuperarFloat("txtSueldo");

            alert("EMPLEADO MODIFICADO EXITOSAMENTE");

            mostrarEmpleados();
            condicionesIniciales();
        }
    }
}

/* Limpiar campos del formulario EMPLEADO */
limpiar = function () {
    mostrarTextoEnCaja("txtBusquedaCedula", "");
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");

    esNuevo = false;

    condicionesIniciales();
}

/* Validación para habilitar/deshabilitar btnGuardar (empleado) */
validarGuardarRol = function () {
    let cedula = document.getElementById("txtCedula");
    let nombre = document.getElementById("txtNombre");
    let sueldo = document.getElementById("txtSueldo");

    let btn = document.getElementById("btnGuardar");
    if (!btn) return;

    if (!cedula || !nombre || !sueldo) {
        btn.disabled = true;
        return;
    }

    if (cedula.value.trim() === "" || nombre.value.trim() === "" || sueldo.value.trim() === "") {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
};

/* Mensajes pequeños */
mostrarMensaje = function (texto) {
    let lbl = document.getElementById("lblMensaje");
    if (lbl) lbl.innerText = texto;
};

/* ---------------- ONLOAD ---------------- */
window.onload = function () {
    mostrarOpcionRol();

    // btnGuardar (empleado)
    let btn = document.getElementById("btnGuardar");
    if (btn) btn.disabled = true;

    // btnGuardarRol (rol)
    let btnRol = document.getElementById("btnGuardarRol");
    if (btnRol) btnRol.disabled = true;

    // listeners defensivos
    if (document.getElementById("txtCedula")) {
        document.getElementById("txtCedula").addEventListener("input", validarGuardarRol);
    }
    if (document.getElementById("txtNombre")) {
        document.getElementById("txtNombre").addEventListener("input", validarGuardarRol);
    }
    if (document.getElementById("txtSueldo")) {
        document.getElementById("txtSueldo").addEventListener("input", validarGuardarRol);
    }
};