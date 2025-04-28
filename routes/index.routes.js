import { Router } from "express";
import { saludo, ping, marco, abc } from "../controllers/index.controllers.js";


const router = Router();

router.get('/', (req, res) => {
    res.send('Bienvenido a la API');
});

router.get('/saludo', saludo);
router.get('/ping', ping);
router.get('/marco', marco);
router.get('/abc', abc);

export default router;
