export type JobStatus = "SAVED" | "APPLIED" | "INTERVIEW" | "REJECTED";

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: number;
  status: JobStatus;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}
