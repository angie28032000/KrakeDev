
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

modificarAtributos = function(){
    let cuenta ={
        numero:"53457346534",
        saldo: 0.0

    }
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}

crearCliente = function(){
    let cliente = {
        cedula:"53453",
        nombre:"Juan"

    }
    let cliente1 = {};
    cliente1.nombre="Romero";
    cliente.apellido="Salcedo";
    cliente1.cedula="123432";
}

probarIncrementoSaldo= function(){
    let cta ={numero:"134234",saldo:34.0}
    incrementarSaldo(cta,100);
    console.log(cta.saldo);

}
probarDeterminarMayor = function(){
    let per1={nombre:"Daniel",edad:45};
    let per2={nombre:"Luisa",edad:48};
    let mayor;
    mayor = determinarMayor(per1,per2);
    if(mayor !=null){
        console.log("el mayor es :"+mayor.nombre);

    }


}

incrementarSaldo = function(cuenta,monto){
    cuenta.saldo+=monto;
}
determinarMayor=function(persona1,persona2){
    if (persona1.edad>persona2.edad){
        return persona1;

    }else if(persona2.edad>persona1.edad){
        return persona2;
    }else{
        return null;
    }
}