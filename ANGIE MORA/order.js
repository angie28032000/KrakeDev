let personas = [
    { nombre: "Marcos", edad: 18 },
    { nombre: "Roberto", edad: 15 },
    { nombre: "Kate", edad: 25 },
    { nombre: "Diana", edad: 12 },
    { nombre: "Benja", edad: 5 }
];
encontrarMayor = function() {
    let personaMayor = personas[0]; // Se asume el primer elemento como el mayor inicialmente
    let elementoPersona; // variable para recorrer

    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i];
        console.log("Comparando con:", elementoPersona.nombre, "Edad:", elementoPersona.edad);

        if (elementoPersona.edad > personaMayor.edad) {
            personaMayor = elementoPersona; // Nuevo mayor encontrado
        }
    }

    return personaMayor; // retorna el objeto persona mayor
}

// Función que muestra en pantalla el mayor
function determinarMayor() {
    let mayor = encontrarMayor();
    mostrarTexto("resultadoMayor", "La persona mayor es: " + mayor.nombre + " (" + mayor.edad + " anos)");
}

// 3 Función que encuentra a la persona con menor edad
function encontrarMenor() {
    let personaMenor = personas[0];
    let elementoPersona;

    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i];
        console.log("Comparando con:", elementoPersona.nombre, "Edad:", elementoPersona.edad);

        if (elementoPersona.edad < personaMenor.edad) {
            personaMenor = elementoPersona; // Nuevo menor encontrado
        }
    }

    return personaMenor;
}

//  Función que muestra en pantalla el menor
function determinarMenor() {
    let menor = encontrarMenor();
    mostrarTexto("resultadoMenor", "La persona menor es: " + menor.nombre + " (" + menor.edad + " anos)");

}



agregarPersonas = function() {
    // Limpia errores anteriores
    mostrarTexto("errorNombre", "");
    mostrarTexto("errorEdad", "");
    mostrarTexto("mensajeFinal", "");

    // Captura los valores ingresados
    let nombre = document.getElementById("txtNombre").value.trim();
    let edad = document.getElementById("txtEdad").value.trim();

    // Validación del nombre
    if (nombre.length < 3) {
        mostrarTexto("errorNombre", "El nombre debe tener al menos 3 caracteres");
        return;
    }

    // Validación de la edad
    edad = parseInt(edad);
    if (isNaN(edad) || edad <= 0 || edad > 100) {
        mostrarTexto("errorEdad", "Ingrese una edad válida (entre 1 y 100)");
        return;
    }

    // Si pasa las validaciones, crear el nuevo objeto
    let nuevaPersona = {
        nombre: nombre,
        edad: edad
    };

    // Agregar al arreglo
    personas.push(nuevaPersona);

    // Mensaje final
    alert("PERSONA AGREGADA CORRECTAMENTE");
    mostrarTexto("mensajeFinal", " Persona agregada correctamente.");

    // Refrescar la tabla
    mostrarPersonas();

    // Limpiar las cajas
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtEdad").value = "";
};

mostrarPersonas = function() {
    let tabla = "<table class='tabla-personas'>";
    tabla += "<tr><th>Edad</th><th>Nombre</th></tr>";

    for (let i = 0; i < personas.length; i++) {
        tabla += "<tr>";
        tabla += "<td>" + personas[i].edad + "</td>";
        tabla += "<td>" + personas[i].nombre + "</td>";
        tabla += "</tr>";
    }

    tabla += "</table>";

    document.getElementById("tablaPersonas").innerHTML = tabla;
};