import { pool } from '../db/conexion.js'
import { INSERTAR_PERSONA } from '../db/queries/persona.queries.js'
import { INSERTAR_USUARIO } from '../db/queries/user.queries.js'
import bcrypt from 'bcrypt'

export const crearPersona = async (conexion, persona) => {
  return await conexion.query(INSERTAR_PERSONA, [
    persona.cedula,
    persona.nombre,
    persona.apellido,
    persona.direccion,
    persona.telefono,
    persona.correo
  ])
}

export const crearUsuario = async (persona) => {
  let conexion

  try {
    conexion = await pool.getConnection()

    await conexion.beginTransaction()

    await crearPersona(conexion, persona)

    const hashedPassword = await bcrypt.hash(persona.password, 8)

    await conexion.query(INSERTAR_USUARIO, [
      persona.cedula,
      persona.username,
      hashedPassword,
      'CLIENTE'
    ])

    await conexion.commit()

    const { password: _, ...newUser } = persona

    return newUser
  } catch (error) {
    if (conexion) await conexion.rollback()

    if (error.code === 'ER_DUP_ENTRY') {
      if (error.message.includes('PRIMARY')) throw new Error('El usuario ya existe')

      if (error.message.includes('correo')) throw new Error('Ya existe un usuario registrado con ese correo electronico')
    }
    throw new Error('El usuario no pudo ser creado!!!')
  } finally {
    if (conexion) conexion.release()
  }
}
