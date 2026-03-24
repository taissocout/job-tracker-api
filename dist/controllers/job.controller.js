"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobController = void 0;
const job_service_1 = require("../services/job.service");
const job_repository_1 = require("../repositories/job.repository");
const apiResponse_1 = require("../utils/apiResponse");
const jobRepository = new job_repository_1.JobRepository();
const jobService = new job_service_1.JobService(jobRepository);
class JobController {
    create(req, res) {
        const job = jobService.create(req.body);
        return res.status(201).json(new apiResponse_1.ApiResponse(true, job));
    }
    findAll(req, res) {
        const jobs = jobService.findAll();
        return res.status(200).json(new apiResponse_1.ApiResponse(true, jobs));
    }
}
exports.JobController = JobController;
