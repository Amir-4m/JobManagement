import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {updateJob, fetchJobById,deleteJob , Job} from "./services/jobsApi";
import { useNavigate } from 'react-router-dom';
import {Button, DeleteButton, FormGroup, FormTitle, FormWrapper, Input, Label} from "./jobForm.styles";
import {AxiosError} from "axios";
import {Select} from "./jobDetails.styles";

const JobDetails: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const [job, setJob] = useState<Job | null>(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        customer: job ? job.customerName : '',
        appointmentDate: job ? new Date(job.appointmentDate).toLocaleString('en-CA', {timeZone: 'UTC'}).slice(0, -3) : '',
        status: job ? job.status : '',
        isActive: true,
        jobType: job ? job.jobType : '',
        technician: job ? job.technician : ''
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (job) {
            try {
                await updateJob(job.id, formData);
                // Optionally navigate to job list or show a success message
                alert('Job updated successfully');
            } catch (error) {
                if (error instanceof AxiosError) {
                    console.error('Axios error:', error);
                    alert(`${Object.values(error.response?.data) || error.message}`);
                } else {
                    console.error('Unknown error:', error);
                }
            }
        }
    };

        const handleDelete = async (e: React.FormEvent) => {
        e.preventDefault();
        if (job) {
            try {
                await deleteJob(job.id);
                // Optionally navigate to job list or show a success message
                alert('Job deleted successfully');
                navigate("/");
            } catch (error) {
                if (error instanceof AxiosError) {
                    console.error('Axios error:', error);
                    alert(`${Object.values(error.response?.data) || error.message}`);
                } else {
                    console.error('Unknown error:', error);
                }
            }
        }
    };
    useEffect(() => {
        const getJob = async () => {
            if (id) {
                const job = await fetchJobById(parseInt(id));
                setJob(job);
                setFormData(
                    {
                        customer: job ? job.customerName : '',
                        appointmentDate: job ? new Date(job.appointmentDate).toLocaleString('en-CA', {timeZone: 'UTC'}).slice(0, -3) : '',
                        status: job ? job.status : '',
                        isActive: true,
                        jobType: job ? job.jobType : '',
                        technician: job ? job.technician : ''
                    }
                )
            }
        };

        getJob();
    }, [id]);

    if (!job) return <div>Loading...</div>;

    return (
        job && <FormWrapper>
            <form onSubmit={handleSubmit}>
                <FormTitle>Update Job</FormTitle>
                <FormGroup>
                    <Label>Customer Name</Label>
                    <Input type="text" name="customer" value={formData.customer} defaultValue={job.customerName}
                           onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>Appointment Date</Label>
                    <Input type="datetime-local" name="appointmentDate" defaultValue={job.appointmentDate}
                           value={formData.appointmentDate}
                           onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>Job Type</Label>
                    <Input type="text" name="jobType" value={formData.jobType} defaultValue={job.jobType}
                           onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>Status</Label>
                    <Select name="status" value={formData.status} onChange={handleChange}>
                        <option value="scheduled">Scheduled</option>
                        <option value="completed">Completed</option>
                    </Select>
                </FormGroup>
                <FormGroup>
                    <Label>Technician</Label>
                    <Input type="text" name="technician" value={formData.technician} defaultValue={job.technician}
                           onChange={handleChange}/>
                </FormGroup>
                <Button type="submit">Submit</Button>
                <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
            </form>
        </FormWrapper>
    );
};

export default JobDetails;
