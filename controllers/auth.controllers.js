import pool from "../db/db.js";

export const loginUser = async (req, res, next) => {
    try {
        const { correo, contraseña } = req.body;
        const [rows] = await pool.query(
            "SELECT * FROM Usuarios WHERE correo = ? AND contraseña = MD5(?)",
            [correo, contraseña]
        );

        if (rows.length === 0) {
            return res.status(401).json({ error: "Credenciales inválidas" });
        }

        res.json({ message: "Login exitoso" });
    } catch (error) {
        next(error);
    }
};
