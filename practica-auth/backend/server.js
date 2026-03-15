const express = require('express');
const cors = require('cors');
const { auth } = require('express-oauth2-jwt-bearer');

const app = express();

// CORS más permisivo para evitar bloqueos del navegador
app.use(cors()); 

// Middleware de validación de Keycloak
const checkJwt = auth({
  audience: 'account',
  issuerBaseURL: 'http://localhost:8080/realms/LaboratorioDev.',
  tokenSigningAlg: 'RS256'
});

app.get('/api/publico', (req, res) => {
  res.json({ mensaje: 'Este es un endpoint público' });
});

app.get('/api/privado', checkJwt, (req, res) => {
  res.json({ 
    mensaje: '¡Acceso concedido! Datos protegidos recuperados con éxito.',
    usuario: req.auth.payload.preferred_username,
    timestamp: new Date().toISOString()
  });
});

const PORT = 3000; // Forzamos el 3000 para evitar confusiones
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
