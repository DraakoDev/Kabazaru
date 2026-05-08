import express from 'express'
import router from './routes/login.routes.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(cookieParser()) // Convierte la cookie con el token JWT a un json
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(router)

export default app
