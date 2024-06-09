import axios from 'axios';

const BASE_URL = 'http://localhost:8010/v1/core/jobs/';

export interface Job {
  id: number;
  customerName: string;
  appointmentDate: string;
  status: string;
  isActive: boolean;
  jobType: string;
  technician: string;
}

export interface JobResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Job[];
}

export const fetchJobs = async (page: number): Promise<JobResponse> => {
  const response = await axios.get<JobResponse>(`${BASE_URL}?page=${page}`);
  return response.data;
};

export const fetchJobById = async (id: number): Promise<Job> => {
  const response = await axios.get<Job>(`${BASE_URL}${id}/`);
  return response.data;
};

export const createJob = async (job: Partial<Job>): Promise<Job> => {
  const response = await axios.post<Job>(BASE_URL, job);
  return response.data;
};

export const updateJob = async (id: number, job: Partial<Job>): Promise<Job> => {
  const response = await axios.put<Job>(`${BASE_URL}${id}/`, job);
  return response.data;
};

export const deleteJob = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}${id}/`);
};
