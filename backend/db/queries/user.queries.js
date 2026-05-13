export const INSERTAR_USUARIO = 'INSERT INTO usuario VALUES (? ,?, ?, ?)'
export const SELECCIONAR_USUARIO = 'SELECT * FROM usuario WHERE nombre_usuario = ?'
export const REPASSWORD = 'UPDATE usuario SET contrasena = ? WHERE nombre_usuario = ?'
