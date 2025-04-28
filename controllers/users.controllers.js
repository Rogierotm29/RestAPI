import pool from "../db/db.js";

export const getUsers = async (req, res, next) => {
    try {
        const [rows] = await pool.query("SELECT id, nombre, correo, fecha_creacion, ultimo_login FROM Usuarios");
        res.json(rows);
    } catch (error) {
        next(error);
    }
};

export const createUser = async (req, res, next) => {
    try {
        const { nombre, correo, contraseña } = req.body;
        if (!nombre || !correo || !contraseña) {
            return res.status(400).json({ error: "Faltan campos obligatorios" });
        }
        await pool.query(
            "INSERT INTO Usuarios (nombre, correo, contraseña) VALUES (?, ?, MD5(?))",
            [nombre, correo, contraseña]
        );
        res.status(201).json({ message: "Usuario creado exitosamente" });
    } catch (error) {
        next(error);
    }
};
