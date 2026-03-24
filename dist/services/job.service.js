"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobService = void 0;
const uuid_1 = __importDefault(require("uuid"));
const { v4: uuidv4 } = uuid_1.default;
class JobService {
    constructor(jobRepository) {
        this.jobRepository = jobRepository;
    }
    create(data) {
        const now = new Date();
        const job = {
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
    findAll() {
        return this.jobRepository.findAll();
    }
}
exports.JobService = JobService;
