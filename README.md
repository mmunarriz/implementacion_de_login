# Implementación de login:

Aspectos a incluir
Deberá contar con todas las vistas realizadas en el hands on lab, así también como las rutas de router 
para procesar el registro y el login. 
Una vez completado el login, realizar la redirección directamente a la vista de productos.
Agregar a la vista de productos un mensaje de bienvenida con los datos del usuario.
Agregar validaciones a las rutas de vistas para que, si aún no estoy logueado, no pueda entrar a ver mi 
perfil, y si ya estoy logueado, no pueda volver a loguearme o registrarme.

## Instrucciones:

Instalar dependencias: npm i

Ejecutar: npm start

## Ejemplos:

Vista Home:
GET http://localhost:8080/

Vista de login:
http://localhost:8080/login

Vista de registro:
http://localhost:8080/register

Vista de productos: (protegida)
http://localhost:8080/products

Vista de perfil: (protegida)
http://localhost:8080/profile

NOTA: si el usuario ya está logueado, no puede volver a loguearse o registrarse.
En ambos casos el usuario es redirigido a la vista de perfil.

## Sistema de roles:

Rol de administrador:

- Usuario: adminCoder@coder.com
- Contraseña: adminCod3r123

Rol de usuario:

- Usuario: pepe@gmail.com
- Contraseña: 123456
