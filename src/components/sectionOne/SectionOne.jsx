import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './sectionone.css';
import { useNavigate } from 'react-router-dom';

const SectionOne = () => {
    const navigate = useNavigate();
    return (
        <div className='sectionOneMain'>
            <Container maxWidth='xl' className='container'>
                <Box sx={{ width: '100%' }} className='boxOne'>
                    <Typography variant="h3" gutterBottom className='boxOneHeading'>
                        Who are you?
                    </Typography>
                </Box>

                <Box sx={{ width: '100%' }} className='boxTwo'>
                    <div className="jobseeker">
                        <img src="./images/jobsearch.jpg" alt="jobsearch" srcset="" />
                        <button onClick={()=> navigate('/find')}>I'm a job seeker</button>                   
                    </div>
                    <div className="jobposter">
                        <img src="./images/hiring.jpg" alt="hr" srcset="" />
                        <button onClick={()=> navigate('/post')}>I'm a hiring manager</button>    
                    </div>
                </Box>
            </Container>

        </div>
    )
}

export default SectionOne;