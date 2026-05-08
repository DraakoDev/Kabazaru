import { pool } from '../db/conexion.js'
import { INSERTAR_PERSONA } from '../db/queries/persona.queries.js'
import { INSERTAR_USUARIO, SELECCIONAR_USUARIO } from '../db/queries/user.queries.js'
import bcrypt from 'bcrypt'

export const getUserInDB = async (user) => {
  const data = await pool.query(SELECCIONAR_USUARIO, user)
  return data[0]
}

export const passwordMatches = async (clientPassword, bdUserPassword) => {
  return await bcrypt.compare(clientPassword, bdUserPassword)
}

export const checkLogin = async ({ username, password }) => {
  const user = await getUserInDB(username)
  if (user === undefined) throw new Error('El usuario no esta registrado')
  const isValid = await passwordMatches(password, user.contrasena)
  if (!isValid) throw new Error('La contrasena es incorrecta')

  const { contrasena: _, ...publicUser } = user
  return publicUser
}

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
      persona.tipo_usuario.toUpperCase()
    ])

    await conexion.commit()

    const { password: _, ...newUser } = persona

    return newUser
  } catch (error) {
    if (conexion) await conexion.rollback()

    if (error.code === 'ER_DUP_ENTRY') {
      if (error.message.includes('PRIMARY')) throw new Error('Ya hay un usuario registrado con ese numero de cedula')

      if (error.message.includes('correo')) throw new Error('Ya existe un usuario registrado con ese correo electronico')

      if (error.message.includes('nombre_usuario')) throw new Error('Ya existe un usuario registrado con ese nombre de usuario')
    }

    console.log(error.message)
    throw new Error('El usuario no pudo ser creado!!!')
  } finally {
    if (conexion) conexion.release()
  }
}
