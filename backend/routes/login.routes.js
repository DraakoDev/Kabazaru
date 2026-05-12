import express from 'express'
import { registrarUsuario, logearUsuario, checkAuth, logout } from '../controllers/usuario.controller.js'
import { checkToken } from '../middlewares/user.auth.js'
const router = express.Router()

router.post('/register', registrarUsuario)
router.post('/login', logearUsuario)
router.post('/getAuth', checkToken, checkAuth)
router.post('/logout', checkToken, logout)

export default router
