
function validarUsuario(event) {
    event.preventDefault(); 

   
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (!validarEmail(email)) {
        alert('Por favor, ingrese un correo electrónico válido que contenga "@" y no tenga "ñ".');
        return false;
    }

    if (password.length < 8 || /\s/.test(password)) {
        alert('La contraseña debe tener al menos 8 caracteres y no debe contener espacios.');
        return false;
    }

    // Simular la validación con datos fijos
    var usuarioValido = {
        email: 'usuario@example.com',
        password: 'password123'
    };

    // Validar usuario
    if (email === usuarioValido.email && password === usuarioValido.password) {
        alert('Inicio de sesión exitoso.');
        window.location.href = "bienvenido.html"; 
    } else {
        alert('Correo electrónico o contraseña incorrectos.');
    }

    return false; 
}

function validarEmail(email) {
    // Validar el formato del email sin "ñ"
    var regex = /^[^\s@ñ]+@[^\s@ñ]+\.[^\s@ñ]+$/;
    return regex.test(email);
}


