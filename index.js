import "dotenv/config"
import express from "express";
import indexRoutes from "./routes/index.routes.js";
import userRoutes from "./routes/users.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(express.json());

// Rutas
app.use(indexRoutes);
app.use('/users', userRoutes);
app.use('/login', authRoutes);

const port = 1000;
app.listen(port, () => {
  console.log("Servidor corriendo en http://localhost:" + port);
});
