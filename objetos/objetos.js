
probarAtributos = function(){
    let persona = {
        nombre : "Juan",
        apellido :"Morales",
        edad : 23,
        estaVivo : true

    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if (persona.estaVivo==false){
        console.log("no esta vivo ");
    }
    else{
        console.log("si esta vivo ");

    }
}

crearProducto = function(){
    let producto1 = {
        nombre : "Leche",
        precio : 2.23,
        stock : true
    }

    let producto2 = {
        nombre : "Jugo",
        precio : 1.10,
        stock : true
    }

    console.log(producto1.nombre);
    console.log(producto2.precio);

    if(producto1.stock && !producto2.stock){
        console.log("Producto 1 tiene stock disponible");

    }else if(!producto1.stock && producto2.stock){
        console.log("Producto 2 tiene stock disponible");


    }else if(producto1.stock && producto2.stock){
        console.log("Ambos productos tienen stock disponible");

    }else{
        console.log("Ninguno de los productos tiene stock");
    }
}