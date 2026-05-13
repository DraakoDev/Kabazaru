export const INSERTAR_PERSONA = 'INSERT INTO persona VALUES (?, ?, ?, ?, ?, ?)'
export const BUSCAR_PERSONA = 'SELECT * FROM persona WHERE cedula = ?'
export const LISTAR_PERSONAS = 'SELECT * FROM persona'
export const ACTUALIZAR_PERSONA = 'UPDATE persona SET nombre = ?, apellido = ?, direccion = ?, telefono = ?, correo = ? WHERE cedula = ?'
export const ELIMINAR_PERSONA = 'DELETE FROM persona WHERE cedula = ?'
export const LISTAR_VENDEDORES = `SELECT p.cedula, p.nombre, p.apellido, p.direccion, p.telefono, p.correo, u.nombre_usuario, u.tipo FROM persona p
  INNER JOIN usuario u ON p.cedula = u.cedula
  WHERE u.tipo = 'vendedor'`
