import express from 'express'
import { registrarUsuario } from '../controllers/usuario.controller.js'
const router = express.Router()

router.post('/register', registrarUsuario)
// router.post('/login');

export default router
