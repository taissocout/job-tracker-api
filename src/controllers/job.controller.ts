import { Request, Response } from "express";
import { JobService } from "../services/job.service";
import { JobRepository } from "../repositories/job.repository";
import { ApiResponse } from "../utils/apiResponse";

const jobRepository = new JobRepository();
const jobService = new JobService(jobRepository);

export class JobController {
  create(req: Request, res: Response) {
    const job = jobService.create(req.body);

    return res.status(201).json(new ApiResponse(true, job));
  }

  findAll(req: Request, res: Response) {
    const jobs = jobService.findAll();

    return res.status(200).json(new ApiResponse(true, jobs));
  }
}
