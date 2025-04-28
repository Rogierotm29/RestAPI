import { Router } from "express";
import { loginUser } from "../controllers/auth.controllers.js";

const router = Router();

router.post('/', loginUser);  // Login de usuario

export default router;
