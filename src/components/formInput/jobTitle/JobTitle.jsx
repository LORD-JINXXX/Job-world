import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import './jobtitle.css';

const JobTitle = () => {

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

    const names = [
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
    const [personName, setPersonName] = useState('');

    function getStyles(name, personName, theme) {
        return {
            fontWeight:
                personName.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    return (
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
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Name" />}
                        MenuProps={MenuProps}
                        autoWidth='true'
                    >
                        {names.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, personName, theme)}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </div>
        </div>
    )
}

export default JobTitle;