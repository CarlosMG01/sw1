const express = require('express');
const path = require('path');
const obtenerDatosRouter = require('./src/routes/obtener_datos.js');
const authRoutes = require('./authRoutes');



const app = express();

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', obtenerDatosRouter);
app.use('/api/auth', authRoutes);

// Rutas para servir archivos HTML
const htmlPages = [
    'chat', 'chats', 'contraseña_olvidada', 'crear_curso', 
    'curso', 'cursos', 'faq', 'index', 
    'modificar_contraseña', 'notificaciones', 'panel_de_administracion', 'perfil'
];

htmlPages.forEach(page => {
    app.get(`/${page}`, (req, res) => {
        res.sendFile(path.join(__dirname, `public/html/${page}.html`));
    });
});

// Ruta principal
app.get('/', (req, res) => {
    res.redirect('/index');
});

// Iniciar el servidor
const PORT = 80;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
