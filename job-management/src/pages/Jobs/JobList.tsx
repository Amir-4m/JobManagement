import React, {useEffect, useState} from 'react';
import {fetchJobs, Job} from "./services/jobsApi";
import manLogo from '../../assets/homecover.png'
import Table from "../../components/Table/table";
import {
    Count,
    DataTableContainer,
    DataTableContent, DataTableHeader, HeaderImage, ImageContainer,
    PaginationButton,
    PaginationContainer,
    Title
} from "./jobList.styles";

const JobList: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [count, setCount] = useState(0);
    const [next, setNext] = useState<string | null>(null);
    const [previous, setPrevious] = useState<string | null>(null);
    const [page, setPage] = useState(1);


    useEffect(() => {
        const getJobs = async () => {
            const data = await fetchJobs(page);
            setJobs(data.results);
            setCount(data.count);
            setNext(data.next);
            setPrevious(data.previous);
        };

        getJobs();
    }, [page]);

    const handleNext = () => {
        if (next) setPage((prevPage) => prevPage + 1);
    };

    const handlePrevious = () => {
        if (previous) setPage((prevPage) => prevPage - 1);
    };

    return (
        <DataTableContainer>
            <DataTableHeader>
                    <h1>Welcome to Job Management <span>Platform</span></h1>
                    <p>Efficiently manage all your maintenance jobs in one place.</p>
                    <ImageContainer>
                        <HeaderImage src={manLogo}/>
                    </ImageContainer>
                </DataTableHeader>
            <DataTableContent>
                <Title>Job List</Title>
                <Count>Total Jobs: {count}</Count>
                <Table data={jobs}/>
                <PaginationContainer>
                    <PaginationButton onClick={handlePrevious} disabled={!previous}>
                        Previous
                    </PaginationButton>
                    <PaginationButton onClick={handleNext} disabled={!next}>
                        Next
                    </PaginationButton>
                </PaginationContainer>
            </DataTableContent>
        </DataTableContainer>
    );
};

export default JobList;
