
function validarUsuario(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores de los campos de entrada
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;


    if (!validarEmail(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }

    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        return false;
    }

 

    // Para este ejemplo, vamos a simular la validación con datos fijos
    var usuarioValido = {
        email: 'usuario@example.com',
        password: 'password123'
    };

    if (email === usuarioValido.email && password === usuarioValido.password) {
        alert('Inicio de sesión exitoso.');
       
         window.location="bienvenido.html";
    } else {
        alert('Correo electrónico o contraseña incorrectos.');
    }

    return false; // Evita que el formulario se envíe
}

function validarEmail(email) {
    // Expresión regular para validar el formato del correo electrónico
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
