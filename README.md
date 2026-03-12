# Flujo de Implementación de Autenticación con Keycloak

Este documento describe el proceso seguido para configurar la autenticación, el MFA y la protección de una API utilizando Keycloak.

## 1. Configuración del Servidor y Realm
Se inició el servidor de Keycloak utilizando Docker Compose y se creó el Realm **LaboratorioDev.** (nótese el punto al final).

*   **Creación del Realm:** 
    ![Crear Realm](img/CrearRealm.png)
*   **Vista del Panel:**
    ![Panel General](img/Panel.png)

## 2. Gestión de Clientes y Usuarios
Se configuró el cliente para el backend y se creó un usuario de prueba.

*   **Configuración del Cliente:**
    ![Cliente Parte 1](img/CrearClient1.png)
    ![Cliente Parte 2](img/CrearClient2.png)
*   **Activación de Direct Access Grants:**
    ![Direct Access](img/setAccessGrant.png)
*   **Creación del Usuario:**
    ![Crear Usuario](img/CrearUser1.png)
*   **Configuración de Contraseña:**
    ![Password](img/SetUserPassword.png)

## 3. Implementación de MFA (Multi-Factor Authentication)
Se obligó al usuario a utilizar un segundo factor de autenticación.

*   **Configuración del Flujo Browser:**
    ![Browser Flow](img/SetBrowser.png)
*   **Requerimiento de OTP:**
    ![Set OTP](img/SetOTPEnUser.png)
*   **Formulario de Perfil:**
    ![Update Profile](img/LlenarElForm.png)
*   **Configuración de QR:**
    ![QR Code](img/QR.png)
*   **Verificación de Código:**
    ![Verify OTP](img/LlenarAuth.png)

## 4. Validación en el Backend y Pruebas con Postman
Se verificó que la API protegida solo permitiera el acceso con un token válido emitido por Keycloak.

*   **Consola de Usuario exitosa:**
    ![Cuenta Usuario](img/CuentaUser.png)
*   **Obtención de Token en Postman:**
    ![Postman Token](img/PostmanToken.png)
*   **Acceso Denegado (Sin Token):**
    ![Sin Token](img/Postman_without_token.png)
*   **Acceso Concedido (Con Token):**
    ![Con Token](img/Postman_with_token.png)

---
**Resultado:** Se logró implementar un flujo completo de autenticación segura, incluyendo gestión de identidad, MFA y protección de recursos en una API Node.js.
