document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Aquí puedes realizar la lógica de autenticación
    // Por ejemplo, verificar si el nombre de usuario y la contraseña son correctos

    // Redirigir al usuario a index.html después de iniciar sesión
    window.location.href = "index.html";
});
