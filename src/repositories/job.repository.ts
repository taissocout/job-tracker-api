import { Job } from "../models/job.model";

export class JobRepository {
  private jobs: Job[] = [];

  create(job: Job): Job {
    this.jobs.push(job);
    return job;
  }

  findAll(): Job[] {
    return this.jobs;
  }
}
