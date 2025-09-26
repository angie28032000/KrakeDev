calcular = function () {
    let producto;
    let cantidad;
    let precio;
    let subtotal; 
    let descuento; 
    let iva; 
    let total;
    let existeError = false;

   
    producto = recuperarTexto("txtProducto");
    cantidad = recuperarInt("txtCantidad");
    precio = recuperarFloat("txtPrecio");

    
    if (!esProductoValido(producto)) {
        mostrarTexto("lblError1", "Campo obligatorio. Solo letras, Maximo 10 caracteres");
        existeError = true;
    } else {
        mostrarTexto("lblError1", "");
    }

    if (!esCantidadValida(cantidad)) {
        mostrarTexto("lblError2", "Campo obligatorio. Entero entre 1 y 100");
        existeError = true;
    } else {
        mostrarTexto("lblError2", "");
    }

    if (!esPrecioValido(precio)) {
        mostrarTexto("lblError3", "Campo obligatorio. Número entre 1 y 50");
        existeError = true;
    } else {
        mostrarTexto("lblError3", "");
    }

    
    if (existeError) {
        mostrarTexto("lblSubtotal", "0.0");
        mostrarTexto("lblDescuento", "0.0");
        mostrarTexto("lblValorIva", "0.0");
        mostrarTexto("lblResultado", "0.0");
        return;
    }

 
    subtotal = calcularSubtotal(precio, cantidad);
    descuento = calcularDescuentoPorVolumen(subtotal, cantidad);
    iva = calcularIva(subtotal - descuento);
    total = calcularTotal(subtotal, descuento, iva);

    
    mostrarTexto("lblSubtotal", subtotal.toFixed(2));
    mostrarTexto("lblDescuento", descuento.toFixed(2));
    mostrarTexto("lblValorIva", iva.toFixed(2));
    mostrarTexto("lblResultado", total.toFixed(2));
}




esProductoValido = function (producto) {
    if (!producto || producto.trim() === "") {
        return false; 
    }
    if (!/^[a-zA-Z\s]+$/.test(producto)) {
        return false; 
    }
    if (producto.length > 10) {
        return false; 
    }
    return true;
}

esCantidadValida = function (cantidad) {
    if (isNaN(cantidad)) {
        return false; 
    }
    if (cantidad <= 0 || cantidad > 100) {
        return false; 
    }
    return Number.isInteger(cantidad); 
}

esPrecioValido = function (precio) {
    if (isNaN(precio)) {
        return false; 
    }
    if (precio <= 0 || precio > 50) {
        return false; 
    }
    return true;
}



limpiar = function () {
  
    document.getElementById("txtProducto").value = "";
    document.getElementById("txtCantidad").value = "";
    document.getElementById("txtPrecio").value = "";

    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIva", "0.0");
    mostrarTexto("lblResultado", "0.0");


}
