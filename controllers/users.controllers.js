import pool from "../db/db.js";

export const getUsers = async (req, res) => {
  const [rows] = await pool.query('SELECT id, nombre, correo, fecha_creacion, ultimo_login FROM Usuarios');
  res.json(rows);
};

export const createUser = async (req, res) => {
  const { nombre, correo, contraseña } = req.body;
  await pool.query(
    'INSERT INTO Usuarios (nombre, correo, contraseña) VALUES (?, ?, MD5(?))',
    [nombre, correo, contraseña]
  );
  res.json({ message: 'Usuario creado' });
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { nombre, correo } = req.body;
  await pool.query(
    'UPDATE Usuarios SET nombre = ?, correo = ? WHERE id = ?',
    [nombre, correo, id]
  );
  res.json({ message: 'Usuario actualizado' });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM Usuarios WHERE id = ?', [id]);
  res.json({ message: 'Usuario eliminado' });
};
