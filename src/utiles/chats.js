const db = require('../config/database');

async function crearChat(mensajes, usuario1, usuario2) {
    return await db.crearChat(mensajes, usuario1, usuario2);
}

async function obtenerChatsDeUsuario(usuarioId) {
    return await db.obtenerChatsDeUsuario(usuarioId);
}

async function obtenerMensajesDeChat(chatId) {
    return await db.obtenerMensajesDeChat(chatId);
}

async function modificarMensajesChat(chatId, nuevosMensajes) {
    return await db.modificarMensajesChat(chatId, nuevosMensajes);
}

module.exports = {
    crearChat,
    obtenerChatsDeUsuario,
    obtenerMensajesDeChat,
    modificarMensajesChat
};
