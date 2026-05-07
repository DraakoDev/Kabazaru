import { crearUsuario } from '../model/usuario.model.js'

export const registrarUsuario = async (req, res) => {
  const data = req.body
  console.log(data)
  try {
    const usuario = await crearUsuario(data)
    res.status(201).json({
      success: true,
      user: usuario
    })
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
}
