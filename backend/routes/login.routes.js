import express from 'express'
import { registrarUsuario, logearUsuario, checkAuth, logout, enviarCorreoRecuperacion, repassword, borrarUsuario } from '../controllers/usuario.controller.js'
import { checkToken } from '../middlewares/user.auth.js'
const router = express.Router()

router.post('/register', registrarUsuario)
router.post('/login', logearUsuario)
router.post('/getAuth', checkToken, checkAuth)
router.post('/logout', checkToken, logout)
router.post('/forgot-password', enviarCorreoRecuperacion)
router.post('/reset-password/:token', repassword)
router.delete('/borrar/usuario/:username', borrarUsuario)

export default router
