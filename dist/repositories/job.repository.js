"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobRepository = void 0;
class JobRepository {
    constructor() {
        this.jobs = [];
    }
    create(job) {
        this.jobs.push(job);
        return job;
    }
    findAll() {
        return this.jobs;
    }
}
exports.JobRepository = JobRepository;
