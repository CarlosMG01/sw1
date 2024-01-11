async function cargarChats() {
    const usuarioId = 'idDelUsuario'; // Obtén el ID del usuario actual
    const response = await fetch(`/api/chats/${usuarioId}`);
    const chats = await response.json();

    // Aquí podrías clasificar los chats en anclados y otros
    chats.forEach(chat => {
        // Ejemplo de clasificación y creación de elementos HTML
        const chatElement = document.createElement('button');
        chatElement.className = 'objeto';
        chatElement.innerHTML = `<span>${chat.nombre}</span><i class="fas fa-star"></i>`;
        chatElement.onclick = () => irAChat(chat.id);

        if (chat.esAnclado) {
            document.getElementById('anclados-container').appendChild(chatElement);
        } else {
            document.getElementById('otros-container').appendChild(chatElement);
        }
    });
}

// Llama a cargarChats cuando la página se cargue
document.addEventListener('DOMContentLoaded', cargarChats);


async function cargarCursos() {
    const usuarioId = 'idDelUsuario'; // Obtén el ID del usuario actual
    const response = await fetch(`/api/cursos/${usuarioId}`);
    const cursos = await response.json();

    // Clasifica y muestra los cursos en la página
    cursos.forEach(curso => {
        // Crea elementos HTML para cada curso
        const cursoElement = document.createElement('div');
        cursoElement.className = 'curso';
        cursoElement.innerHTML = `<span>${curso.nombre}</span>`;

        // Aquí puedes añadir lógica para clasificar cursos anclados y otros
        if (curso.esAnclado) {
            document.getElementById('cursos-anclados-container').appendChild(cursoElement);
        } else {
            document.getElementById('otros-cursos-container').appendChild(cursoElement);
        }
    });
}

// Llama a cargarCursos cuando la página se cargue
document.addEventListener('DOMContentLoaded', cargarCursos);

async function cargarNotificaciones() {
    const usuarioId = 'idDelUsuario'; // Reemplaza con el método para obtener el ID del usuario actual
    const response = await fetch(`/api/notificaciones/${usuarioId}`);
    const notificaciones = await response.json();

    // Muestra las notificaciones en la página
    const containerNotificaciones = document.getElementById('otros-container');
    notificaciones.forEach(notificacion => {
        const notificacionElement = document.createElement('div');
        notificacionElement.className = 'notificacion';
        notificacionElement.innerHTML = `<p>${notificacion.mensaje}</p>`;

        // Añade la notificación al contenedor
        containerNotificaciones.appendChild(notificacionElement);
    });
}

// Llama a cargarNotificaciones cuando la página se cargue
document.addEventListener('DOMContentLoaded', cargarNotificaciones);
