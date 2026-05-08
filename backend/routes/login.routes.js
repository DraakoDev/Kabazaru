import express from 'express'
import { registrarUsuario, logearUsuario, vercookie } from '../controllers/usuario.controller.js'
import { checkToken } from '../middlewares/user.auth.js'
const router = express.Router()

router.post('/register', registrarUsuario)
router.post('/login', logearUsuario)
router.post('/seller', checkToken, vercookie)

export default router
