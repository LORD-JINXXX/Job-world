import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './postajob.css';

import { useAuth0 } from "@auth0/auth0-react";





const PostAJob = () => {

  const { isAuthenticated, } = useAuth0();


  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const titles = [
    'Full Stack Developer',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'Wordpress Developer',
    'React.js Developer',
    'Business Analyst',
    'Data Analyst',
    'Android Developer',
    'IOS Developer',
  ];

  const theme = useTheme();
  const [jobtitle, setJobTitleName] = useState('');

  function getTitleStyles(title, jobtitle, theme) {
    return {
      fontWeight:
        jobtitle.indexOf(title) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleJobChange = (event) => {
    const {
      target: { value },
    } = event;
    setJobTitleName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const companyNames = [
    'Google',
    'Microsoft',
    'Accenture',
    'Meta',
    'Oracle',
    'Amazon',
    'Flipcart',
    'Apple',
    'Samsung',
    'Xiomi',
  ];

  const [companyName, setCompanyName] = useState('');

  function getCompanyStyles(companyNames, companyName, theme) {
    return {
      fontWeight:
        companyNames.indexOf(companyName) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleCompanyChange = (event) => {
    const {
      target: { value },
    } = event;
    setCompanyName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [selectMinYear, setSelectMinYear] = useState('');
  const [selectMaxYear, setSelectMaxYear] = useState('');

  const handleMinChange = (event) => {
    setSelectMinYear(event.target.value);
  };

  const handleMaxChange = (event) => {
    setSelectMaxYear(event.target.value);
  };


  return (
    <div className='postMain'>
      <div className="header">
        <img src="./images/job4.png" alt="" />
        <span><h3>Post a new job</h3></span>
      </div>

      <div className="form">
        <div className="inputContainer">
          <div className="label">
            <InputLabel htmlFor="component-simple">Choose the position for vacancy</InputLabel>
          </div>
          <div className='input'>

            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel htmlFor="component-simple">Title</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                single
                value={jobtitle}
                onChange={handleJobChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                autoWidth='true'
              >
                {titles.map((title) => (
                  <MenuItem
                    key={title}
                    value={title}
                    style={getTitleStyles(title, jobtitle, theme)}
                  >
                    {title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

          </div>
        </div>

        <div className="inputContainer">
          <div className="label">
            <InputLabel htmlFor="component-simple">Choose your organization</InputLabel>
          </div>
          <div className='input'>

            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel htmlFor="component-simple">Name</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                single
                value={companyName}
                onChange={handleCompanyChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                autoWidth='true'
              >
                {companyNames.map((companyName) => (
                  <MenuItem
                    key={companyName}
                    value={companyName}
                    style={getCompanyStyles(companyName, companyName, theme)}
                  >
                    {companyName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

          </div>
        </div>

        <div className="inputContainer inputExpContainer" >
          <div className="label">
            <InputLabel htmlFor="component-simple">Required Experience</InputLabel>
          </div>
          <Box className='input' sx={{
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row", xl: "row" },
            width: { xs: "100%", md: 'unset' }
          }}>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-autowidth-label">Min Experience</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={selectMinYear}
                onChange={handleMinChange}
                autoWidth
                label="selectYear"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={0}>Fresher</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-autowidth-label">Max Experience</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={selectMaxYear}
                onChange={handleMaxChange}
                autoWidth
                label="selectYear"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        <div className="inputContainer">
          <div className="label">
            <InputLabel htmlFor="component-simple">Job Description</InputLabel>
          </div>
          <div className='input'>
            <Box
              sx={{
                width: { lg: "500", md: "500" },
                maxWidth: '100%'

              }}
            >
              <TextField fullWidth label="Enter the description" id="fullWidth" />
            </Box>

          </div>
        </div>

        <div className="inputBtnContainer">
          {
              isAuthenticated ?
                <button className='enable'>Post the job</button> :
                <button className='disable' disabled>Post the job</button>
          }
        </div>

      </div>

    </div>
  )
}

export default PostAJob;