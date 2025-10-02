obtenerAleatorio = function () {
    let aleatorio = Math.random();
    aleatorio = aleatorio * 100 + 1;
    aleatorio = Math.trunc(aleatorio);
    return aleatorio;
}


generarAleatorios = function () {
    let aleatorios = [];
    let cantidad = recuperarInt("txtCantidad");

    if (isNaN(cantidad) || cantidad < 5 || cantidad > 20) {
        mostrarTexto("mensaje", "Ingrese un número entre 5 y 20");
        return;
    }

    for (let i = 0; i < cantidad; i++) {
        console.log("indice ", i);
        let num = obtenerAleatorio();
        aleatorios.push(num);
    }


    mostrarTexto("mensaje", "");
    mostrarResultados(aleatorios);
}


mostrarResultados = function (arregloNumeros) {
    let contenedor = document.getElementById("resultado");

    contenedor.innerHTML = "";

    let tabla = document.createElement("table");
    tabla.border = "1";
    tabla.style.borderCollapse = "collapse";
    tabla.style.marginTop = "10px";


    for (let i = 0; i < arregloNumeros.length; i++) {
        let fila = tabla.insertRow();
        let celdaIndice = fila.insertCell();
        let celdaValor = fila.insertCell();

        celdaIndice.innerText = i;
        celdaValor.innerText = arregloNumeros[i];
    }


    contenedor.appendChild(tabla);
}