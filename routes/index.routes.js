import { Router } from "express";
import { saludo, ping, marco, abc } from "../controllers/index.controller.js";

const router = Router();

router.get("/", saludo);
router.get("/ping", ping);
router.get("/marco", marco);
router.get("/abc", abc);

export default router;
