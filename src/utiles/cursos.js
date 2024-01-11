const db = require('./database');

async function crearCurso(nombre, descripcion, foro, permisosCurso) {
    return await db.crearCurso(nombre, descripcion, foro, permisosCurso);
}

async function modificarForo(cursoId, nuevoForo) {
    return await db.modificarForo(cursoId, nuevoForo);
}

async function modificarPermisosCurso(cursoId, nuevosPermisosCurso) {
    return await db.modificarPermisosCurso(cursoId, nuevosPermisosCurso);
}

async function obtenerCursosDeUsuario(usuarioId) {
    return await db.obtenerCursosDeUsuario(usuarioId);
}

async function obtenerNCursosDeUsuario(usuarioId, n) {
    return await db.obtenerNCursosDeUsuario(usuarioId, n);
}

module.exports = {
    crearCurso,
    modificarForo,
    modificarPermisosCurso,
    obtenerCursosDeUsuario,
    obtenerNCursosDeUsuario
};
