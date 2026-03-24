import { Router } from "express";
import { JobController } from "../controllers/job.controller";

const router = Router();
const controller = new JobController();

router.post("/", (req, res) => controller.create(req, res));
router.get("/", (req, res) => controller.findAll(req, res));

export { router as jobRoutes };
