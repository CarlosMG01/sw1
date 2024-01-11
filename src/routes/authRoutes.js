const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const usersController = require('./users'); // Asegúrate de tener las funciones necesarias en este archivo
const nodemailer = require('nodemailer');

//Servicio de correo
const transporter = nodemailer.createTransport({
    service: 'gmail', // Por ejemplo, para Gmail
    auth: {
        user: 'eacademy.no.reply@gmail.com',
        pass: 'Contrasena123*'
    }
});


router.post('/login', async (req, res) => {
    const { correo, contraseña } = req.body;
    try {
        const usuario = await usersController.obtenerUsuarioPorCorreo(correo);
        if (usuario && bcrypt.compareSync(contraseña, usuario.contraseñaHash)) {
            // Usuario autenticado con éxito
            res.json({ success: true, message: 'Inicio de sesión exitoso' });
            // Aquí puedes añadir más lógica, como crear un token JWT
        } else {
            res.status(401).json({ success: false, message: 'Correo o contraseña incorrectos' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor');
    }
});

router.post('/cambiar-contraseña', async (req, res) => {
    const { usuarioId, contraseñaActual, nuevaContraseña } = req.body;
    try {
        const usuario = await usersController.obtenerUsuarioPorId(usuarioId);
        if (usuario && bcrypt.compareSync(contraseñaActual, usuario.contraseñaHash)) {
            const nuevaContraseñaHash = bcrypt.hashSync(nuevaContraseña, 10);
            await usersController.cambiarContraseña(usuarioId, nuevaContraseñaHash);
            res.json({ success: true, message: 'Contraseña actualizada con éxito' });
        } else {
            res.status(401).json({ success: false, message: 'Contraseña actual incorrecta' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor');
    }
});

router.post('/solicitar-cambio-contraseña', async (req, res) => {
    const { email } = req.body;
    const codigo = generarCodigo(); // Implementa esta función para generar un código

    // Aquí, guarda el código en la base de datos asociado al usuario

    const mailOptions = {
        from: 'tuCorreo@gmail.com',
        to: email,
        subject: 'Código de Recuperación de Contraseña',
        text: `Tu código de recuperación es: ${codigo}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.status(500).send('Error al enviar el correo');
        } else {
            console.log('Email enviado: ' + info.response);
            res.send('Correo enviado');
        }
    });
});


module.exports = router;
