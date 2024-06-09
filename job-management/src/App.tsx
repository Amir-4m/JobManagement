import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import JobList from "./pages/Jobs/JobList";
import JobDetails from "./pages/Jobs/JobDetails";
import JobForm from "./pages/Jobs/JobForm";
import Navigation from "./pages/Navigation/navigation";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigation/>}>
                    <Route index element={<JobList/>}/>
                    <Route path="/jobs/:id" element={<JobDetails/>}/>
                    <Route path="/add-job" element={<JobForm/>}/>
                </Route>

            </Routes>
        </Router>
    );
};

export default App;