import React, {Fragment, useState} from "react";
import {createJob} from "./services/jobsApi";
import {Button, FormGroup, FormTitle, FormWrapper, Input, Label, Select} from "./jobForm.styles";
import {AxiosError} from "axios";


const JobForm: React.FC = () => {
    const [formData, setFormData] = useState({
        customer: '',
        appointmentDate: '',
        status: 'scheduled',
        isActive: true,
        jobType: '',
        technician: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createJob(formData);
            // Optionally navigate to job list or show a success message
            alert('Job created successfully');
        } catch (error) {
            if (error instanceof AxiosError) {
                console.error('Axios error:', error);
                alert(`${Object.values(error.response?.data) || error.message}`);
            } else {
                console.error('Unknown error:', error);
            }
        }
    };


    return (
        <FormWrapper>
            <form onSubmit={handleSubmit}>
                <FormTitle>Add Job</FormTitle>
                <FormGroup>
                    <Label>Customer Name</Label>
                    <Input type="text" name="customer" value={formData.customer} onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>Appointment Date</Label>
                    <Input type="datetime-local" name="appointmentDate" value={formData.appointmentDate}
                           onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>Job Type</Label>
                    <Input type="text" name="jobType" value={formData.jobType} onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>Technician</Label>
                    <Input type="text" name="technician" value={formData.technician} onChange={handleChange}/>
                </FormGroup>
                <Button type="submit">Submit</Button>
            </form>
        </FormWrapper>
    );
};

export default JobForm;