calcularValorDescuento = function(monto,porcentajeDescuento){
    let valorDescuento = monto * porcentajeDescuento /100; 
    return valorDescuento;
}
calcularIva = function(monto){
    let valorIva = monto * 0.12 ;
    return valorIva;
}
calcularSubtotal = function(precio,cantidad){
    let valorTotalProductos = precio * cantidad;
    return valorTotalProductos;
}
calcularTotal = function(subtotal,descuento,iva){
    let valorTotalPagar = subtotal-descuento +iva;
    return valorTotalPagar;
}

calcularDescuentoPorVolumen = function(subtotal, cantidad) {
    let descuento = 0;

    if (cantidad >= 3 && cantidad <= 5) {
        descuento = subtotal * 0.03;
    } else if (cantidad >= 6 && cantidad <= 11) {
        descuento = subtotal * 0.04;
    } else if (cantidad >= 12) {
        descuento = subtotal * 0.05;
    }

    return descuento;
}