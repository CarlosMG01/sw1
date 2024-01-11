const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'tu_usuario',
    database: 'tu_base_de_datos',
    password: 'tu_contraseña',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const pool = require('./path_to_your_db_pool'); // Asegúrate de tener el pool de conexión importado

async function obtenerTodosLosUsuarios() {
    const [rows] = await pool.query('SELECT * FROM Usuarios');
    return rows;
}

// Obtener usuario por correo
async function obtenerUsuarioPorCorreo(correo) {
    const [rows] = await pool.query('SELECT * FROM Usuarios WHERE Correo = ?', [correo]);
    return rows[0];
}

// Obtener 100 usuarios
async function obtenerCienUsuarios() {
    const [rows] = await pool.query('SELECT * FROM Usuarios LIMIT 100');
    return rows;
}

// Crear un usuario
async function crearUsuario(nombre, apellidos, correo, contraseñaHash, fotoPerfil, cursosAnclados, chatsAnclados, notificaciones, rol, permisos) {
    const [result] = await pool.query('INSERT INTO Usuarios (Nombre, Apellidos, Correo, Contraseña, FotoPerfil, CursosAnclados, ChatsAnclados, Notificaciones, Rol, Permisos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [nombre, apellidos, correo, contraseñaHash, fotoPerfil, cursosAnclados, chatsAnclados, notificaciones, rol, permisos]);
    return result.insertId;
}

// Modificar la contraseña de un usuario
async function modificarContraseña(usuarioId, nuevaContraseña) {
    const [result] = await pool.query('UPDATE Usuarios SET Contraseña = ? WHERE ID = ?', [nuevaContraseña, usuarioId]);
    return result.affectedRows;
}

// Modificar el nombre de un usuario
async function modificarNombre(usuarioId, nuevoNombre) {
    const [result] = await pool.query('UPDATE Usuarios SET Nombre = ? WHERE ID = ?', [nuevoNombre, usuarioId]);
    return result.affectedRows;
}

// Modificar el apellido de un usuario
async function modificarApellido(usuarioId, nuevoApellido) {
    const [result] = await pool.query('UPDATE Usuarios SET Apellidos = ? WHERE ID = ?', [nuevoApellido, usuarioId]);
    return result.affectedRows;
}

// Modificar la foto de perfil
async function modificarFotoPerfil(usuarioId, nuevaFotoPerfil) {
    const [result] = await pool.query('UPDATE Usuarios SET FotoPerfil = ? WHERE ID = ?', [nuevaFotoPerfil, usuarioId]);
    return result.affectedRows;
}

// Modificar los cursos anclados de un usuario
async function modificarCursosAnclados(usuarioId, nuevosCursosAnclados) {
    const [result] = await pool.query('UPDATE Usuarios SET CursosAnclados = ? WHERE ID = ?', [nuevosCursosAnclados, usuarioId]);
    return result.affectedRows;
}

// Modificar los chats anclados de un usuario
async function modificarChatsAnclados(usuarioId, nuevosChatsAnclados) {
    const [result] = await pool.query('UPDATE Usuarios SET ChatsAnclados = ? WHERE ID = ?', [nuevosChatsAnclados, usuarioId]);
    return result.affectedRows;
}

// Modificar las notificaciones de un usuario
async function modificarNotificaciones(usuarioId, nuevasNotificaciones) {
    const [result] = await pool.query('UPDATE Usuarios SET Notificaciones = ? WHERE ID = ?', [nuevasNotificaciones, usuarioId]);
    return result.affectedRows;
}

// Modificar el rol de un usuario
async function modificarRol(usuarioId, nuevoRol) {
    const [result] = await pool.query('UPDATE Usuarios SET Rol = ? WHERE ID = ?', [nuevoRol, usuarioId]);
    return result.affectedRows;
}

// Modificar los permisos de un usuario
async function modificarPermisos(usuarioId, nuevosPermisos) {
    const [result] = await pool.query('UPDATE Usuarios SET Permisos = ? WHERE ID = ?', [nuevosPermisos, usuarioId]);
    return result.affectedRows;
}

// Crear un curso
async function crearCurso(nombre, descripcion, foro, permisosCurso) {
    const [result] = await pool.query('INSERT INTO Cursos (Nombre, Descripcion, Foro, PermisosCurso) VALUES (?, ?, ?, ?)', [nombre, descripcion, foro, permisosCurso]);
    return result.insertId;
}

// Modificar la variable foro de un curso
async function modificarForo(cursoId, nuevoForo) {
    const [result] = await pool.query('UPDATE Cursos SET Foro = ? WHERE ID = ?', [nuevoForo, cursoId]);
    return result.affectedRows;
}

// Modificar los permisos del curso
async function modificarPermisosCurso(cursoId, nuevosPermisosCurso) {
    const [result] = await pool.query('UPDATE Cursos SET PermisosCurso = ? WHERE ID = ?', [nuevosPermisosCurso, cursoId]);
    return result.affectedRows;
}

// Obtener los cursos de un usuario
async function obtenerCursosDeUsuario(usuarioId) {
    const [rows] = await pool.query('SELECT C.* FROM Cursos C INNER JOIN UsuarioCurso UC ON C.ID = UC.CursoID WHERE UC.UsuarioID = ?', [usuarioId]);
    return rows;
}

// Crear un chat
async function crearChat(mensajes, usuario1, usuario2) {
    const [result] = await pool.query('INSERT INTO Chats (Mensajes, Usuario1, Usuario2) VALUES (?, ?, ?)', [mensajes, usuario1, usuario2]);
    return result.insertId;
}

// Obtener los chats de un usuario
async function obtenerChatsDeUsuario(usuarioId) {
    const [rows] = await pool.query('SELECT * FROM Chats WHERE Usuario1 = ? OR Usuario2 = ?', [usuarioId, usuarioId]);
    return rows;
}

// Obtener los mensajes de un chat
async function obtenerMensajesDeChat(chatId) {
    const [rows] = await pool.query('SELECT Mensajes FROM Chats WHERE ID = ?', [chatId]);
    return rows[0];
}

// Modificar los mensajes de un chat
async function modificarMensajesChat(chatId, nuevosMensajes) {
    const [result] = await pool.query('UPDATE Chats SET Mensajes = ? WHERE ID = ?', [nuevosMensajes, chatId]);
    return result.affectedRows;
}


module.exports = {
    obtenerTodosLosUsuarios,
    obtenerUsuarioPorCorreo,
    obtenerCienUsuarios,
    crearUsuario,
    modificarContraseña,
    modificarNombre,
    modificarApellido,
    modificarFotoPerfil,
    modificarCursosAnclados,
    modificarChatsAnclados,
    modificarNotificaciones,
    modificarRol,
    modificarPermisos,
    crearCurso,
    modificarForo,
    modificarPermisosCurso,
    obtenerCursosDeUsuario,
    crearChat,
    obtenerChatsDeUsuario,
    obtenerMensajesDeChat,
    modificarMensajesChat
};
