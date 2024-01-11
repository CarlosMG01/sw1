document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;

    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo, contraseña })
    });

    const data = await response.json();
    if (data.success) {
        alert('Inicio de sesión exitoso');
        // Redirigir al usuario o actualizar la interfaz según sea necesario
    } else {
        alert('Error en el inicio de sesión');
    }
});

document.getElementById('modificarForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const usuarioId = 'idDelUsuario'; // Asegúrate de obtener el ID del usuario correctamente
    const contraseñaActual = document.getElementById('contraseñaActual').value;
    const nuevaContraseña = document.getElementById('nuevaContraseña').value;

    const response = await fetch('/api/auth/cambiar-contraseña', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuarioId, contraseñaActual, nuevaContraseña })
    });

    const data = await response.json();
    if (data.success) {
        alert('Contraseña actualizada con éxito');
        // Otras acciones después de actualizar la contraseña, como redirigir al usuario
    } else {
        alert(data.message); // Mostrar mensaje de error
    }
});


