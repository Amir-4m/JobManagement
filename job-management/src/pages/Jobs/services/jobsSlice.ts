import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Job } from './jobsApi';

interface JobsState {
  jobs: Job[];
  selectedJob: Job | null;
}

const initialState: JobsState = {
  jobs: [],
  selectedJob: null,
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs(state, action: PayloadAction<Job[]>) {
      state.jobs = action.payload;
    },
    selectJob(state, action: PayloadAction<Job | null>) {
      state.selectedJob = action.payload;
    },
  },
});

export const { setJobs, selectJob } = jobsSlice.actions;
export const jobsReducer = jobsSlice.reducer;