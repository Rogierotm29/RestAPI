import { Router } from "express";
import { loginUser } from "../controllers/auth.controllers.js";

const router = Router();

router.post("/", loginUser);

export default router;
