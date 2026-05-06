import { crearUsuario } from "../model/usuario.model";

export const registrarUsuario = async (req, res) => {
    const data = req.body;
    crearUsuario(data);
    console.log(req.body);
    res.json({ ok: true });
}