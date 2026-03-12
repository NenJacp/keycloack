# Flujo de Implementación de Autenticación con Keycloak

Este documento describe el proceso seguido para configurar la autenticación, el MFA y la protección de una API utilizando Keycloak.

## 1. Configuración del Servidor y Realm
Se inició el servidor de Keycloak utilizando Docker Compose y se creó el Realm **LaboratorioDev.** (nótese el punto al final).

*   **Imagen:** `CrearRealm.png` - Creación del entorno aislado para la aplicación.
*   **Imagen:** `Panel.png` - Vista general del panel de administración de Keycloak.

## 2. Gestión de Clientes y Usuarios
Se configuró el cliente para el backend y se creó un usuario de prueba.

*   **Imagen:** `CrearClient1.png` y `CrearClient2.png` - Configuración del cliente `backend-api`.
*   **Imagen:** `setAccessGrant.png` - Activación de *Direct Access Grants* para permitir el flujo de contraseña desde Postman.
*   **Imagen:** `CrearUser1.png` - Creación del usuario `estudiante1`.
*   **Imagen:** `SetUserPassword.png` - Configuración de la contraseña inicial (no temporal).

## 3. Implementación de MFA (Multi-Factor Authentication)
Se obligó al usuario a utilizar un segundo factor de autenticación.

*   **Imagen:** `SetBrowser.png` - Configuración del flujo de autenticación del navegador.
*   **Imagen:** `SetOTPEnUser.png` - Activación del OTP (One-Time Password) como requerimiento para el usuario.
*   **Imagen:** `LlenarElForm.png` - Actualización de los datos del perfil del usuario requerida por Keycloak.
*   **Imagen:** `QR.png` - Escaneo del código QR con una aplicación de autenticación (Google Authenticator).
*   **Imagen:** `LlenarAuth.png` - Ingreso del código de 6 dígitos generado por el celular para completar el acceso.

## 4. Validación en el Backend y Pruebas con Postman
Se verificó que la API protegida solo permitiera el acceso con un token válido emitido por Keycloak.

*   **Imagen:** `CuentaUser.png` - Acceso exitoso a la consola de cuenta del usuario tras el login con MFA.
*   **Imagen:** `PostmanToken.png` - Obtención exitosa del `access_token` mediante una petición POST al endpoint de Keycloak.
*   **Imagen:** `Postman_without_token.png` - Intento de acceso a la ruta `/api/privado` sin token, resultando en error `401 Unauthorized`.
*   **Imagen:** `Postman_with_token.png` - Acceso exitoso a la ruta `/api/privado` enviando el token en el encabezado de autorización.

---
**Resultado:** Se logró implementar un flujo completo de autenticación segura, incluyendo gestión de identidad, MFA y protección de recursos en una API Node.js.
