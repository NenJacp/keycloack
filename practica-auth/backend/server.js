const express = require('express');
const { auth } = require('express-oauth2-jwt-bearer');
const app = express();

// Middleware de validación de Keycloak
const checkJwt = auth({
  audience: 'account', // Audience por defecto en Keycloak
  issuerBaseURL: 'http://localhost:8080/realms/LaboratorioDev.',
  tokenSigningAlg: 'RS256'
});

app.get('/api/publico', (req, res) => {
  res.json({ mensaje: "Este contenido es libre." });
});

// RUTA PROTEGIDA
app.get('/api/privado', checkJwt, (req, res) => {
  res.json({
    mensaje: "Acceso con cedido",
    usuario: "Token validado correctamente por Keycloak"
  });
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
