const express = require('express');
const router = express.Router();
// Importa aquí los controladores o la lógica necesaria

const chatsController = require('./chats'); // Asegúrate de que este archivo exista y tenga las funciones necesarias
const coursesController = require('./cursos'); // Asegúrate de tener este archivo

// Ruta para obtener los cursos de un usuario
router.get('/chats/:usuarioId', async (req, res) => {
    try {
        const usuarioId = req.params.usuarioId;
        const cursos = await chatsController.obtenerChatsDeUsuario(usuarioId);
        res.json(cursos);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor');
    }
});

module.exports = router;


// Ruta para obtener los cursos de un usuario
router.get('/api/cursos/:usuarioId', async (req, res) => {
    try {
        const usuarioId = req.params.usuarioId;
        const cursos = await coursesController.obtenerCursosDeUsuario(usuarioId);
        res.json(cursos);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor');
    }
});

module.exports = router;

router.get('/notificaciones/:usuarioId', async (req, res) => {
    try {
        const usuarioId = req.params.usuarioId;
        const notificaciones = await usersController.obtenerNotificaciones(usuarioId);
        res.json(notificaciones);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor');
    }
});

module.exports = router;