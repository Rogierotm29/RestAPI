import { Router } from "express";
import { getUsers, createUser, updateUser, deleteUser } from "../controllers/users.controllers.js";

const router = Router();

router.get('/', getUsers);       // Obtener usuarios
router.post('/', createUser);    // Crear usuario
router.put('/:id', updateUser);  // Actualizar usuario
router.delete('/:id', deleteUser); // Eliminar usuario

export default router;
