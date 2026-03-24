import express from "express";
import dotenv from "dotenv";
import { jobRoutes } from "./routes/job.routes.js"; // note o .js aqui para ESM
import { errorMiddleware } from "./middlewares/error.middleware.js";

// Carrega variáveis do .env
dotenv.config();

const app = express();
app.use(express.json());

// Rotas
app.use("/jobs", jobRoutes);

// Middleware de erro
app.use(errorMiddleware);

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});