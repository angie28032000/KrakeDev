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

