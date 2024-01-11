const db = require('./database');
const bcrypt = require('bcryptjs');

async function registrarUsuario(nombre, apellidos, correo, contraseña, fotoPerfil, cursosAnclados, chatsAnclados, notificaciones, rol, permisos) {
    const contraseñaHash = await bcrypt.hash(contraseña, 12);
    return await db.crearUsuario(nombre, apellidos, correo, contraseñaHash, fotoPerfil, cursosAnclados, chatsAnclados, notificaciones, rol, permisos);
}

async function cambiarContraseña(usuarioId, nuevaContraseña) {
    const contraseñaHash = await bcrypt.hash(nuevaContraseña, 12);
    return await db.modificarContraseña(usuarioId, contraseñaHash);
}

async function comprobarContraseña(usuarioId, contraseña) {
    const usuario = await db.obtenerUsuarioPorId(usuarioId);
    return bcrypt.compare(contraseña, usuario.Contraseña);
}

module.exports = {
    registrarUsuario,
    cambiarContraseña,
    comprobarContraseña
};