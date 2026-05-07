import express from 'express'
import { registrarUsuario, logearUsuario } from '../controllers/usuario.controller.js'
const router = express.Router()

router.post('/register', registrarUsuario)
router.post('/login', logearUsuario)

export default router
