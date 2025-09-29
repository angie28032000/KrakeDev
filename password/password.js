validarPassword=function(password) {
    let errores = "";

    // Validar longitud
    if (password.length < 8) {
        errores += "La contraseña debe tener al menos 8 caracteres.\n";
    }
    if (password.length > 16) {
        errores += "La contraseña no debe tener más de 16 caracteres.\n";
    }

    // Validar letra mayúscula
    let tieneMayuscula = false;
    for (let i = 0; i < password.length; i++) {
        let caracter = password.charAt(i);
        if (caracter >= 'A' && caracter <= 'Z') {
            tieneMayuscula = true;
            break;
        }
    }
    if (!tieneMayuscula) {
        errores += "La contraseña debe contener al menos una letra mayúscula.\n";
    }

    // Validar dígito
    let tieneDigito = false;
    for (let i = 0; i < password.length; i++) {
        let caracter = password.charAt(i);
        if (caracter >= '0' && caracter <= '9') {
            tieneDigito = true;
            break;
        }
    }
    if (!tieneDigito) {
        errores += "La contraseña debe contener al menos un número.\n";
    }

    let tieneEspecial = false;
    for (let i = 0; i < password.length; i++) {
        let caracter = password.charAt(i);
        if (caracter === '*' || caracter === '-' || caracter === '_') {
            tieneEspecial = true;
            break;
        }
    }
    if (!tieneEspecial) {
        errores += "La contraseña debe contener al menos un caracter especial (*, -, _).\n";
    }

    return errores;
}


ejecutarValidacion=function() {
    let inputPassword = document.getElementById("txtPassword").value;
    let resultado = validarPassword(inputPassword);

    let divResultado = document.getElementById("resultado");

    if (resultado === "") {
        divResultado.innerHTML = "<span style='color:green;'>Password Correcto </span>";
    } else {
        divResultado.innerHTML = "<span style='color:red; white-space:pre-line;'>" + resultado + "</span>";
    }
}
