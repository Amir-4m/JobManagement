import React from 'react';
import {TableContainer, TableHeader, TableCell} from './table.styles';
import {Job} from "../../pages/Jobs/services/jobsApi";
import {Link} from "react-router-dom";

const Table = ({data}: { data: Job[] }) => {
    const tableRows = data.map((row, index) => (
        <tr key={index}>
            <TableCell>{row.customerName}</TableCell>
            <TableCell>{row.appointmentDate}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.jobType}</TableCell>
            <TableCell>{row.technician}</TableCell>
            <TableCell>
                <Link to={`/jobs/${row.id}`}>
                    View
                </Link>
            </TableCell></tr>
    ));
    return (
        <TableContainer>
            <thead>
            <tr>
                <TableHeader>Customer Name</TableHeader>
                <TableHeader>Appointment Date</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader>Job Type</TableHeader>
                <TableHeader>Technician</TableHeader>
                <TableHeader>Actions</TableHeader>
            </tr>
            </thead>
            <tbody>{tableRows}</tbody>
        </TableContainer>
    );
}

export default Table;