import * as React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './findajob.css';

const FindAJob = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className='findMain'>
      <div className="containerOne">
        <img src="./images/job3.jpg" alt="We are hiring" srcset="" />
        <span>Find Your Dream Job</span>
      </div>

      <div className="containerTwo">
        <Accordion className='accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className='accodion-summary'
          >
            <ul className='list'>
              <li className='title'>Full Stack Developer</li>
              <li className='company'>Google</li>
              <li className='Experience'>0-3 years</li>
              <li className='skills'>React.js, Node.js, Express.js</li>
            </ul>
            <div className='btn'>
              {
                isAuthenticated ?
                  <button className='enable'>Apply</button> :
                  <button className='disable' disabled>Apply</button>
              }
            </div>

          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

        <Accordion className='accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className='accodion-summary'
          >
            <ul className='list'>
              <li className='title'>Frontend Developer</li>
              <li className='company'>Microsoft</li>
              <li className='Experience'>0-2 years</li>
              <li className='skills'>HTML, CSS, JavaScript, Bootstrap, React.js</li>
            </ul>
            <div className='btn'>
              {
                isAuthenticated ?
                  <button className='enable'>Apply</button> :
                  <button className='disable' disabled>Apply</button>
              }
            </div>

          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

        <Accordion className='accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className='accodion-summary'
          >
            <ul className='list'>
              <li className='title'>Backend Developer</li>
              <li className='company'>Oracle</li>
              <li className='Experience'>3-5 years</li>
              <li className='skills'>Node.js, Express.js, Python, Django</li>
            </ul>
            <div className='btn'>
              {
                isAuthenticated ?
                  <button className='enable'>Apply</button> :
                  <button className='disable' disabled>Apply</button>
              }
            </div>

          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

        <Accordion className='accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className='accodion-summary'
          >
            <ul className='list'>
              <li className='title'>Wordpress Developer</li>
              <li className='company'>Facebook</li>
              <li className='Experience'>0-3 years</li>
              <li className='skills'>Wordpress, Elementor, Shopify</li>
            </ul>
            <div className='btn'>
              {
                isAuthenticated ?
                  <button className='enable'>Apply</button> :
                  <button className='disable' disabled>Apply</button>
              }
            </div>

          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

        

      </div>
    </div>
  )
}

export default FindAJob;