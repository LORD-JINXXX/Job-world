import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './experience.css';
import { useState } from 'react';

const Experience = () => {

    const [selectMinYear, setSelectMinYear] = useState('');
    const [selectMaxYear, setSelectMaxYear] = useState('');

    const handleMinChange = (event) => {
        setSelectMinYear(event.target.value);
    };

    const handleMaxChange = (event) => {
        setSelectMaxYear(event.target.value);
    };


    return (
        <div className="inputContainer">
            <div className="label">
                <InputLabel htmlFor="component-simple">Required Experience</InputLabel>
            </div>
            <div className='input'>
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
            </div>
        </div>
    )
}

export default Experience;