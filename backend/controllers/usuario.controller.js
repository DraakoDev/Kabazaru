import { checkLogin, crearUsuario } from '../model/usuario.model.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const registrarUsuario = async (req, res) => {
  const data = req.body
  try {
    const usuario = await crearUsuario(data)
    res.status(201).send({
      success: true,
      user: usuario
    })
  } catch (error) {
    res.status(400).send({ success: false, error: error.message })
  }
}

export const logearUsuario = async (req, res) => {
  const { username, password } = req.body

  try {
    const loginData = await checkLogin({ username, password })
    const token = jwt.sign(
      { username: loginData.nombre_usuario, tipo: loginData.tipo },
      process.env.SECRET_JWT_KEY)

    res
      .cookie('access_token', token, {
        httpOnly: true,
        sameSite: 'strict'
      })
      .send({ success: true, usuario: loginData })
  } catch (error) {
    res.status(401).send({ success: false, error: error.message })
  }
}

export const vercookie = (req, res) => {
  console.log(req.session)
  if (req.session.user === null) return res.status(401).send({ session: 'non-active' })
  res.status(200).send({ session: 'active' })
}
