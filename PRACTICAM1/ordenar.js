let cosas = [
    { objeto: "Leche", precio: 2 },
    { objeto: "huevos", precio: 4 },
    { objeto: "Pan", precio: 1 },
    { objeto: "Avena", precio: 5 },
    { objeto: "Roscas", precio: 7 }
]

agregarObjeto = function () {

    let objeto = document.getElementById("txtObjeto").value.trim();
    let precio = document.getElementById("txtPrecio").value.trim();

    if (objeto.length < 3) {
        mostrarTexto("errorObjeto", "El nombre debe tener alamenos 3 caracteres");
        return;
    } else {
        mostrarTexto("errorObjeto", " ");
    }

    precio = parseInt(precio);
    if (isNaN(precio) || precio <= 0 || precio > 100) {
        mostrarTexto("errorPrecio", "El precio que ingreso esta incorrecto");
        return;

    } else {
        mostrarTexto("errorPrecio", " ");
    }

    let nuevoObjeto = {
        objeto: objeto,
        precio: precio
    }

    cosas.push(nuevoObjeto);

    alert("OBJETO AGREGADO CORRECTAMENTE");
    mostrarTexto("mensajeFinal", "PERSONA AGREGADA CORRECTAMENTE");
    mostrarObjetos();
    document.getElementById("txtObjeto").value = "";
    document.getElementById("txtPrecio").value = "";




}

mostrarObjetos = function () {
    let tabla = "<table class='tabla-personas'>";
    tabla += "<tr><th>OBJETO</th> <th>PRECIO</th> </tr>";

    for (let i = 0; i < cosas.length; i++) {
        tabla += "<tr>";
        tabla += "<td>" + cosas[i].objeto + " </td>";
        tabla += "<td>" + cosas[i].precio + "</td>";
        tabla += "</tr>";

    }

    tabla += "</table>";

    document.getElementById("tablaObjetos").innerHTML = tabla;
}

window.addEventListener("load", function () {
    mostrarObjetos();
})

objetoMayor = function () {

    if (!cosas || cosas.length === 0) {
        return null;
    }

    let objetoMayor = cosas[0];
    let elementoObjeto;

    for (let i = 1; i < cosas.length; i++) {
        elementoObjeto = cosas[i];
        if (elementoObjeto.precio > objetoMayor.precio) {
            objetoMayor = elementoObjeto;
        }
    }
    return objetoMayor;

}

determinarMayor = function () {
    let encontrarMayor = objetoMayor();
    mostrarTexto("resultadoMayor", "el objeto mayor es : " + encontrarMayor.objeto + " (" + encontrarMayor.precio + "precio)");

}

objetoMenor = function () {

    if (!cosas || cosas.length === 0) {
        return null;
    }

    let obtenerMenor = cosas[0];
    let elementoObjeto;

    for (let i = 0; i < cosas.length; i++) {
        elementoObjeto = cosas[i];

        if (elementoObjeto.precio < obtenerMenor.precio) {
            obtenerMenor = elementoObjeto;

        }
    }
    return obtenerMenor;

}
determinarMenor = function () {
    let encontrarMenor = objetoMenor();
    mostrarTexto("resultadoMenor", "el objeto menor es : " + encontrarMenor.objeto + "(" + encontrarMenor.precio + "precio)");

}