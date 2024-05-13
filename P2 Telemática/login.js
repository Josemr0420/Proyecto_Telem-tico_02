document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Lógica de autenticación
    // Aquí puedes verificar si el nombre de usuario y la contraseña son correctos

    // Ejemplo de verificación básica
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "usuario" && password === "contraseña") {
        // Si las credenciales son válidas, redirigir al usuario a index.html
        window.location.href = "index.html";
    } else {
        // Si las credenciales no son válidas, mostrar un mensaje de error
        alert("Usuario o contraseña incorrectos");
    }
});
