import { pool } from "../db/conexion.js";
import { INSERTAR_PERSONA } from "../db/queries/persona.queries.js";
import { INSERTAR_USUARIO } from "../db/queries/user.queries.js";

export const crearPersona = async (conexion, persona) => {
  return await conexion.query(INSERTAR_PERSONA, [
    persona.cedula,
    persona.nombre,
    persona.apellido,
    persona.direccion,
    persona.telefono,
    persona.correo,
  ]);
};

export const crearUsuario = async (persona) => {
  let conexion;

  try {
    conexion = await pool.getConnection();

    await conexion.beginTransaction();

    await crearPersona(conexion, persona);

    await conexion.query(INSERTAR_USUARIO, [
      persona.cedula,
      persona.username,
      persona.password,
      "CLIENTE",
    ]);

    await conexion.commit();

    return { message: "El usuario fue registrado existosamente" };
  } catch (error) {
    if (conexion) await conexion.rollback();
    throw error;
  } finally {
    if (conexion) conexion.release();
  }
};
