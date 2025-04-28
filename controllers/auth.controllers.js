import pool from "../db/db.js";

export const loginUser = async (req, res) => {
  const { correo, contraseña } = req.body;
  
  const [rows] = await pool.query(
    'SELECT * FROM Usuarios WHERE correo = ? AND contraseña = MD5(?)',
    [correo, contraseña]
  );

  if (rows.length > 0) {
    // Si login exitoso, actualiza el campo ultimo_login
    await pool.query(
      'UPDATE Usuarios SET ultimo_login = CURRENT_TIMESTAMP WHERE id = ?',
      [rows[0].id]
    );
    res.json({ message: 'Login exitoso' });
  } else {
    res.status(401).json({ message: 'Credenciales inválidas' });
  }
};
