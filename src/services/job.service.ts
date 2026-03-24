import pkg from "uuid";
import { Job } from "../models/job.model";
import { JobRepository } from "../repositories/job.repository";

const { v4: uuidv4 } = pkg;

interface CreateJobDTO {
  title: string;
  company: string;
  location: string;
  salary?: number;
  notes?: string;
}

export class JobService {
  constructor(private jobRepository: JobRepository) {}

  create(data: CreateJobDTO): Job {
    const now = new Date();

    const job: Job = {
      id: uuidv4(),
      title: data.title,
      company: data.company,
      location: data.location,
      salary: data.salary,
      notes: data.notes,
      status: "SAVED",
      createdAt: now,
      updatedAt: now,
    };

    return this.jobRepository.create(job);
  }

  findAll(): Job[] {
    return this.jobRepository.findAll();
  }
}
