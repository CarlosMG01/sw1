const db = require('./database');

async function obtenerTodosLosUsuarios() {
    return await db.obtenerTodosLosUsuarios();
}

async function obtenerNUsuarios(n) {
    return await db.obtenerNUsuarios(n);
}

async function modificarNombreUsuario(usuarioId, nuevoNombre) {
    return await db.modificarNombre(usuarioId, nuevoNombre);
}

async function modificarApellidoUsuario(usuarioId, nuevoApellido) {
    return await db.modificarApellido(usuarioId, nuevoApellido);
}

async function modificarFotoPerfil(usuarioId, nuevaFotoPerfil) {
    return await db.modificarFotoPerfil(usuarioId, nuevaFotoPerfil);
}

async function modificarCursosAnclados(usuarioId, nuevosCursosAnclados) {
    return await db.modificarCursosAnclados(usuarioId, nuevosCursosAnclados);
}

async function modificarNotificaciones(usuarioId, nuevasNotificaciones) {
    return await db.modificarNotificaciones(usuarioId, nuevasNotificaciones);
}

async function modificarChatsAnclados(usuarioId, nuevosChatsAnclados) {
    return await db.modificarChatsAnclados(usuarioId, nuevosChatsAnclados);
}

async function modificarRol(usuarioId, nuevoRol) {
    return await db.modificarRol(usuarioId, nuevoRol);
}

async function modificarPermisos(usuarioId, nuevosPermisos) {
    return await db.modificarPermisos(usuarioId, nuevosPermisos);
}

module.exports = {
    obtenerTodosLosUsuarios,
    obtenerNUsuarios,
    modificarNombreUsuario,
    modificarApellidoUsuario,
    modificarFotoPerfil,
    modificarCursosAnclados,
    modificarNotificaciones,
    modificarChatsAnclados,
    modificarRol,
    modificarPermisos
};
