import express from "express";
import { jobRoutes } from "./routes/job.routes";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(express.json());

app.use("/jobs", jobRoutes);

app.use(errorMiddleware);

export { app };
